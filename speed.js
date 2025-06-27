let speed=8;
if(speed<=60){
    console.log(`NO Fine`);
}
else if(speed>=60&&speed<80){
    console.log(`Warning`);
}
else if(speed>=80){
    console.log(`FINE`);
}
else{
    console.log(`Invalid`)
}