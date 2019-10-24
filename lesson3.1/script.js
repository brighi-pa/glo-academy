'use strict';


// Решение через if:

let lang = 'ru';

if (lang == 'ru') {
	console.log = ('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
}
if (lang == 'en') {
	console.log = ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}


// Решение через switch-case:

switch (lang) {
	case 'ru':
		alert = ('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
	break;
	case 'en':
		alert = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    break;
    default:
        alert ('Неизвестный язык');
}

// Решение через многомерный массив:

let days = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(days[lang]);


let namePerson = prompt ('Введите ваше имя');

console.log(namePerson === 'Артём' ? 'Директор': namePerson === 'Максим' ? 'Преподаватель': 'Студент');
console.log(namePerson);