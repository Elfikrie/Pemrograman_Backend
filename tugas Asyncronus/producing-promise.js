// Producing promise
let result = "Windows-10.exe";

const downloadStart = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            console.log(`Download ${result} dimulai....`);
            resolve();
        }, 1000)
    })
}

const downloadFinish = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Download Selesai...");
            console.log(`Hasil download : ${result}`);
            resolve();
        }, 5000)
    })
}

module.exports = {result, downloadStart, downloadFinish};
