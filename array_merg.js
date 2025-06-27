let a=[1,2,3,4,5];
let b=[6,7,8,9,10];
let c=[];
let x;
for(let i=0;i<a.length;i++){
    c[i]=a[i];

}

for(i=0;i<b.length;i++){
    c[a.length + i] = b[i];

}
for(let i=0;i<c.length;i++){
console.log(c[i]);

}

// this will merge two arrays a and b into c
// c will contain all elements of a followed by all elements of b           
