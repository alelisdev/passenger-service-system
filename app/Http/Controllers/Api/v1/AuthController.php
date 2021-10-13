<?php

namespace App\Http\Controllers\Api\v1;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Passenger;
use App\Models\FlightPassenger;
use App\Models\Role;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
// use Validator;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['adminLogin', 'login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function adminLogin(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'last_name' => 'required',
            'reference' => 'required|min:6|max:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $flight_passengers = FlightPassenger::where('book_reference', $request->reference)->get();
        if (count($flight_passengers) > 0) {
            $flight_passenger = $flight_passengers[0];
            $passenger = $flight_passenger->passenger;
            if ($passenger->last_name == $request->last_name) {
                $current_date = Carbon::now()->timezone('Australia/Sydney');
                $aircraft_flight = $flight_passenger->aircraftFlight;
                $departure_time  = new Carbon($aircraft_flight->date->format('Y-m-d').' '.$aircraft_flight->departure_time->format('H:i:s'));
                if ($departure_time > $current_date) {
                    $passenger->role = 'Passenger';
                    $passenger->book_reference = $request->reference;
                    return response()->json([
                        'user' => $passenger,
                    ], 200);
                } else {
                    return response()->json(['error' => 'The flight already departed.'], 401);
                }
            } else {
                return response()->json(['error' => 'Name and Reference not matched'], 401);
            }
        } else {
            return response()->json(['error' => 'Such Book Reference does not exist'], 401);
        }
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {

        $rules = ['first_name' => 'required|string|between:1,100',
            'last_name' => 'required|string|between:1,100',
            'email' => 'required|email|max:100|unique:users',
            'password' => 'required|confirmed|min:6'];
        


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));

            $user->roles()->attach([2]);
            return response()->json([
                'message' => 'User successfully registered',
                'user' => $user
            ], 201);
        } else {
            return response()->json([
                'description' => 'Validation failed',
                'errors' => $validator->messages()
            ], 500);
        }

        
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();

        return response()->json(['message' => 'User successfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        auth()->user()->roles;
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60000,
            'user' => auth()->user()
        ]);
    }

    /**
     * Get auth user
     *
     * @return App\Models\User
     */
    public function auth() {
        // return response()->json('date');
        return response()->json(auth()->user());
    }
}
