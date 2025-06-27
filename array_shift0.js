let a=[0,1,2,0,3,5,0,4,5,2,5];
let count=0;
for(let i=0;i<a.length;i++){
    if(a[i]!=0){
        a[count] = a[i]
        count++;
    }
}
let j;
for(j=count;j<a.length;j++){
    a[j]=0;
}
console.log(a[j]);