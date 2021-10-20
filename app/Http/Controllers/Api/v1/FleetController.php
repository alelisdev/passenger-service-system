<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Aircraft;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class FleetController extends Controller
{
    //
    public function __construct() {
        $this->middleware('auth:api', ['except' => []]);
    }
    
    /**
     * Response all data
     *
     * @return \Illuminate\Http\Response
     */
    
    public function getAll()
    {
        $aircrafts = Aircraft::all();
        // foreach ($aircrafts as $aircraft) {
        //     $aircraft->roles;
        // }
        return response()->json([
            'message' => 'success',
            'aircrafts' => $aircrafts
        ], 200);
    }

    /**
     * Response one data by id
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getById(Request $request, $aircraftId)
    {
        $aircraft = Aircraft::find($aircraftId);
        return response()->json([
            'message' => 'success',
            'aircraft' => $aircraft,
        ], 200);
    }

    /**
     * Create new data
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'registration' => 'required|string|between:1,100',
            'model' => 'required|string|between:1,100',
            'seat_config' => 'required',
            'total_seat' => 'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $aircraft = Aircraft::create(array_merge(
                    $validator->validated(),
                ));

        return response()->json([
            'message' => 'aircraft successfully registered',
            'aircraft' => $aircraft
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
        // Update aircraft
        $request->validate([
            'registration' => 'required|string|between:1,100',
            'model' => 'required|string|between:1,100',
            'seat_config' => 'required',
            'total_seat' => 'required|numeric',
        ]);
        
        $aircraft = Aircraft::find($request->id);
        $aircraft -> update([
            'registration' => $request->registration,
            'model' => $request->model,
            'seat_config' => $request->seat_config,
            'total_seat' => $request->total_seat,
            'status' => $request->status,
        ]);

        return response()->json([
            'message' => 'aircraft successfully updated',
            'aircraft' => $aircraft
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $aircraftId)
    {
        //delete aircraft
        $aircraft = Aircraft::find($aircraftId);
        $aircraft -> delete();
        $aircrafts = Aircraft::all();
        // foreach ($aircrafts as $aircraft) {
        //     $aircraft->roles;
        // }
        return response()->json([
            'message' => 'successfully deleted',
            'aircrafts' => $aircrafts
        ], 200);
    }

    public function getAircraftOptions()
    {
        $aircraftOptions = [];
        $aircrafts = Aircraft::orderBy('id')->get();
        $temp = [
            'label' => '',
            'value' => '',
        ];
        foreach ($aircrafts as $aircraft) {
            $temp['label'] = $aircraft->registration;
            $temp['value'] = $aircraft->id;
            array_push($aircraftOptions, $temp);
        }
        return response()->json([
            'message' => 'success',
            'aircraftOptions' => $aircraftOptions,
        ], 200);
    }
}
