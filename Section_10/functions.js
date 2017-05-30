function isEven(num) {
	if (num%2 === 0){
		return true;
	}
	else {
		return false;
	}
}

function factorial(val) {
	let final = 1;
	if(val === 0){
		return 1;
	}
	else {
		for(i = val; i > 0; i--){
			final *= i;
		}
	return final;
	}
}

function kebabToSnake(kString) {
	let re = /-/gi;
	return kString.replace(re,"_");
}