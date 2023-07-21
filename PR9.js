var res = [3, 5, -20, -9, -8];
// var res = prompt([]);


res = res.filter(function(v) {
    return v < 0;
}).concat(res.filter(function(v) {
    return v == 0;
}), res.filter(function(v) {
    return v > 0;
}))

console.log(JSON.stringify(res))