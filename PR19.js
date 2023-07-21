let num = [1, 2, 3, 4]
let sum = num.reduce((prevValue, curValue) => {
    return prevValue + curValue
});
console.log(sum);