//Получить массив имен всех пользователей (поле name).
import users from './users.js'
// const getUserNames = users => users.map(user=>user.name);
const getUserNames = users => users.map(({name})=>name);


console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]