function Konstruktor(nazwa) {
	this.name = nazwa;
	this.value = 123;

	this.strzalka = (arg) => { console.log(arg + ' ' + this.name + '!') };

	this.zwykla = function(arg) {
		console.log(arg + ' ' + this.name + '!');
	}
}