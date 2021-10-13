<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'birthday',
        'phone',
        'company',
        'roster',
        'departed_flight',
        'landed_flight',
        'start_date',
        'status',
        'email',
    ];

    protected $casts = [
        'birthday' => 'datetime:Y-m-d',
        'start_date' => 'datetime:Y-m-d',
    ];
}
