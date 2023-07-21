var arr = [1, -9, -3, 8, 9]
res = res.filter(function(v) {
    return v < 0;
}).concat(res.filter(function(v) {
    return v == 0;
}), res.filter(function(v) {
    return v > 0;
}))
console.log(JSON.stringify(res))