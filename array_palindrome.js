let a=['m','a','l','a','y','a','l','a','m'];
let n=a.length;
let flag=0;
for(i=0;i<n/2;i++){
    if(a[i]!=a[n-1-i]){
        flag=1;
        //console.log(a[i]);
    }
}
if(flag==0){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}
