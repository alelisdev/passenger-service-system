<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class UserController extends Controller
{
    //
    public function __construct() {
        $this->middleware('auth:api', ['except' => []]);
    }
    /**
     * Response all data
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $admin_users=[];
        $users = User::all();
        foreach ($users as $user) {
            $user->roles;
            foreach ($user->roles as $role) {
                if ($role->name == "Admin") {
                    array_push($admin_users, $user);
                }
            }
        }
        return response()->json([
            'message' => 'success',
            'users' => $admin_users
        ], 200);
    }

    /**
     * Response one data by id
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getById(Request $request, $userId)
    {
        $user = User::find($userId);
        $roleNames = [];
        foreach ($user->roles as $role) {
            array_push($roleNames, $role->name);
        }
        $user->roleNames = $roleNames;
        return response()->json([
            'message' => 'success',
            'user' => $user,
        ], 200);
    }

    /**
     * Create new data
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|between:1,100',
            'last_name' => 'required|string|between:1,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
            // 'roles' => 'required',
        ]);



        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));

        // $roles = Role::whereIn('name', $request->roles)->get();
        $roleIds = [1];
        // foreach ($roles as $role) {
        //     array_push($roleIds, $role->id);
        // }
        $user->roles()->attach($roleIds);

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // Update user
        $request->validate([
            'first_name' => 'required|string|between:1,100',
            'last_name' => 'required|string|between:1,100',
            'email' => 'required|string|email|max:100',
            'status' => 'required',
            'password' => 'confirmed',
        ]);
        $user = User::find($request->id);
        if ($request->password) {
            $user -> update([
                'password' => bcrypt($request->password),
                'name' => $request->name,
                'email' => $request->email,
                'status' => $request->status,
            ]);
        } else {
            $user -> update([
                'name' => $request->name,
                'email' => $request->email,
                'status' => $request->status,
            ]);
        }

        // $roles = Role::whereIn('name', $request->roles)->get();
        // $roleIds = [];
        // foreach ($roles as $role) {
        //     array_push($roleIds, $role->id);
        // }
        // $user->roles()->sync($roleIds);

        return response()->json([
            'message' => 'User successfully updated',
            'user' => $user
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $userId)
    {
        //delete User
        $user = User::find($userId);
        $user -> delete();
        $admin_users=[];
        $users = User::all();
        foreach ($users as $user) {
            $user->roles;
            foreach ($user->roles as $role) {
                if ($role->name == "Admin") {
                    array_push($admin_users, $user);
                }
            }
        }
        return response()->json([
            'message' => 'successfully deleted',
            'users' => $admin_users
        ], 200);
    }
}
