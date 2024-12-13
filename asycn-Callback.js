// console.log("satu");
// Fungsi selanjutnya akan dijalankan setelah 3 detik atau 3000 milisekon
// SetTimeOut() adalah salah satu operasi asynchronus
// setTimeout(function(){
//     console.log("Tiga");
// }, 3000);

// console.log("Dua");

// Contoh lain
// console.log("El membuka browser");

// setTimeout( ()=> {
//     console.log("Dowloading video selesai")
// }, 5000);

// console.log("El membuka youtube");


// Contoh masak air
// const persiapan = () => {
//     setTimeout(() => {
//         console.log("Mempersiapkan bahan");
//     }, 3000);
// }

// const masakAir = () => {
//     setTimeout(()=> {
//         console.log("Memasak air");
//     }, 7000);
// }

// const masakMie = () => {
//     setTimeout(()=> {
//         console.log("Masak mie dilakukan");
//     }, 5000)
// }

// const main = () => {
//     persiapan();
//     masakAir();
//     masakMie();
// }

// main();

// Tapi jika dengan cara diatas, dia akan melalui tahap memasak air karena waktunya lebih sedkiti dari pada masak air
// Maka bisa dibuat seperti berikut

const persiapan = () => {
        console.log("Mempersiapkan bahan");
}

const masakAir = () => {
        console.log("Memasak air");
}

const masakMie = () => {
        console.log("Masak mie dilakukan");
}

const main = () => {
    setTimeout(()=> {
        persiapan();

        setTimeout(()=> {
            masakAir();

            setTimeout(() => {
                masakMie();
            }, 5000)
        }, 7000)
    }, 3000)
}

main();