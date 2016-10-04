function fixTheMeerkat(arr) {
  var b = arr[0];
  arr[0] = arr[2];
  arr[2] = b;
  return arr
}
---------------------------other answers ---------------------------------------

function fixTheMeerkat(arr) {
  return arr.reverse();
}

---------------------------other answers ---------------------------------------

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}

---------------------------other answers ---------------------------------------

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

---------------------------other answers ---------------------------------------
