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
  let x = new Promise(function fun(resolve, reject) {
    console.log("data writing is started ");
    setTimeout(function process() {
      console.log("data writing completed ");
      let filename = "output.txt";
      resolve(filename);
    }, 9000);
  });
  return x;
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

async function proccessing() {
  let downloadData = await fetchData("www.aman.com");
  console.log("Data download is completed ", downloadData);
  let filename = await writeData(downloadData);
  console.log("file writing is completed and file name is ", filename);
  let uploadStatus = await fileUpload(filename, "www.deepak.com");
  console.log("file upload is completed with status ", uploadStatus);

  return true;
}

console.log("start");
proccessing();
console.log("ended");
