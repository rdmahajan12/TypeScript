var palindrome = function (pal) {
    var palin = pal.split("").reverse().join("");
    return palin === pal;
};
var palind = palindrome("123621");
console.log(palind);
