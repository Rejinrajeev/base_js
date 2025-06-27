let numbers = [-3,4,6,65,60]
let largest =numbers[0];
let secondlargest = -1;
for(i=1; i<numbers.length; i++)
{
     if ( numbers[i] > largest){  
          secondlargest = largest;
          largest=numbers[i];
     }
     else if(numbers[i] > secondlargest)
     {
        secondlargest = numbers[i];
     }
}
console.log(secondlargest);