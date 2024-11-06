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

        if(count($students)!== 0){
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
        $input  = [
            'name' => $request->name ?? "Belum diketahui",
            'nim' => $request->nim ?? "Belum diketahui",
            'email' => $request->email ?? "Belum diketahui",
            'majority' => $request->majority ?? "Belum diketahui"
        ];

        $cekInput = [];

        foreach($input as $key => $value){
            if($value == "Belum diketahui"){
                $cekInput[] = $key; 
            }
        }
        // !empty berfungsi mengecek jika ada data yang kosong setelah pengecekan diatas
        if(!empty($cekInput)){
            $response = [
                "message" => "Data not complete",
                "missing data" => $cekInput
            ];

            return response()->json($response, 404);
        } else {
            $students = Student::create($input);

            $response = [
                "message" => "Successfully to add data",
                "data" => $students
            ];

            return response()->json($response, 200);

        }
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
