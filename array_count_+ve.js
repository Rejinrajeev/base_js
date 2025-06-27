let a=[1,-2,3,-4,-5];
let count=0;
for(i=0;i<5;i++){
    if(a[i]>=0){
        count++;
    }
}
console.log(count);

// This code counts the number of non-negative elements in the array 'a'.
// It initializes a counter 'count' to zero and iterates through each element of the array