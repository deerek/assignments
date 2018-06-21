function sortedDogOwners(arr) {
    // filter by age first
    var sortedByAge = arr.sort(function(person1, person2){
        return person1.age - person2.age;
    })
        // filter the sorted arr
        return sortedByAge.filter(function(person){
            // check if person.pets has "dog" in it
            return person.pets.includes("dog");
        })
}

function arbitraryPractice(arr) {
    // check for age
    var filteredByAge = arr.filter(function(person){
        return person.age > 20;
    });

    return filteredByAge.reduce(function(accumulator, person){
        // check for nicknames
        // check for at least one dog
        var hasNicknames = person.pets.every(function(pet){
            return pet.nicknames.length;
        });
        var hasADog = person.pets.some(function(pet){
            return pet.type === "dog";
        });
        if (hasNicknames && hasADog){
            // get pet names and insert into <li> tags -- MAP --
            var listItems = person.pets.map(function(pet){
                return "<li>" + pet.name + "</li>";
            });
            return accumulator.concat(listItems);
        } else {
            return accumulator;
        }
    },[])
}




sortedDogOwners([  
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    }, 
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    }, 
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    }, 
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    }, 
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
]);

module.exports = sortedDogOwners;

sortedDogOwners();