<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    // Menampilkan data
    public function index()
    {
        $students = Student::all();

        $response = [
            "message" => "Success Showing All Students Data",
            "data" => $students
        ];
        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input  = [
            'name' => $request->name,
            'nim' => $request->nim,
            'email' => $request->email,
            'majority' => $request->majority
        ];

        $students = Student::create($input);

        $response = [
            'message' => "Successfully create new student",
            'data' => $students
        ];

        return response()->json($response, 201);
    }

    // /**
    //  * Display the specified resource.
    //  */
    public function show(string $id)
    {
        //
    }

    // /**
    //  * Update the specified resource in storage.
    //  */
    public function update(Request $request, string $id)
    {
        $students = Student::find($id);

        $students->update ([
            'name' => $request->input('name'),
            'nim' => $request->input('nim'),
            'email' => $request->input('email'),
            'majority' => $request->input('majority')
        ]);

        $response = [
            "message" => "Successfully update new student",
            "data" => $students
        ];

        return response()->json($response, 200);
    }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    public function destroy(string $id)
    {
        $students = Student::find($id);

        $students->delete();

        $response = [
            "message" => "Successfully delete one of students",
            "data" => $students
        ];

        return response()->json($response, 200);
    }
}
