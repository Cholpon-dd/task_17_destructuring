/* Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(department, employee, hired) {
	let name     = employee[0];
	let surname  = employee[1];
	
	let year  = hired[0];
	let month = hired[1];
	let day   = hired[2];
}

func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] ); */

func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );

function func (department, [name, surname], [year, month, day]) {
    
    console.log(`Имя: ${name}`);
    console.log(`Фамилия: ${surname}`);
    console.log(`Отдел: ${department}`);
    console.log(`Год найма: ${year}`);
    console.log(`Месяц найма: ${month}`);
    console.log(`День найма: ${day}`)
}