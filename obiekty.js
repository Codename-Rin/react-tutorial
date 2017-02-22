
var parametr = 'kolor';

var nazwa = 'Test';

var obj = {
	value: 123,
	[parametr]: 'czerwony',
	nazwa,
	user: {
		id: 33,
		name: 'Testowy'
	}
}

console.log(obj);

var {value, kolor, user:{name: imie}} = obj;

console.log(value, kolor, imie);

var [a,,,b] = [1,2,3,4];

console.log(a,b);

var pobierzImie = ({user:{name:imie = 'Domyślne'}}) => ({imie});

console.log(pobierzImie(obj));

var tablica = [1,2,3,4,5];

console.log( [ ...tablica, 6, 7, 8 ] );

var tabFunkcja = (...arg) => {
	console.log(arg);
}

console.log(tabFunkcja(...tablica));