const findTheOldest = function(array) {
    return array.reduce((oldest, curr) => {
        const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth);
        const currAge = (curr.yearOfDeath - curr.yearOfBirth);
        if(currAge > oldestAge)
            return curr;
        else
            return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
