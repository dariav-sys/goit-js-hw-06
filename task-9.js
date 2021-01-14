// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

import users from "./users.js";

const getNamesSortedByFriendsCount = users => { 
  let sorted = users.sort((a, b) => a.friends.length - b.friends.length);
  return sorted.map(el => el.name);

};

  

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]