<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightPassengersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flight_passengers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('passenger_id')->nullable()->constrained('passengers')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('aircraft_flight_id')->nullable()->constrained('aircraft_flights')->onUpdate('cascade')->onDelete('cascade');
            $table->string('seat', 4)->nullable();
            $table->string('book_reference', 7)->nullable();
            $table->string('passenger_type', 15)->nullable();
            $table->string('status', 8)->default('CLOSED');
            //  CLOSED, SENDED, CHECKED
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
        Schema::dropIfExists('flight_passengers');
    }
}
