
'use strict'
//debugger;

var calculator = {//debugger;

read: function() {
	this.a = +prompt("Please input value 1", +"0");
	this.b = +prompt("Please input value 2", +"0");
	//alert(this.a);
	},
sum: function(){
	return this.a + this.b;
	},
showSum: function(){
	alert('The sum is: '+this.sum());
	},
multiplier: function(){
	return this.a * this.b;
	},
showMultiplier: function(){
	alert('The multiplier is '+this.multiplier());
	},
}

calculator.read();
calculator.sum();
calculator.showSum();
calculator.multiplier();
calculator.showMultiplier();






 
/*{
let input1;
let input2;
let sum;
let mult;
read = function() {
		input1 = prompt ("Please input value 1", +"0");
		input2 = prompt ("Please input value 2", +"0");
		
	};
sum = function() {
		return	summ=+input1 + +input2;
};
multiple = function() {
		return mult=input1*input2;
}
read();
console.log(input1);
console.log(input2);

sum();
multiple();

console.log(summ);
console.log(mult);
}*/





