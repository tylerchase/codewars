function longest(s1, s2) {
  var sorted = (s1+s2).split('').sort().join('')
  return sorted.replace(/(.)(?=.*\1)/g, "")
}

---------------------------other answers ---------------------------------------
function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}
---------------------------other answers ---------------------------------------
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

---------------------------other answers ---------------------------------------
const longest = (s1, s2) => Array.from(s1 + s2)
  .sort()
  .filter((x, i, a) => x !== a[i-1])
  .join('');
