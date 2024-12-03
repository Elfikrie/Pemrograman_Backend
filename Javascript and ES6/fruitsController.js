// Mengimport data fruits data file fruits.js
let fruits = require("./fruits.js");

// Menampilkan data fruits
console.log("---------------Menampilkan data---------------")
const index = () => {
    if(fruits.length == 0){
        console.log("Buah tidak tersedia");
    } else {
        for(let fruit of fruits){
            console.log(fruit);
        }
    }
}
// Menambahkan data ke fruits
let store = (fruitName) => {
    console.log("---------------Menambahkan data---------------")
    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] == fruitName) {
            console.log("Buah telah tersedia");
        } else if(i == fruits.length-1){
            fruits.push(fruitName);
            index();
            return;
        }
    }
}
// Mengupdate data
let update = (position, fruitName ) => {
    fruits[position] = fruitName;
    console.log("---------------Memperbarui data---------------")
    index();
}

// Menghapus data
let destroy = (position) => {
    fruits.splice(position, 1);
    console.log("---------------Menghapus data---------------")
    index();
}

// Mengekspor data
module.exports = {index, store, update, destroy};
