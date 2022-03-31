/* Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] ); */


func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([name, surname, department, position, salary]) {
	console.log(`Имя: ${name}`);
    console.log(`Фамилия: ${surname}`);
    console.log(`Отдел: ${department}`);
    console.log(`Должность: ${position}`);
    console.log(`Зарплата: ${salary}`);
}


