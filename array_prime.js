let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,17];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let count = 0;
  if (num > 1) {
    for (let j = 1; j <= num; j++) {
      if (num % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      console.log(num);
    }
  }
}
