let rows=7


for(i=1;i<= 7;i++){
    let row=""

    for(j=1;j<=7;j++){
        if(i==1||i==7||j==1||j==7){
            row+="*"

        }else{
            row+=" "
        }
    }
    console.log(row);}