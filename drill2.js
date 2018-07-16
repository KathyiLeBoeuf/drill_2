'use strict';

function jediName(firstName, lastName) {
	return lastName.slice(0, 3) + firstName.slice(0, 2);
}
console.log(jediName("Shelly", "Kathy"));

function beyond(num) {
	if (Number.isFinite(num) && num > 0) {
		return "To infinity"
	}
	if (Number.isFinite(num) && num < 0) {
		return "To negative infinity"
	}
	if (num === +Infinity || num === -Infinity) {
		return "And beyond"
	}
	if (num === 0) {
		return "Staying home"
	}
}

console.log(beyond(Infinity));
console.log(beyond(-5));
console.log(beyond(0));

/* ==================================== */
function decode(string) {

	switch (string[0]) {
	case "a" :
		return string[1];

	case "b" :
		return string[2];

	case "c" :
		return string[3];

	case "d" :
		return string[4];

	default :
		return " ";
	}
}
console.log(decode("craft"));
console.log(decode("block"));
console.log(decode("argon"));
console.log(decode("meter "));
console.log(decode("bells "));
console.log(decode("brown "));
console.log(decode("croon "));
console.log(decode("droop "));
