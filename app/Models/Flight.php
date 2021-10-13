<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;

    public $table = "flights";

    protected $fillable = [
        'airline_code',
        'flight_number',
        'origin_airport_name',
        'origin_airport_code',
        'destination_airport_name',
        'destination_airport_code',
        'departure_time',
        'arrival_time',
        'flight_time',
        'operation_days',
        'type',
    ];

    protected $casts = [
        'departure_time' => 'datetime:H:i', // Change your format
        'arrival_time' => 'datetime:H:i',
        'operation_days' => 'array',
    ];

    public function aircrafts()
    {
        return $this->belongsToMany(Aircraft::class, 'aircraft_flights');
    }
}
