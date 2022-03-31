/* Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let width  = options.width;
	let height = options.height;
	
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
}

func( {color: 'red', width: 400, height: 500} ); */

func( { color: 'red', width: 400, height: 500 } );

function func ({ color = 'black', width, height }) {
    console.log(`Color: ${color}`);
    console.log(`Width: ${width}`);
    console.log(`Height: ${height}`);
}

