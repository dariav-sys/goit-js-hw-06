//Получить массив имен пользователей по полу (поле gender).
import users from "./users.js";
const getUsersWithGender = (users, givenGender) =>
	users
		.filter(({ gender }) => givenGender === gender)
		.reduce((acc, { name }) => [...acc, name], []);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
