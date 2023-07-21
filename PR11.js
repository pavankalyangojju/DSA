function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true;
        }
    }
    return false;
}

const year1 = 2020;
console.log(isLeapYear(year1));