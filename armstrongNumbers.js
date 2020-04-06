var numArray = [105, 5, 293, 153, 17, 2, 1, 371, 95, 40, 407];
var nums = [];
for (var i = 0; i < numArray.length; i++) {
    var iNum = numArray[i].toString();
    var sum = 0;
    for (var j = 0; j < iNum.length; j++) {
        var jNum = +iNum[j];
        sum += Math.pow(jNum, 3);
    }
    if (sum == numArray[i]) {
        nums.push(numArray[i]);
    }
}
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i] + " is an armstrong number...");
}
