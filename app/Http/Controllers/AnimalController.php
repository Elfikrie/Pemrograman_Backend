<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    //
    public $animals = ["Kucing", "Ayam", "Ikan"];
    // Menampilkan data animal
    public function index() {
        foreach($this->animals as $animal){
            echo $animal;
            echo "\n";
        }
    }
    // Menambahkan data animal
    public function store(Request $request) {
        array_push($this->animals, $request->name);
        return $this->animals;
    }
    // Mengupdate data animal
    public function update(Request $request, $id) {
        $this->animals[$id] = $request->name;
        return $this->animals;
    }
    // Menghapus data animals
    public function destroy(Request $request, $id) {
        array_splice($this->animals, $id, 1);
        return $this->animals;
    }
}
