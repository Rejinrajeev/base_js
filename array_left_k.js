let arr = [3,4,7,9];
let k = 1;
for( let i = 0 ; i <k; i++){ 
  let first = arr[0];
for (let j = 0; j < arr.length; j++){
   arr[j] = arr[j+1];
}
arr[arr.length-1] = first;
}
console.log(arr)