let a = [1,2,3,4,5,6,7,8,9,10];
let flag = 0;
for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
        flag = 1;
        break;
    }
}
if (flag === 0) {
    console.log("sorted");
} else {
    console.log("not sorted");
}