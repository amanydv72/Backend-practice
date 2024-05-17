function fetchCustom(url, fn){
    console.log("starting download from url ",url);
    setTimeout(function process(){
        console.log("download started");
        let response="my data";
        fn(response);
        console.log("ending fetchCustom function");
    },3000)
}

function writeFile(data, fn){
    setTimeout(function process(){
        console.log("starting writing");                
        let filename="output.txt";
        fn(filename);
        console.log("ending of writeFile function");
    },8000)
}

fetchCustom("www.aman.com", function downloadCallback(response){
    console.log("response is "+response);
    writeFile(response, function writeCallback(filename){
        console.log("completed write file name is ", filename);
    })
})