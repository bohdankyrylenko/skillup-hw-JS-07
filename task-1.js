//Создать функцию multiply, которая будет принимать любое количество чисел и возвращать //их произведение: multiply(1,2,3) = 6 (123)
//Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(...args) {
	if(args.length === 0){
		return "0";
	}else{
		let rezult = args.reduce((a,b)=>a*b);
		return rezult;
	}
	
}
console.log(multiply(1,2,3));