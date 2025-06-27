/*let num=1234;
let sum=0;
while(num>0){
    rem=num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
}
console.log(sum);
*/
function sumofdigits(num){
    let sum=0;
while(num>0){
    rem=num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
}
console.log(sum);
}

sumofdigits(1234);