function containsAlphanumeric(str) {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(str);
}
console.log(containsAlphanumeric("hell000"))