// 1. // створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function generate(n){
    const arr = [];
    for (let i = 0; i<n; i++){
        arr.push(Math.floor(Math.random()*100))
    }
    return arr
}
console.log(generate(5))

// 2. // Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
let funRandom = (value, num) => {
    let array = [];
    for (let i = 0; i < value; i++){
        array.push(Math.floor(Math.random()*num));
    }
return array
};
console.log(funRandom(20,40))

// 3. // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let numbers1=[8,29,5,20,12,16,23,28,3,27];
numbers1.sort(function (a,b) {
    return a-b;
});
console.log(numbers1)
// 4. // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
//
let numbers=[11,12,13,14,15,16,17,18,19];
let num=numbers.filter(function (number){
    return number %2==0;
})
console.log(num)



// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let Users = [
    {
        id: 1,
        name: 'Olia',
        surname: 'Baralo',
        email: 'Olia@gmail.com',
        phone: '0932574587'
    },
    {
        id: 2,
        name: 'Tania',
        surname: 'Nogko',
        email: 'Tania@gmail.com',
        phone: '0968754952'
    },
    {
        id: 3,
        name: 'Roman',
        surname: 'Kashpo',
        email: 'Roma@gmail.com',
        phone: '0678549687'
    },
    {
        id: 4,
        name: 'Svitlana',
        surname: 'Boichuk',
        email: 'Sveta@gmail.com',
        phone: '668549674'
    },
    {
        id: 5,
        name: 'Kurulo',
        surname: 'Stasiy',
        email: 'Kiril@gmail.com',
        phone: '0658754121'
    },
    {
        id: 6,
        name: 'Vlad',
        surname: 'Haryk',
        email: 'Vladik@gmail.com',
        phone: '0674581263'
    },
    {
        id: 7,
        name: 'Natalia',
        surname: 'Zamko',
        email: 'Natali@gmail.com',
        phone: '0965871247'
    },
    {
        id: 8,
        name: 'Dmutro',
        surname: 'Bukov',
        email: 'Dimon@gmail.com',
        phone: '0632578246'
    },
    {
        id: 9,
        name: 'Illia',
        surname: 'Ferun',
        email: 'Ilusha@gmail.com',
        phone: '0443657854'
    },
    {
        id: 10,
        name: 'Jaroslav',
        surname: 'stafichuk',
        email: 'Jarik@gmail.com',
        phone: '0675284691'
    }

    ];
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
    }
}

// console.log(Users)
// id.sort(function (a,b){
//     return a-b;
// });
// console.log (id)
