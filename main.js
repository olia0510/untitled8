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


class User {
    constructor(id, name, surname, email, phone) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
    }
}

const olia = new User('1','Olia', 'Baralo', 'Olia@gmail.com', '0932574587');
const tania = new User('2', 'Tania', 'Nogko','Tania@gmail.com', '0968754952');
const roma = new User('3', 'Roman', 'Kashpo', 'Roma@gmail.com', '0678549687');
const sveta = new User('4', 'Svitlana', 'Boichuk', 'Sveta@gmail.com', '668549674');
const kiril = new User('5', 'Kurulo', 'Stasiy', 'Kiril@gmail.com', '0658754121');
const vladik = new User('6', 'Vlad', 'Haryk', 'Vladik@gmail.com', '0674581263');
const natasha = new User('7', 'Natalia', 'Zamko', 'Natali@gmail.com', '0965871247');
const dima = new User('8', 'Dmutro', 'Bukov', 'Dimon@gmail.com', '0632578246');
const ilysha = new User('9', 'Illia', 'Ferun', 'Ilusha@gmail.com', '0443657854');
const jarik = new User('10', 'Jaroslav', 'stafichuk', 'Jarik@gmail.com', '0675284691')

//     us=User.filter(function (id) {
//         return id %2==0;
//     })
// console.log(us)