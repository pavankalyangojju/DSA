function vowel(string) {
    let count = string.match(/[aeiou]/gi).length;

    return count;

}
const string = prompt('enetr : ')
const res = vowel(string)
console.log(res)