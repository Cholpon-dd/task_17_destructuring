/* function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	
	let position;
	if (arr[3] !== undefined) {
		position = arr[3];
	} else {
		position = 'джуниор';
	}
}

func( ['Иван', 'Иванов', 'отдел разработки'] ); */

func( ['Иван', 'Иванов', 'отдел разработки'] );

function func([name, surname, department, position = 'джуниор']) {
    
    console.log(`Имя: ${name}`);
    console.log(`Фамилия: ${surname}`);
    console.log(`Отдел: ${department}`);
    console.log(`Должность: ${position}`);
}
