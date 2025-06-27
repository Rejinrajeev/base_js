let arr = [1,2,3,4];
let k = 2;
for( let i=0;i<k;i++){ 
  let first = arr[arr.length - 1];
for (let j = arr.length - 1; j > 0;  j--){
    arr[j] = arr[j-1];
}
    arr[0] = first;
}

console.log(arr)
 