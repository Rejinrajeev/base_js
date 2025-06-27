a=[1,2,3,4,5];
let n=5;
let f=0;
const prompt=require('prompt-sync')();
let x=prompt("Enter the number To search : ")
for(i=0;i<n;i++){
    if(a[i]==x){
        f=1;

    }}
    if(f==1){
        console.log("FOUND")
    }
    else{
        console.log("NOT FOUND")
    }
