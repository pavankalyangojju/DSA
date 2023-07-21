function twoWaySort(arr) {
    let odd = [];

    let even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 1) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    even.sort((a, b) => a);
    odd.sort((a, b) => b);
    let index = 0;
    for (let j = 0; j < even.length; j++) {
        arr[index] = even[j];
        index++;
    }
    for (let j = 0; j < odd.length; j++) {
        arr[index] = odd[j];
        index++;
    }

}
let arr = [1, 3, 2, 7, 5, 4];
twoWaySort(arr);
console.log(arr.join(" "));