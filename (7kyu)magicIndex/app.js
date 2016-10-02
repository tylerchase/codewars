function findMagic(arr){
  for (var i=0; i<arr.length; i++){
    if (i === arr[i]){
      return i
      done
    }
  }
  return -1
}

---------------------------other answers ---------------------------------------
function findMagic(arr) {
  let m = arr.find((v, i) => v === i);
  return m === undefined ? -1 : m;
}

---------------------------other answers ---------------------------------------

const findMagic = arr => arr.filter((e,i) => e === i)[0] || -1;
