let matrix = [
    [20, 60, 3],
    [10, 52, 2],
    [5, 24, 1],
];

function wTraversal(matrix) {
    let bag = " ";
    let n = matrix.length;

    for (let i = 0; i < n - 1; i++) {
        bag += matrix[i][0] + " "
    }
    for (let i = n - 1; i <= n; i--) {
        bag += matrix[i][i] + " "
    }
    for (let i = n - 2; i < n; i++) {
        bag += matrix[i][i - n - 1] + " "
    }
}
console.log(bag)