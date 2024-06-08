const palindrome = (pal: string): boolean => {
  const palin = pal.split("").reverse().join("");
  return palin === pal;
};

const palind = palindrome("123621");
console.log(palind);
