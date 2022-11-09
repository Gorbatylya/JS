//Task 1
// let n = prompt('Введите число', '');
// function getSum(n){
//     let x=0;

//     for(let i=0; i<=n; i++){
//     x+=i;
//     }

//     return x;
// }

// console.log (getSum(n))


//Task 2
// let n = prompt('Введите сумму кредита', '');

// function Sum(n){
//     let x= 0;
//     for (let i = 0; i<60; i++){
//     x=x+((n-(i*n/60))*0.17/12)}
    
//     return x;
// }
// console.log (Sum(n))

//учитывая, что кредит дифференцированный, i - каждый месяц, оплата происходит = сумма долга за 1 месяц из 60 + 17% от оставшейся суммы долга
//например, кредит на 10 000, каждый месяц 166.66 + (10 000 - 166.66)* 0.17 / 12мес, то есть за 1 месяц 17% рассчитываются от 9833.34
// при аннуитетном кредите другой расчет, но долго разбираться 


//Task 3 - здесь вообще все сложно
// function trimString(string,b,c){
    // let b = prompt('Введите значение от','');
    // let c = prompt('Введите значение по','');
    // let string ="   Hello Good morning!   ";

    // let x = codeWord[2]
    // let a = string.length
    // let str = string.split('');
    // let a = str.trim();
    // delete str[c];
// }

// console.log(a)


//Task 4
// let number = prompt('Введите число','');
// function getSumNumb (number){
//     let sum = 0;
//     while (number != 0){
//         sum += number % 10;
//         number -= number % 10;
//         number /=10;
//     }

//     return sum;
// }

// console.log (getSumNumb (number))


//Task 5

// function getSum(a,b){
//     let sum = 0;

//     if (a<b){
//     for (;a<=b;a++){
//         sum+=a}
//         console.log (sum)}
//         else if (a>b){
//             for (;a>=b;b++){
//                 sum+=b}
//                 console.log (sum)}
//                 else if (a===b){
//             console.log(a||b)
//     } else
//     console.log (sum)
    
//     return a;
// }

// getSum(1, 0) //== 1   // 1 + 0 = 1;
// getSum(1, 2) //== 3   // 1 + 2 = 3
// getSum(0, 1) //== 1   // 0 + 1 = 1
// getSum(1, 1) //== 1   // 1 Since both are same
// getSum(-1, 0)// == -1 // -1 + 0 = -1
// getSum(-1, 2) //== 2  // -1 + 0 + 1 + 2 = 2


//Task 6



//Advanced
//Task 1
// let a = +prompt ('Введите 1 сторону треугольника','');
// let b = +prompt ('Введите 2 сторону треугольника','');
// let c = +prompt ('Введите 3 сторону треугольника','');

// if (a+b > c){
// 	if (a+c > b) {
// 		if (c+b > a)
// 		console.log (true)
//         else console.log (false)}
//     else console.log (false)}
// else console.log (false)


//Task 2


//Task 3

    
