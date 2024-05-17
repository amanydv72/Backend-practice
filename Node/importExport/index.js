console.log("starting");

// const searching = require("./searching"); we get a object of all export things from ./searching file in searching variable;

// import canBeRename from "./searchingES.js";  canBeRename is an object that contains all default export from ./searchingES file that are exported through export default{.....};

import funCanBeRename, {linearSearch, binarySearch, gun, aman} from "./searchingES.js";// the std should be followed if there is default export then we firstly import default import then we import named import.
// there is no default export then we can directly import named import.


let arr = [1,2,3,4,5,6,7,8];
// canBeRename();

// canBeRename.fun();
// canBeRename.gun();
// console.log(canBeRename.linearSearch(arr, 7));
// console.log(binarySearch(arr,6));

gun();
funCanBeRename();
console.log(aman);
console.log(binarySearch(arr, 5));
console.log(linearSearch(arr, 5));