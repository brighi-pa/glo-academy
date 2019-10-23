'use strict';

const mission = 6500;
const period = 8;

 let money = +prompt('Ваш месячный доход?', 1500);
 let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Питание, Уход, Развлечения');
 console.log('Расходы = ', addExpenses);
 let deposit = confirm('Есть ли у вас депозит в банке?');

 console.log(typeof money);
 console.log(typeof addExpenses);
 console.log(typeof deposit);

 let costsMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Транспорт, Оплата квитанций, Еда'); 
 let amountOfExpenses1 = +prompt('Во сколько это обойдется?', 350);
 let costsMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Развлечения, Шоппинг, Кино');
 let amountOfExpenses2 = +prompt('Во сколько это обойдется?', 350);
 
 let budgetMonth = money - (amountOfExpenses1 + amountOfExpenses2);
 console.log('Доход за месяц: ', budgetMonth);

 let MonthsToSave = Math.ceil (mission / budgetMonth);
 console.log('За сколько месяцев будет достигнута цель:', MonthsToSave);

 let budgetDay = Math.floor(money / 50 );
console.log('Бюджен на 1 день : ', budgetDay);


if(budgetDay >= 800){
    console.log('Высокий уровень дохода');    
} else if ( 300 <= budgetDay && budgetDay < 800){
    console.log('Средний уровень дохода');
} else if ( 0 <= budgetDay && budgetDay < 300 ){
    console.log('Низкий уровень дохода');
} else {
    console.log('Что то пошло не так');
}