let a=[5,356,8525,2,3];
let evecount=0,oddcount=0;
for(i=0;i<5;i++){
    if((a[i]%2)==0){
        evecount++;
    }
    else{
        oddcount++;
    }
}

console.log(`Count Of Evennumbers :`,evecount,`
Count Of Oddnumbers :`,oddcount)
