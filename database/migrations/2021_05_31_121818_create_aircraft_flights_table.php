<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAircraftFlightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aircraft_flights', function (Blueprint $table) {
            $table->id();
            $table->foreignId('aircraft_id')->nullable()->constrained('aircrafts');
            $table->foreignId('flight_id')->nullable()->constrained('flights');
            $table->date('date')->nullable();
            $table->time('departure_time');
            $table->time('arrival_time');
            $table->string('flight_time', 20);
            $table->string('status', 10)->default('PLANNED');
            // PLANNED, CONFIRMED, DELAYED, CANCELLED
            $table->string('phase', 20)->default('CLOSED');
            // CLOSED, OPEN FOR CHECK IN, BOARDING, DEPARTED, LANDED
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aircraft_flights');
    }
}
