let num=5;
if(num>=-9&&num<=9){
    console.log(`Single Digit`);
}
else if(num>=10&&num<=99){
    console.log(`Double Digit`);
}
else if(num>=100&&num<=999){
    console.log(`Triple Digit`);
}
else{
    console.log(`it can be <3 or >1`)
}