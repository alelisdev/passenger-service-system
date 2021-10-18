<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([ 'prefix' => 'v1', 'middleware' => 'api'], function() {

    /* User logout from system */
    Route::get('/user/logout', 'App\Http\Controllers\Api\v1\AuthController@logout');

    // Get auth user
    Route::get('/token/validate', 'App\Http\Controllers\Api\v1\AuthController@auth');

    /* User logout from system */
    Route::get('/qrcode', 'App\Http\Controllers\Api\v1\QrcodeController@index');

    /* User register */
    Route::post('/user/register', 'App\Http\Controllers\Api\v1\AuthController@register');

    /* User login */
    Route::post('/admin/login', 'App\Http\Controllers\Api\v1\AuthController@adminLogin');

    /* Refresh user's token */
    Route::get('/user/refresh', 'App\Http\Controllers\Api\v1\AuthController@token');

    /* User logout from system */
    Route::get('/user/logout', 'App\Http\Controllers\Api\v1\AuthController@logout');

    // Get auth user
    Route::get('/token/validate', 'App\Http\Controllers\Api\v1\AuthController@auth');

    /* User logout from system */
    Route::get('/qrcode', 'App\Http\Controllers\Api\v1\QrcodeController@index');

    //Passenger actions
    Route::group([ 'prefix' => 'passenger' ], function() {
        /* Passenger login */
        Route::post('/login', 'App\Http\Controllers\Api\v1\AuthController@login');

        /* Init Passenger's web check in */
        Route::get('/checkin/init/{reference}', 'App\Http\Controllers\Api\v1\CheckinController@initCheckin');
        /* Save passenger's type */
        Route::put('/type/save', 'App\Http\Controllers\Api\v1\CheckinController@passengerTypeSave');
        /* Email passenger's boarding pass */
        Route::post('/email', 'App\Http\Controllers\Api\v1\CheckinController@emailBoardingPass');
        /* Get passenger's qrcode */
        Route::get('/qrcode/{id}', 'App\Http\Controllers\Api\v1\CheckinController@getQrCode');
        
        Route::get('/routines', 'App\Http\Controllers\Api\v1\FlightController@getRoutine');
    });

    /* Get all flight_passengers*/
    Route::get('admin/schedule/flight_seat_map/{flightId}', 'App\Http\Controllers\Api\v1\AircraftFlightController@getFlightPassengers');
    /* Book passenger's seat */
    Route::put('admin/passenger/seat/save', 'App\Http\Controllers\Api\v1\PassengerController@passengerSeatSave');

    //Admin actions
    Route::group([ 'prefix' => 'admin', 'middleware' => 'isAdmin' ], function() {
        

        /* Get all passengers details*/
        Route::get('/passengers', 'App\Http\Controllers\Api\v1\PassengerController@getAll');
        // /* Add a passenger */
        Route::post('/passenger/create', 'App\Http\Controllers\Api\v1\PassengerController@create');
        // /* Update a passenger */
        Route::put('/passenger/update', 'App\Http\Controllers\Api\v1\PassengerController@update');
        /* Get passenger detail by id */
        Route::get('/passenger/{passengerId}', 'App\Http\Controllers\Api\v1\PassengerController@getById');
        /* Get flight_passenger detail by id */
        Route::get('/passenger/{passengerId}/flight/{flightId}', 'App\Http\Controllers\Api\v1\PassengerController@getFlightPassengerById');
        /* Get a passenger's flights */
        Route::get('/passenger/{passengerId}/flights', 'App\Http\Controllers\Api\v1\PassengerController@getPassengerFlights');
        /* delete passenger by id */
        Route::delete('/passenger/delete/{passengerId}', 'App\Http\Controllers\Api\v1\PassengerController@delete');
        
        /* Get all users details*/
        Route::get('/users', 'App\Http\Controllers\Api\v1\UserController@getAll');
        // /* Add a user */
        Route::post('/user/create', 'App\Http\Controllers\Api\v1\UserController@create');
        // /* Update a user */
        Route::put('/user/update', 'App\Http\Controllers\Api\v1\UserController@update');
        /* Get user detail by id */
        Route::get('/user/{userId}', 'App\Http\Controllers\Api\v1\UserController@getById');
        /* delete user by id */
        Route::delete('/user/delete/{userId}', 'App\Http\Controllers\Api\v1\UserController@delete');
        /* Get all aircrafts details*/
        Route::get('/aircrafts', 'App\Http\Controllers\Api\v1\FleetController@getAll');
        /* Get all aircraft registrations*/
        Route::get('/aircraft/options', 'App\Http\Controllers\Api\v1\FleetController@getAircraftOptions');
        // /* Add a aircraft */
        Route::post('/aircraft/create', 'App\Http\Controllers\Api\v1\FleetController@create');
        // /* Update a aircraft */
        Route::put('/aircraft/update', 'App\Http\Controllers\Api\v1\FleetController@update');
        /* Get aircraft detail by id */
        Route::get('/aircraft/{aircraftId}', 'App\Http\Controllers\Api\v1\FleetController@getById');
        /* delete aircraft by id */
        Route::delete('/aircraft/delete/{aircraftId}', 'App\Http\Controllers\Api\v1\FleetController@delete');
        
        /* Get all flights details*/
        Route::get('/flights', 'App\Http\Controllers\Api\v1\FlightController@getAll');
        // /* Add a flight */
        Route::post('/flight/create', 'App\Http\Controllers\Api\v1\FlightController@create');
        // /* Update a flight */
        Route::put('/flight/update', 'App\Http\Controllers\Api\v1\FlightController@update');
        /* Get flight detail by id */
        Route::get('/flight/{flightId}', 'App\Http\Controllers\Api\v1\FlightController@getById');
        /* delete flight by id */
        Route::delete('/flight/delete/{flightId}', 'App\Http\Controllers\Api\v1\FlightController@delete');

        /* Get all aircraft_flights details*/
        Route::post('/schedule/aircraft_flights', 'App\Http\Controllers\Api\v1\AircraftFlightController@getAircraftFlightsByDate');
        // /* Add a flight */
        Route::post('/schedule/save', 'App\Http\Controllers\Api\v1\AircraftFlightController@saveAircraftFlight');
        // /* Indivisual Ticketing */
        Route::post('/schedule/indivisual-ticketing', 'App\Http\Controllers\Api\v1\AircraftFlightController@indivisualTicketing');
        // /* Bulk Ticketing */
        Route::post('/schedule/bulk-ticketing', 'App\Http\Controllers\Api\v1\AircraftFlightController@bulkTicketing');
        // /* Assign Passenger to Flight */
        Route::post('/schedule/flight/assign-passenger', 'App\Http\Controllers\Api\v1\AircraftFlightController@assignPassengerToFlight');
        /* remove passenger from flight */
        Route::delete('schedule/flight/remove-passenger/{flightPassengerId}', 'App\Http\Controllers\Api\v1\AircraftFlightController@removePassengerFromFlight');
    });
});
