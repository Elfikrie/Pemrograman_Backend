<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Authsanctum
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/news', [NewsController::class, 'index'])->middleware('auth:sanctum');;
Route::post('/news', [NewsController::class, 'store']);
Route::get('/news/{id}', [NewsController::class, 'show']);
Route::put('/news/{id}', [NewsController::class, 'update']);
Route::delete('/news/{id}', [NewsController::class, 'destroy']);
Route::get('/news/search/{title}', [NewsController::class, 'searchTitle']);
Route::get('/news/category/{sport}', [NewsController::class, 'searchCategory']);
Route::get('/news/category/{finance}', [NewsController::class, 'searchCategory']);
Route::get('/news/category/{automotive}', [NewsController::class, 'searchCategory']);