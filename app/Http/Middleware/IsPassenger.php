<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;

class IsPassenger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        foreach (Auth::user()->roles as $role) {
            if ($role->name == 'Passenger') {
                return $next($request);
            }
        }
        return response()->json(['error' => 'Unauthorized'], 403);
    }
}
