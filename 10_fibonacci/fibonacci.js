const fibonacci = function(a) {
    if(a <= 0) return "OOPS";
    if(a == 1) return 1;
    let p = 1;
    let pp = 0;
    for(let i = 2; i <= a; i++){
        let c = p + pp;
        pp = p;
        p = c;
    }
    return p;
};

// Do not edit below this line
module.exports = fibonacci;
