<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AircraftFlight extends Model
{
    use HasFactory;

    public $table = "aircraft_flights";

    protected $fillable = [
        'aircraft_id',
        'flight_id',
        'date',
        'departure_time',
        'arrival_time',
        'flight_time',
        'status',
        'phase',
    ];

    protected $casts = [
        'date' => 'datetime:Y-m-d',
        'departure_time' => 'datetime:H:i', // Change your format
        'arrival_time' => 'datetime:H:i',
    ];

    public function aircraft()
    {
        return $this->belongsTo(Aircraft::class);
    }

    public function flight()
    {
        return $this->belongsTo(Flight::class);
    }
}
