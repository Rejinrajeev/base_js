var age=100;
if(age>=0&&age<12){
    console.log(`Child`)
}
else if(age>=13&&age<=19){
    console.log(`Teen`)
}
else if(age>=20&&age<=59){
    console.log(`Adult`)
}else if(age>=60){
    console.log(`Sinior Citizen`)
}
else{
    console.log(`Invalid`);
}