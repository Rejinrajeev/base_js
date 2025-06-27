let water=2
0;
if(water<=50){
    console.log(`Low Usage`);
}
else if(water>=51&&water<=150){
    console.log(`Medium Usage`)
}
else if(water>=151&&water<=300){
    console.log(`High Usage`)
}
else if(water>300){
    console.log(`over Usage`)
}
else{
    console.log(`Invaid`)
}