const prompt = require('prompt-sync')();
let i,j;
let n = prompt("Enter The Number of Elements : ");
let arr=[];
for( i=1;i<=n;i++){
    let x= prompt("Enter The Elements : ");
    arr.push(Number(x));
}
for(j=0;j<n;j++){
    console.log(arr[j])
}