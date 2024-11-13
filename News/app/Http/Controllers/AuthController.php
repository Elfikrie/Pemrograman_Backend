<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash; 
use Illuminate\Support\Facades\Auth; 

class AuthController extends Controller
{
    //
    // Melakukan register user
   public function register(Request $request) {
    $input = [
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password)
    ];

    $user = User::create($input);

    return response()->json([
        "message" => "User is created successfully",
        "data" => $user
    ], 200);
   }


    // Melakukan login
    public function login(Request $request){
        // Menangkap inputan dari user
        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];

        // Melakukan autentikasi
        if(Auth::attempt($input)){
            $token = Auth::user()->createToken('auth_token');

            return response()->json([
                'message' => "Login successfully",
                'token' => $token->plainTextToken 
            ], 200);
        } else {
            return response()->json([
                'message' => "Email atau Password salah", 
            ], 404);
        }
    }

    public function index(){
        $users = User::all();

        return response()->json([
            'message' => 'Data showing successfully',
            'data' => $users
        ]);
    }
}
