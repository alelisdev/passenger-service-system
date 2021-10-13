<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlightPassenger extends Model
{
    use HasFactory;

    public $table = "flight_passengers";

    protected $fillable = [
        'passenger_id',
        'aircraft_flight_id',
        'seat',
        'book_reference',
        'passenger_type',
        'status',
    ];

    public function passenger()
    {
        return $this->belongsTo(Passenger::class, 'passenger_id');
    }

    public function aircraftFlight()
    {
        return $this->belongsTo(AircraftFlight::class, 'aircraft_flight_id');
    }
}
