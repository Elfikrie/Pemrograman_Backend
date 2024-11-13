<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    // Get All Resources
    public function index()
    {
        $news = News::all();
        // Melakukan pengecekan apakah terdapat data didalam database
        if(count($news)!== 0){
            $response = [
                "message" => "Get All Resource",
                "data" => $news
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                "message" => "Data is Empty",
            ];
            return response()->json($response, 200);
        }

    }

    // Add Resource
    public function store(Request $request)
    {
        // Melakukan validasi data yang diinput
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:200',
            'author' => 'string|required',
            'description' => 'string|required|max:300',
            'content' => 'required|max:5000',
            'url' => 'required',
            'url_image' => 'required',
            'category' => 'required'
        ]);
        // Melakukan validasi jika ada data yang kosong
        // Fungsi fails() adalah fungsi yang mengembalikan nilai error jika data ada yang kosong
        if ($validator->fails()){
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 204);
        } else {
            // Menyimpan data hasil validasi
            $ValidatedData = $validator->validated();
            // Menambahkan data yang telah divalidasi
            $news = News::create($ValidatedData);

            return response()->json([
                'message' => 'Resource is added successfully',
                'data' => $news
            ], 201  );
        } 
    }

    // Get Detail Resources
    public function show(string $id)
    {
        //Mencari data sesuai id
        $news = News::find($id);

        if($news){
            $response = [
                "message" => "Get Detail Resource",
                "data" => $news
            ];
            return response()->json($response, 200);
        } else {
            return response()->json([
                'message' => 'Resource not found'
            ], 404);
        }
    }

    // Memperbarui single resource
    public function update(Request $request, string $id)
    {
        $news = News::find($id);

        // Melakukan validasi inputan user, jika ada yang kosong akan diisi default
        if($news){
            $input = [
                "title" => $request-> title ?? $news->title,
                "author" => $request-> author ?? $news->author,
                "description" => $request->description ?? $news->description,
                "content" => $request->content ?? $news->content,
                "url" => $request->url ?? $news->url,
                "url_image" => $request->url_image ?? $news->url_image,
                'category' => $request->category ?? $news->category
            ];

            // Melakukan update pada data
            $news ->update($input);

            $data = [
                "Message" => "Successfully update new news",
                "Data" => $news
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                "Message" => "Data not found",
            ];
            return response()->json($data, 404);
        };
    }

    // Menghapus data
    public function destroy(string $id)
    {
        $news = News::find($id);

        if($news){
            // Delete Resource
            $news->delete();

            $response = [
                'message' => "Resource is delete successfully",
                'data deleted' => $news
            ];

            return response()->json($response, 200);
        } else {
            return response()->json("Resource not found", 404);
        }
    }

    // Mencari Resource by title
    public function searchTitle(string $title)
    {
        $news = News::where('title', $title)->get();

        if(count($news) !== 0){
            $response = [
                "message" => "Get Searched Resource",
                'data' => $news
            ];

            return response()->json($response, 200);
        } else {
            $response = [
                "message" => "Resource not found",
            ];

            return response()->json($response, 404);
        }
    }

    // Mencari Resource by category finance
    public function searchCategory(string $category)
    {
        $news = News::where('category', $category)->get();

        if(count($news) !== 0){
            $response = [
                "message" => "Get Searched Resource",
                'data' => $news
            ];

            return response()->json($response, 200);
        } else {
            $response = [
                "message" => "Resource not found",
            ];

            return response()->json($response, 404);
        }
    }
}
