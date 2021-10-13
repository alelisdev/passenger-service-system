<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('airline_code', 10);
            $table->string('flight_number', 10);
            $table->string('origin_airport_name', 50);
            $table->string('origin_airport_code', 20)->nullable();
            $table->string('destination_airport_name', 50);
            $table->string('destination_airport_code', 20)->nullable();
            $table->time('departure_time');
            $table->time('arrival_time');
            $table->string('flight_time', 20);
            $table->json('operation_days')->nullable();
            $table->string('type', 10)->default('REGULAR');
            // REGULAR, CHARTER
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
        Schema::dropIfExists('flights');
    }
}
