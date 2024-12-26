const findTheOldest = function(people) {
    return people.reduce((oldest, person) => 
        (person.yearOfDeath - person.yearOfBirth) > ((oldest.yearOfDeath ??= new Date().getFullYear()) - oldest.yearOfBirth) ? 
            oldest = person 
        : oldest
    ,);
};

// Do not edit below this line
module.exports = findTheOldest;
