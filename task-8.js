//Массив имен всех пользователей у которых есть друг с указанным именем.

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  let friendUsers = users.filter(el => el.friends.includes(friendName));
  let res = friendUsers.map(element => element.name);
	return res;
};

console.table(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
