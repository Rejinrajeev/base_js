let a=[1,2,3,4,5,6,7,8,9];
let n=a.length;
while(let i<=n/2){
for(i=0;i<n;i++){
    temp=a[i];
    a[i]=a[n-i];
    a[n-i]=temp
}
for(i=0;i<n;i++){
console.log(a[1])}}