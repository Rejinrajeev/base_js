let a=[0,1,2,3,5,6,7,8,9,10];
flag=0;
let i,x;
for(i=0;i<a.length;i++){
    if(a[i]==i){
        flag=0;
    }
    else{
        flag=1;
        x=i;
        break;
    }
}
if(flag==1){
    console.log(x)
}