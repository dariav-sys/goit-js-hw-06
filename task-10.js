// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

import users from "./users.js";

const getSortedUniqueSkills = users => {
  let res = [];
  let newArr = [];
  users.map(user => newArr.push(...user.skills));  
  newArr.forEach(el => (!res.includes(el)) ? res.push(el) : '');  
  return res.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]