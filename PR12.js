function evenNumber(arr) {
    let sum = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i]
        }
    }
    return sum
}
const num = [1, 2, 3, 4, 5, 11, 1, 1, 1, 1, 1]
const res = evenNumber(num)

console.log(res)