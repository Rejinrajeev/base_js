function reverse(str) {
let reversee = '';
for (let i = str.length - 1; i >= 0; i--) {
reversee += str[i];
}
if(str===reversee){
    console.log("Palindromee")
}
else{
    console.log("not palindrome")
}
} 
reverse("malayalam");