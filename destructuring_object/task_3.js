/* В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let width  = options.width;
let height = options.height; */

let options = {
	width:  400,
	height: 500,
};

let { color = 'black', width, height } = options;

console.log(`Color: ${color}`);
console.log(`Width: ${width}`);
console.log(`Height: ${height}`);