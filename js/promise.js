function fetchData(url) {
  return new Promise(function fun(resolve, reject) {
    console.log("Downloading data from", url);
    setTimeout(function process() {
      console.log("download completed");
      let data = "dummy data";
      resolve(data);
      console.log("try"); // this code wiil run
      resolve("aman"); // these line will not be executed as promise is fulfilled only once, and after fulfillment it changes the state from pending to fulfilled and changes value from undefined to argument passed in resolve function i.e. data.
      resolve("deepak");
    }, 7000);
  });
}

function writeData(data) {
  return new Promise(function fun(resolve, reject) {
    console.log("data writing is started ");
    setTimeout(function process() {
      console.log("data writing completed ");
      let filename = "output.txt";
      resolve(filename);
    }, 9000);
  });
}

function fileUpload(filename, newurl) {
  return new Promise(function fun(resolve, reject) {
    console.log("file " + filename + " upload is started to new URL " + newurl);
    setTimeout(function process() {
      console.log("file upload completed ");
      let result = "success";
      resolve(result);
    }, 8000);
  });
}

// promise removes the problem of inversion of control but it also suffer from promise hell as we can see below.



// let fetchpromise = fetchData("www.aman.com");
// fetchpromise.then(function processDownload(value){
//     console.log("download promise fullfilled");
//     let writepromise = writeData(value);
//     writepromise.then(function processWrite(value){
//         console.log("writing done");
//         console.log("file name is "+value);
//         let uploadpromise=fileUpload(value, "www.deepak.com");
//         uploadpromise.then(function processUpload(value){
//             console.log("upload done");
//             console.log("upload status is "+value);
//         });
//     })
// })



// below mentioned code remove the problem of promise hell.

let fetchpromise = fetchData("www.aman.com");
fetchpromise
  .then(function processDownload(value) {
    console.log("download done");
    return value;
  })
  .then(function processWrite(value) {
    return writeData(value);
  })
  .then(function processUpload(value) {
    return fileUpload(value, "www.deepak.com");
  })
  .then(function processDone(value) {
    console.log("done");
    return "done";
  });
