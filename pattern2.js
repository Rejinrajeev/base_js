
line=5;
for(let i=1;i<=line;i++){
    row='';
    for(let j=1;j<=line;j++)
        if(j>line-i){
            row=row+' * ';
        } 
        else{
            row=row='';
        }
       console.log(row);
}