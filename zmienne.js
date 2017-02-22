
if(true) {
	var zmienna = true;
	console.log(zmienna)
}

(function(argument) {
	console.log(zmienna)
})();

for(let element of [1,2,3,4,5]) {
	setTimeout(function(argument) {
		console.log(element);
	},16)
}

const stala = 123;

console.log(stala);