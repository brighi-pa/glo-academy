const money = 1500;
const income = 'фриланс';
const addExpenses = 'Питание, Уход, Развлечения';
const deposit = true;
const mission = 6500;
const period = 8;

let budgetDay;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log('Длина переменной income: ', income.leght );

console.log('Период', period, 'месяцев');
console.log('Цель заработать', mission, 'бел.руб');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(','));

budgetDay = money / 30;
console.log(budgetDay);