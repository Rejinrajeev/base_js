let a=[2,82,2,6,3,58,2,1]
let big=a[0];
let small=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>big){
        big=a[i];
    }
    else if(a[i]<small){
        small=a[i];
    }
}
console.log(`sum = `,big+small);
console.log(big,small);