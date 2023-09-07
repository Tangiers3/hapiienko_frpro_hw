//1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
/*    let str = '';
    for ( let i=10; i<21;i++){
        if (i>10){
            str += ', ';
        }
        str +=i;
    }
        alert(str);*/




//2.Вивести квадрати чисел від 10 до 20.
/*    let numb = 0;
    for (let i= 10; i<21; i++){
        if (i>10) {
          numb += ', ';
        }
        numb += i ** 2;

    } alert(numb);*/

//3.Вивести таблицю множення на 7.
/*    let numb = 7;
    for (let i = 1; i<11; i++){
        const result = numb * i;
        console.log(result.toString());
    }*/



//4.Знайти суму всіх цілих чисел від 1 до 15.
/*   let sum = 0;
   for ( let i=1; i<16; i++){
       sum+=i;

   }console.log(sum);*/





//5.Знайти добуток усіх цілих чисел від 15 до 35.
 /*   let numb = 1;
    for (let i = 15; i<=35; i++){
        numb *= i;
    } console.log(numb);*/

//6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
/* let sum = 0;
 for (let i = 1; i <= 500; i++ ){
     sum = i / 2;

 }console.log(sum);*/





//7.Вивести суму лише парних чисел в діапазоні від 30 до 80.+
/*    let sum = 0;
    for (let i = 30; i <= 80; i++){
        if (i % 2 === 0) {
            sum += i;

        }console.log(sum);
    }*/
//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.
/*for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}*/


//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

/*const number = parseInt(prompt('Enter a number:'));

if (number > 0) {
    console.log(`Divisors of a number ${number}:`);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log('The entered number is not a natural number.');
}*/



//10.Визначити кількість його парних дільників.
/*const number = parseInt(prompt('Enter a number:'));
let evenDivisorCount = 0;
if (number > 0) {
    console.log(`Divisors of a number ${number}:`);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            evenDivisorCount++;

        }
        console.log('Sum divisor count ' + evenDivisorCount);
    }

} else {
    console.log('The entered number is not a natural number.');
}*/



//11.Знайти суму його парних дільників.
/*const number = parseInt(prompt('Enter a number:'));
let sum = 0;
if (number > 0) {
    console.log(`Divisors of a number ${number}:`);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            sum += i;

        }
        console.log('Sum count: ' + sum);
    }

} else {
    console.log('The entered number is not a natural number.');
}*/

//12.Надрукувати повну таблицю множення від 1 до 10.
/*
const number = parseInt(prompt('Enter a number:'));
if (number > 1 && number < 11){
    for (let i = 1; i < 11; i++){
        const result = number * i;
        console.log(result.toString());
    }

} else {
    console.log('This number is not valid.');
}*/
