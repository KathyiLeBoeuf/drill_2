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