let temp;
let big=0;
num=1234;
while(num>0){
    rem=num%10;
    temp=rem;
    if(temp>big){
        big=temp;
    }
    num=Math.floor(num/10);
}
console.log(big)