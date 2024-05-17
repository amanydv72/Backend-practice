function linearSearch(arr, x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            return i;
        }
    }
    return NaN;
}
function binarySearch(arr, x){
    let i=0;
    let j=arr.length-1;
    let mid;
    while(i<=j){
        mid=parseInt((i+j)/2);
        if(arr[mid]===x){
            return mid;
        }
        else if(arr[mid]>x){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }
    return NaN;
}

export default function fun(){
    console.log("fun");
}
function gun(){
    console.log("gun");
}

let aman = "Yadav";

export {
    linearSearch,
    binarySearch,
    gun,
    aman
}

// export default {
//     fun,
//     gun,
//     linearSearch,
//     binarySearch,
//     aman
// }

