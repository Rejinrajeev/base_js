let a=[1,2,3,4,5,6,3,5];
let b=[];
for(let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
        if(a[i]==a[j]){
            for(let k=0;k<b.length;k++){
                if(b[k]==a[i]){
                    continue;
                }
                else{
                    b[k]=a[i];
                }
            }
        }
    }
}
for(let i=0;i<b.length;i++){
console.log(b[i]);}