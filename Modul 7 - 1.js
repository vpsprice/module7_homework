const user = {

    name: 'Slava',

    surname: 'Popov',

    age: 38

   }

function f(user) {
	for (let key in user) {
		
		 if (user.hasOwnProperty(key)) {

			console.log(`${key}: ${user[key]}`) 
		};  
	 
	}
	
}
f(user)