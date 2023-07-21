function getSumOfDigits(num) {
    return String(num)
        .split('')
        .reduce((accumulator, digit) => {
            return accumulator + Number(digit);
        }, 0);
}
console.log(getSumOfDigits(123456789));