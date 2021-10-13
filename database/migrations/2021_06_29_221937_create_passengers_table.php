<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePassengersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passengers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('birthday')->nullable();
            $table->string('phone', 50);
            $table->string('email')->nullable();
            $table->string('company')->nullable();
            $table->string('roster', 8)->nullable();
            $table->integer('departed_flight')->nullable();
            $table->integer('landed_flight')->nullable();
            $table->date('start_date')->nullable();
            $table->boolean('status')->default(1)->nullable();
            // 1: ACTIVE, 2: DEACTIVE
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
        Schema::dropIfExists('passengers');
    }
}
