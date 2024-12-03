const {index, store, update, destroy} = require("./fruitsController.js");

// Membuat fungsi utama main
let main = () => {
    index();
    store("Pisang");
    update(0, "Kelapa");
    destroy(0, 1);
}

main();

