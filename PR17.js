let b = 5;
let sum = "";
for (let i = 0; i <= b; i++) {
    for (let j = 0; j <= i; j++) {
        sum += " "
    }
    for (let k = 0; k < 2 * (b - i) - 1; k++) {
        sum += "*"
    }
    sum += "\n"
}
console.log(sum)