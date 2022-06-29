const currentYear = new Date().getFullYear();

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if(oldest.yearOfDeath === undefined)
            oldest.yearOfDeath = currentYear;
        if(person.yearOfDeath === undefined)
            person.yearOfDeath = currentYear;
        
        const personAge = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        if(personAge > oldestAge)
            return person
        else
            return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
