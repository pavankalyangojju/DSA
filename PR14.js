let n = 9;
let string = " ";
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "hello" + " ";
    }
    string += "\n";
}
console.log(string)