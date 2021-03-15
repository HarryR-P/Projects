var rs = require('readline-sync');

var num1 = rs.question('Enter number one: ');
var num2 = rs.question('Enter number two: ');
var num3 = rs.question('Enter number three: ');
var num4 = rs.question('Enter number four: ');

var result1 = 1;
var tempNum = num1;
while(tempNum > 0) {
	result1 = result1 * tempNum;
	tempNum--;
}

var result2 = 0;
num2 = String(num2);
for(var i = 0; i < num2.length; i++) {
	result2 += Number(num2.charAt(i));
}

var result3 = "";
num3 = String(num3);
for(var i = num3.length - 1; i >= 0; i--) {
	result3 += num3.charAt(i);
}

var result4 = palindrome(num4);


function palindrome(num) {
	var num = String(num);
	for( var i = 0; i < Math.floor(num.length / 2); i++) {
		if( num.charAt(i) != num.charAt(num.length - 1 - i)) {
			return false;
		}
	}
	return true;
}

console.log("\nThe factorial of " + num1 + " is " + result1);
console.log("The sum of the digits of " + num2 + " is " + result2);
console.log("The reverse of " + num3 + " is " + result3);
console.log("Is " + num4 + " a palendrom? " + result4.toString());