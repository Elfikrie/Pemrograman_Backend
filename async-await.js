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
// Dengan asycn await
const main = async () => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await rebusMie());
}
main()