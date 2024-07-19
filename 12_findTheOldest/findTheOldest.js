const findTheOldest = function(peopleArray){
    const today = new Date()
    //set variable equal to the first person to represent initial value for oldest person
    let oldestPerson;
    //set variable equal to oldest/highest age = 0
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