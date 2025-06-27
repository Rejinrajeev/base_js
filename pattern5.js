
for(let i=1;i<=5;i++){
let row='';
    for(let j=1;j<=9;j++)
        if(j>=i && j<=10-i){
            row=row+'*';
        } 
        else{
            row=row+' ';
        }
       console.log(row);
}

