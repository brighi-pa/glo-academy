'use strict';

let money = 1500,
income = 'фриланс',
addExpenses = 'Питание, Уход, Развлечения',
deposit = true,
mission = 6500,
period = 8;

money = +prompt('Ваш месячный доход?', 1500);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Питание, Уход, Развлечения');
deposit = confirm('Есть ли у вас депозит в банке?');


let ExpensesMonth;
let AccumulatedMonth;
let MonthsToSave;
let budgetDay;


 let costsMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Транспорт, Оплата квитанций, Еда'); 
 let amountOfExpenses1 = +prompt('Во сколько это обойдется?', 350);
 let costsMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Развлечения, Шоппинг, Кино');
 let amountOfExpenses2 = +prompt('Во сколько это обойдется?', 350);
 

 function getExpensesMonth(){       //Функция возвращает сумму всех расходов за месяц
    ExpensesMonth = amountOfExpenses1 + amountOfExpenses2;
    return ('Ежемесячные расходы составляют:', ExpensesMonth);
}

function getAccumulatedMonth (){   //Функция возвращает Накопления за месяц
    AccumulatedMonth = money - ExpensesMonth;
    return ('Доход за месяц составляет:', AccumulatedMonth);
}


function getTargetMonth(){    //Функция возвращает за какой период будет достигнута цель
    MonthsToSave = Math.floor (mission / ExpensesMonth);
    console.log('Срок достижения цели в месяцах (значение округлить в меньшую сторону', MonthsToSave);
    //return ('Миссия по накоплению суммы будет выполнена через:', MonthsToSave, 'месяцев');
}

let getBudgetDay = function(){
    budgetDay = Math.floor(money / 50);
}


let showTypeOf = function(data){
    console.log(data, typeof(data))
};


let getStatusIncome = function(){
    if(budgetDay >= 800){
        return ('Высокий уровень дохода');    
    } else if ( 300 <= budgetDay && budgetDay < 800){
        return ('Средний уровень дохода');
    } else if ( 0 <= budgetDay && budgetDay < 300 ){
        return ('Низкий уровень дохода');
    } else {
        return ('Что то пошло не так');
    }
};

getExpensesMonth();
getAccumulatedMonth();
getTargetMonth();
getBudgetDay();

showTypeOf (money);
showTypeOf (addExpenses);
showTypeOf (deposit);

console.log('Уровень дохода в день:', getStatusIncome());
