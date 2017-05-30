var age = prompt("What is your age?");

if(age < 0) {
	console.error("Age should not be negative");
} if (age == 21){
	console.log("Happy 21st birthday!");
} if (age%2 == 1){
	console.log("your age is odd!");
} if (Number.isInteger(Math.sqrt(age))){
	console.log("perfect square");
}