const sumAll = function(num1, num2) {
    let result = num1 + num2;
    for(let i = num1 + 1; i < num2; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
