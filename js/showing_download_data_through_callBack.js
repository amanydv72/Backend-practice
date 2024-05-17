// Tasks
// 1. Write a function to download data from url
// 2. Write a function to save that downloaded data in file and return that file
// 3. Write a function to upload the file written in previous step to a newurl

function fetchCustom(url, fn) {
  console.log("starting downloading from " + url);
  setTimeout(function process() {
    console.log("download completed");
    let response = "Dummy data";
    fn(response);
  }, 3000);
}

function writeFile(data, fn) {
  console.log("starting writing file " + data);
  setTimeout(function process() {
    console.log("Writing completed");
    let filename = "output.txt";
    fn(filename);
  }, 5000);
}

function uploadFile(filename, newurl, fn) {
  console.log("starting uploading file " + filename);
  setTimeout(function process() {
    console.log("file", filename, "uploaded suuccessfully on", newurl);
    let uploadResponse = "success";
    fn(uploadResponse);
  }, 5000);
}



//below code has problem of inversion of control and callback hell


fetchCustom("www.example.com", function fun1(response) {
  console.log("downloaded response is", response);
  writeFile(response, function fun2(filename) {
    console.log("new file written is ", filename);
    uploadFile(filename, "www.amana.com", function fun3(uploadResponse) {
      console.log("successfully uploaded", uploadResponse);
    });
  });
});
