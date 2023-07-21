// function vowel(string) {
//     let count = string.match(/[aeiou]/gi).length

//     return count
// }
// const string = prompt("eneter : ")
// const res = vowel(string)
// console.log(res)


// const res = prompt("enetere:")
// console.log(res);


// let num = 9;
// let string = "";
// for (let i = 0; i <= num; i++) {
//     for (let j = 0; j < i; j++) {
//         string += "*" + " ";
//     }
//     string += "\n";
// }

// console.log(string)



// let m = 8;
// let sum = " ";
// for (let i = 0; i <= m; i++) {
//     for (let j = 0; j < m - i; j++) {
//         sum += "*" + " ";
//     }
//     sum += "\n";
// }
// console.log(sum)






// let n = 5;
// let sum = "";

// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n - i; j++) {
//         sum += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         sum += "*";
//     }
//     sum += "\n";
// }
// console.log(sum)






let n = 5;
let sum = "";

for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        sum += " "
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        sum += "*"
    }
    sum += "\n"
}
console.log(sum)