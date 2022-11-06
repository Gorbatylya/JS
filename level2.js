//level2 Task1
// let a ='true';
// let b = false;
// let c = 17;
// let d = undefined;
// let x = null;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(x));


//Task2
// let height = 15;
// let width = 20;

// let max = function(){
//     if (height>width) {
//         console.log(height)
//     }
//     else {
//         (console.log(width))
//     }
// }
// max ()


//Task3
// for (let n = 3; n <= 20; n+=3) {
//     if (n % 3 == 0); {
//     console.log(n);
//     }
// }


//Task4
// let a = 'key';
// let b = 'documents';
// let c = 'pen';
// let d = 'apple';
// let e = 'orange';

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// alert( true || false );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false


// console.log (shouldGoToWork);


//Task 5
// let num = prompt('Введите число',' ')
// if (num % 3 == 0) {
//     if (num % 5 == 0) {
//         console.log ("FizBuz");
//         }
//     else {console.log ("Fiz");
//     }
// }
// else if (num % 5 == 0) {
//     console.log ("Buz");
//     }

//or

// let num = prompt('Введите число',' ')
// if(num%3==0){
// console.log ("Fiz")} 
// if(num%5==0){
// console.log ("Buz")} //только выводит на разных строках


// Task 6
// let age = prompt('Сколько вам лет?', '');
// if (age >= 18) {
//     console.log('Попей пивка')
// }
//     else if (age<16) {
//         console.log('Пей колу')
//     }
// else {console.log('Можешь выкурить сигаретку, только маме не говори')}

//or

// let age = prompt('Сколько вам лет?', '');
// if (age >= 18) {
//     console.log('Попей пивка')
// }
//     else if (age<18){
//         if (age>=16) {
//             console.log('Можешь выкурить сигаретку, только маме не говори')
//         }
//         else console.log('Пей колу')
//     }


// Task 7
// let side = prompt('В какую сторону света вы бы хотели отправится?', ' ');
// switch(side){
//     case "юг":
//         console.log ('на юг пойдешь - счастье найдешь');
//     break;

//     case "север":
//         console.log ('на север пойдешь - много денег найдешь');
//     break;

//     case "запад":
//         console.log ('на запад пойдешь - верного друга найдешь');
//     break;

//     case "восток":
//         console.log ('на восток пойдешь - разработчиком станешь');
//     break;

//     default:
//         console.log ('попробуйте еще раз!');
// }


// ADVANCED
// Task 1
// let name = "пОлИнА нАбЕрЕжНаЯ";
// alert ("Привет, " + name.toLowerCase())

// const str = 'пОлИнА нАбЕрЕжНаЯ';
// const arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);}
// const str2 = arr.join(' ');
// console.log(str2);
// let name = "пОлИнА нАбЕрЕжНаЯ";
// let a = name.toLowerCase();
// a.codeWord[0].toUpperCase();
// console.log (a)


//Task 2
// let x = prompt('Введите число','');
// let a = prompt('Сколько отнять?','');
// let b = prompt('Сколько прибавить?','');
// let c = prompt('На сколько умножить?','');
// let d = prompt('На сколько разделить?','');

// let form = (((x-a) + b) * c) / d;

// alert ('((('+ x + '-' + a + ') + ' + b + ') * ' + c + ') / ' + d + '=' + form);


//Task 3
// let a = '#';
// for (let a = '#'; a <= '######'; a+="#"){
//     console.log (a)
// }
