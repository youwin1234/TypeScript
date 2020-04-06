function reverseString(toReverse:string){
    var newString="";
    for(var i = toReverse.length - 1; i>=0; i--){
        newString+=toReverse[i];
    }
    return newString;
}
console.log(reverseString("Chicago"));
console.log(reverseString("Animal Crossing"));
console.log(reverseString("Raleigh"));
console.log(reverseString("Frank Ocean"));
console.log(reverseString("Blink-182"));