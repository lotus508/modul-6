'use strict';
//Вторая задача:
//Напишите функцию isPrime
//Она принимает число и возвращает true, если число является простым, а в ином случае false.
   
const number = +prompt('Введите число');
   
    function isPrime(i) {
      for (let j = 2; j < i; j = j + 1) {
        if (i % j == 0) 
          return i + ' делится на 2'
        else{
          return i + ' - простое число' 
          }
        }
    }
    console.log(isPrime(number));