/* function func() {
	return (new Date).getDate();
}
Давайте укажем эту функцию в качестве значения переменной day:

let [year, month, day = func()] = arr;
Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год. */

let arr = []

let [year = new Date().getFullYear(), 
    month = new Date().getMonth(), 
    day = new Date().getDate()] = arr;

console.log(`Year: ${year}`)
console.log(`Month: ${month}`)
console.log(`Day: ${day}`)