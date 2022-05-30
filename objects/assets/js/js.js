"use strict";
const things = {
	name: "islom",
	surname: "valiev",
	age: 22,
	color: {
		hair: "black",
		style: "formal"
	},
};
console.log(Object.keys(things).length)
for (let s in things) {
	if (typeof things[s] === "object") {
		for (let i in things[s]) {
			console.log(`property ${i}has value ${things[s][i]}`);
		}
	}
	else
	console.log(`property ${s}has value ${things[s]}`)
}