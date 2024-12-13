// Producing Promise
const persiapan = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Persiapan....");
        }, 3000)
    })
}

const rebusAir = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve("Merebus Air....");
        }, 7000);
    })
}

const rebusMie = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Memasak Mie....")
        }, 5000)
    })
}

// Consuming promise
const main = () => {
        persiapan()
        .then((res) => {
            console.log(res);
            return rebusAir();
        })
        .then((res) => {
            console.log(res);
            return rebusMie();
        })
        .then((res) => {
            console.log(res);
        })
}

main();