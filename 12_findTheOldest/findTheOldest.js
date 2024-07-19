const findTheOldest = function(peopleArray){
    const today = new Date()
    let oldestPerson;
    let highestAge = 0
    peopleArray.forEach(person => {
        if (!person.yearOfDeath){
            person.yearOfDeath = today.getFullYear()
        }
        let age = person.yearOfDeath - person.yearOfBirth
        if (age > highestAge){
            highestAge = age
            oldestPerson = person
        }

    });
    return oldestPerson
}







// Do not edit below this line
module.exports = findTheOldest;