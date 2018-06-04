var person = {  
    name: "Bobby",
    age: 12
  }
/*
  if (person.age >= 18) {
      console.log(person.name + " is allowed to go to the movie")
  } else if  (person.age < 18) {
      console.log(person.name + " is not allowed to go to the movie")
  }
  */

  /*
  if (person.name.charAt(0) === 'B') {
    console.log(person.name + " is allowed to go to the movie")
  } else {
    console.log(person.name + " is not allowed to go to the movie")
  }
  */

  /*
  if (person.name.charAt(0) === 'B' && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
  } else {
    console.log(person.name +  " is not allowed to go to the movie ")
  }
  */

 if (1 === "1") {
    console.log("strict");
  } else if (1 == 1) {
    console.log("loose");
  } else {
      console.log("not equal at all");
  }