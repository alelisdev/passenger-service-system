<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Passenger;
use App\Models\Role;
use App\Models\FlightPassenger;
use App\Models\AircraftFlight;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;

class PassengerController extends Controller
{
    //
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['passengerSeatSave']]);
    }
    /**
     * Response all data
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $passengers=[];
        $passengers = Passenger::all();

        return response()->json([
            'message' => 'success',
            'passengers' => $passengers
        ], 200);
    }

    /**
     * Response one data by id
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getById(Request $request, $passengerId)
    {
        $passenger = Passenger::find($passengerId);

        return response()->json([
            'message' => 'success',
            'passenger' => $passenger,
        ], 200);
    }

    /**
     * Create new data
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|between:1,100',
            'last_name' => 'required|string|between:1,100',
            'phone' => 'required|unique:passengers',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $passenger = Passenger::create(array_merge(
                    $validator->validated(),
                    [
                     'start_date' => $request->start_date,
                     'roster' => $request->roster,
                     'departed_flight' => $request->departed_flight,
                     'landed_flight' => $request->landed_flight,
                     'birthday' => $request->birthday,
                     'company' => $request->company,
                     'email' => $request->email,
                    ]
                ));

        if (($passenger->roster) && ($passenger->start_date) && ($passenger->departed_flight) && ($passenger->landed_flight)) {
            $roster = explode("-", $passenger->roster);
            $date = new DateTime($passenger->start_date, new DateTimeZone('Australia/Sydney'));
            $date = $date->format('Y-m-d');
            $year = date("Y", strtotime($date));
            $i = 0;
            while($year == date("Y", strtotime($date))) {
                $i = $i % 4;
                if (($i == 0) || ($i == 2)) {
                    $aircraft_flights = AircraftFlight::where('flight_id', $passenger->departed_flight)
                                                ->where('date', $date)->get();
                } else {
                    $aircraft_flights = AircraftFlight::where('flight_id', $passenger->landed_flight)
                                                ->where('date', $date)->get();
                }
                if (count($aircraft_flights) > 0) {
                    $flight_passenger = new FlightPassenger;
                    $flight_passenger->aircraft_flight_id = $aircraft_flights[0]->id;
                    $flight_passenger->passenger_id = $passenger->id;
                    $flight_passenger->save();
                } else {
                    return response()->json([
                        'message' => 'Does not exist such flight on '.$date,
                    ], 201);
                }
                $date = date('Y-m-d', strtotime($date. ' + '.$roster[$i].' days'));
                $i++;
            }
        }
        
        return response()->json([
            'message' => 'success',
            'passenger' => $passenger
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // Update passenger
        $request->validate([
            'first_name' => 'required|string|between:1,100',
            'last_name' => 'required|string|between:1,100',
            'phone' => 'required',
            'status' => 'required',
        ]);
        
        $passenger = Passenger::find($request->id);
        $old_roster = $passenger->roster;
        $old_start_date = $passenger->start_date;
        $old_departed_flight = $passenger->departed_flight;
        $old_landed_flight = $passenger->landed_flight;

        $passenger -> update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'company' => $request->company,
            'roster' => $request->roster,
            'status' => $request->status,
            'email' => $request->email,
            'departed_flight' => $request->departed_flight,
            'landed_flight' => $request->landed_flight,
            'start_date' => $request->start_date,
        ]);

        if (($old_roster != $passenger->roster) || ($old_start_date != $passenger->start_date) || ($old_departed_flight != $passenger->departed_flight) || ($old_landed_flight != $passenger->landed_flight)) {
            $current_date = Carbon::now();
            $current_date = new DateTime($current_date, new DateTimeZone('Australia/Sydney'));
            $current_date = $current_date->format('Y-m-d');
            $flight_passengers = FlightPassenger::where('passenger_id', $passenger->id)
                                                ->whereHas('aircraftFlight', function ($query) use ($current_date)
                                                {
                                                    $query->where('date', '>=', $current_date);
                                                })->delete();
            
            $roster = explode("-", $passenger->roster);
            $date = new DateTime($passenger->start_date, new DateTimeZone('Australia/Sydney'));
            $date = $date->format('Y-m-d');
            while ((strtotime($current_date)-strtotime($date)) > 0) {
                $date = date('Y-m-d', strtotime($date. ' + 14 days'));
            }

            $year = date("Y", strtotime($date));
            $i = 0;
            while($year == date("Y", strtotime($date))) {
                $i = $i % 4;
                if (($i == 0) || ($i == 2)) {
                    $aircraft_flights = AircraftFlight::where('flight_id', $passenger->departed_flight)
                                                ->where('date', $date)->get();
                } else {
                    $aircraft_flights = AircraftFlight::where('flight_id', $passenger->landed_flight)
                                                ->where('date', $date)->get();
                }
                if (count($aircraft_flights) > 0) {
                    $flight_passenger = new FlightPassenger;
                    $flight_passenger->aircraft_flight_id = $aircraft_flights[0]->id;
                    $flight_passenger->passenger_id = $passenger->id;
                    $flight_passenger->save();
                } else {
                    return response()->json([
                        'message' => 'Does not exist such flight on '.$date,
                    ], 201);
                }
                $date = date('Y-m-d', strtotime($date. ' + '.$roster[$i].' days'));
                $i++;
            }

            return response()->json([
                'message' => 'update',
                'flight_passengers' => $flight_passengers
            ], 201);
        }

        return response()->json([
            'message' => 'passenger successfully updated',
            'passenger' => $passenger
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $passengerId)
    {
        //delete passenger
        $passenger = Passenger::find($passengerId);
        $passenger -> delete();
        $passengers = Passenger::all();

        return response()->json([
            'message' => 'successfully deleted',
            'passengers' => $passengers
        ], 200);
    }

    public function getFlightPassengerById(Request $request, $passengerId, $flightId)
    {        
        $flight_passengers = FlightPassenger::where('aircraft_flight_id', $flightId)
                                            ->where('passenger_id', $passengerId)->get();
        if (count($flight_passengers) > 0) {
            $flight_passenger = $flight_passengers[0];
            $flight_passenger->passenger;
        } else {
            $flight_passenger = null;
        }
        return response()->json([
            'message' => 'success',
            'flight_passenger' => $flight_passenger,
        ], 200);
    }

    public function getPassengerFlights(Request $request, $passengerId)
    {
        $current_date = Carbon::now();
        $current_date = new DateTime($current_date, new DateTimeZone('Australia/Sydney'));
        $current_date = $current_date->format('Y-m-d');
        $upcoming_flights = FlightPassenger::where('passenger_id', $passengerId)
                                                ->whereHas('aircraftFlight', function ($query) use ($current_date)
                                                {
                                                    $query->where('date', '>=', $current_date);
                                                })->get();
        if (count($upcoming_flights) > 0) {
            foreach ($upcoming_flights as $upcoming_flight) {
                $upcoming_flight->aircraftFlight->aircraft;
                $upcoming_flight->aircraftFlight->flight;
            }
        }
        $previous_flights = FlightPassenger::where('passenger_id', $passengerId)
                                                ->whereHas('aircraftFlight', function ($query) use ($current_date)
                                                {
                                                    $query->where('date', '<', $current_date);
                                                })->get();
        if (count($previous_flights) > 0) {
            foreach ($previous_flights as $previous_flight) {
                $previous_flight->aircraftFlight->aircraft;
                $previous_flight->aircraftFlight->flight;
            }
        }
        
        return response()->json([
            'message' => 'success',
            'upcoming_flights' => $upcoming_flights,
            'previous_flights' => $previous_flights,
        ], 200);
    }

    public function passengerSeatSave(Request $request)
    {
        $flight_passengers = FlightPassenger::where('aircraft_flight_id', $request->flightId)
                                            ->where('passenger_id', $request->passengerId)->get();
        if (count($flight_passengers) > 0) {
            $flight_passenger = $flight_passengers[0];
            $flight_passenger -> update([
                'seat' => $request->seat,
            ]);
            if ($request->statusFlag) {
                $flight_passenger -> update([
                    'status' => 'CHECKED',
                ]);
            }
        } else {
            return response()->json([
                'message' => 'do not exist such passenger',
            ], 200);
        }
        
        return response()->json([
            'message' => 'success',
            'flight_passenger' => $flight_passenger,
        ], 200);
    }
}
