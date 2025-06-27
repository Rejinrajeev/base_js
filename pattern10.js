
function pattern(){
for(let i=1;i<=5;i++){
    let line=""
    let k="1"

    for(j=1;j<=9;j++){
        if(j>=6-i&& j<=4+i &&k==1){
            line+="*"
            k=0;
         }else{
            line+=" "
            k=1;
        
        }
    }
    console.log(line)
}}





console.log("pattern printing")
  pattern();