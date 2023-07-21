function rev(str) {
    let res = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;

}
const revs = "helllo"
const lets = rev(revs)
console.log(lets)