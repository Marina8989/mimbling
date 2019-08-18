//Here is what needs to be done:
//accum('abcd');    returns A-Bb-Ccc-Dddd
//accum('RqaEz');   returns R-Qq-Aaa-Eeee-Zzzzz

function accum(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j == 0) {
        result += str[i].toUpperCase();
      } else {
        result += str[i].toLowerCase();
      }
    }
    if (i !== str.length - 1) {
      result += "-";
    }
  }
  return result;
}
console.log(accum("abcd"));
console.log(accum("maRina"));
