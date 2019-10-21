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



console.log('Усложненное задание урок 2');

const num = '266219';
const num1 = num[0];
const num2 = num[1];
const num3 = num[2];
const num4 = num[3];
const num5 = num[4];
const num6 = num[5];

console.log(num);
multiplication = num1 * num2 * num3 * num4 * num5 * num6;
let multiplication3 = multiplication **3;
const multiplication4 = String(multiplication3);
console.log(multiplication4.substr(0.2));