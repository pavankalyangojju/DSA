function checkduck(num) {
    let i = 0;
    let n = num.length;

    while (i < n && num[i] == '0')
        i++;

    while (i < n) {
        if (num[i] == '0')
            return true;
        i++
    }
    return false;
}
let num = prompt("ente : ")
if (checkduck(num)) {
    console.log('yes')
} else {
    console.log('no')
}