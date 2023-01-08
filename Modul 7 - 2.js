function check(obj, objKeyName) {
    return (objKeyName in obj)
}

const user = {
    name: "Slava", 
    lastname: "Popov",
    age: 38
  }
  console.log(check(user, "name")) 
  console.log(check(user, "city"))  
