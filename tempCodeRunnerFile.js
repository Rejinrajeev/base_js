let k=0;
for(let i=1;i<=7;i++){
    let row=''
    i <= 4 ? k++ : k--;
    for(let j=1;j<=7;j++){
        if(j>=5-k && j<=3+k){
             row=row+'*';
        }
        else{
             row=row+' ';
        }
    }
    console.log(row);
}
    