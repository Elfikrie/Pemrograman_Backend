<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator; //Harus ditambahkan ketika menggunakan fungsi validator

class StudentController extends Controller
{
    // Menampilkan data
    public function index()
    {
        $students = Student::all();
        // isNotEmpty ialah fungsi dari laravel yang bertugas untuk mengecek bahwasanya data tersebut tidak kosong
        if(!empty($students)){
            $response = [
                "message" => "Success Showing All Students Data",
                "data" => $students
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                "message" => "Data is Empty",
            ];
            return response()->json($response, 200);
        }

    }

    // Menambahkan data
    public function store(Request $request)
    {
        // 1. Cara manual untuk membuat fungsi validasi melalui ORM
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:200',
            'nim' => 'numeric|required',
            'email' => 'email|required',
            'majority' => 'required'
        ]);
        // Fungsi fails() adalah fungsi yang mengembalikan nilai error jika data ada yang kosong
        if ($validator->fails()){
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        } else {
            $students = Student::create($validator);

            return response()->json([
                'message' => 'Student is created successfully',
                'data' => $validator
            ], 200);
        } 
        
        // 2. Cara otomatis untuk memvalidasi yaitu dengan fungsi validate
        // $validateData = $request->validate([
        //     'name' => 'required|max:200',
        //     'nim' => 'numeric|required',
        //     'email' => 'email|required',
        //     'majority' => 'required'
        // ]);

        // If ini masih belum bener, karena sepertinya sudah ada pegecekan diatas pada variabel validateData
        // if($validateData == false){
        //     return response()->json([
        //         'message' => 'Data is not complete'
        //     ], 404);
        // }

        // $students = Student::create($validateData);

        // return response()->json([
        //     'message' => 'Data successfully to add',
        //     'data' => $students
        // ], 404);

    }

    // Menampilkan salah satu data 
    public function show(string $id)
    {
        $students = Student::find($id);

        if($students){
            $response = [
                "message" => "Success Showing data",
                "data" => $students
            ];
            return response()->json($response, 200);
        }
    }

    // Memperbarui nilai data
    public function update(Request $request, string $id)
    {
        $students = Student::find($id);

        if($students){
            $input = [
                "name" => $request-> name ?? $students->name,
                "nim" => $request-> nim ?? $students->nim,
                "email" => $request->email ?? $students->email,
                "majority" => $request->majority ?? $students->majority
            ];

            $students ->update($input);

            $data = [
                "Message" => "Successfully update new student",
                "Data" => $students
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                "Message" => "Data not found",
            ];
            return response()->json($data, 404);
        };
    }

    // Menghapus Data
    public function destroy(string $id)
    {
        $students = Student::find($id);

        if($students){
            $students->delete();

            return response()->json("Successfully to delete data", 200);
        } else {
            return response()->json("Data not found", 200);
        }
    }
}
