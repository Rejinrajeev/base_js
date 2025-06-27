let age=100;
if(age<5){
    console.log(`Price=Free`);
}
else if(age>=5&&age<=18){
    console.log(`Price =100`)
}
else if(age>=19&&age<=60){
    console.log(`Price =200`)
}
else if(age>60){
    console.log(`Price =150`)
}
else{
    console.log(`Invaid`)
}