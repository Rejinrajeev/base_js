let k;
for(let i=1;i<=5;i++){
let row='';
    for(let j=1;j<=9;j++)
        if(j>=6-i && j<=4+i&&k==1){
            row=row+'*';
            k=0;
        } 
        else{
            row=row+' ';
            k=1;
        }
       console.log(row);
}

