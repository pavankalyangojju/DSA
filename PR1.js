function prime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'not prime'
        }
    }
    return 'prime'
}
var res = prime(6);
// var res = prompt(parseInt("enter : "));

console.log(res)