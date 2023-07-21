let b = 5;
let sum = "";
for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= b - i; j++) {
        sum += " "
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        sum += "*"
    }
    sum += "\n"
}
console.log(sum)