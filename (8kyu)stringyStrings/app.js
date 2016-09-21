function stringy(size) {
  var result = '1'
  var sizeDividedByTwo = ((size/ 2))
  console.log(sizeDividedByTwo)
  for(var i=0; i<sizeDividedByTwo -1 ; i++){
    result += "01"
    // console.log(result)

  }
    if(size%2 == 0){
      result += '0'
    }
  console.log(result.length)
}
stringy(50)

----------------------------other code ----------------------------------------

function stringy(size) {
  var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;
}

----------------------------other code ----------------------------------------
const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');

----------------------------other code ----------------------------------------

function stringy(size) {
  string = "1";
  for (var i = 0; i < size-1; i++) {
    if(i % 2 == 0)
      string += "0";
    else
      string += "1";
  }
  return string;
}

----------------------------other code ----------------------------------------
