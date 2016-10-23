function insideOut(x){
  var split = x.split(' ')
  var result = []
  for (var i=0; i<split.length; i++){
    if(split[i].length > 3){
      if (split[i].length % 2 !== 0){
        var fhalfLength = Math.floor(split[i].length/2)
        var total = split[i].length
        var middle = fhalfLength + 1
        var middleminusone = middle - 1
        var fhalf = split[i].slice(0,fhalfLength)
        var mletter = split[i].slice(middle-1, middle)
        var lhalf = split[i].slice( middle, total)
        result.push(fhalf.split('').reverse().join('') + mletter + lhalf.split('').reverse().join(''))
      }
        else {
        var fhalfLength = Math.floor(split[i].length/2)
        var total = split[i].length
        var fhalf = split[i].slice(0, fhalfLength)
        var lhalf = split[i].slice(fhalfLength, total)
        result.push(fhalf.split('').reverse().join('') + lhalf.split('').reverse().join(''))
      }
    }
    else {
      result.push(split[i])
    }
  }
  return result.toString().replace(/,/g, ' ')
}

---------------------------other answers ---------------------------------------
const insideOut=x=>x.replace(/\w+/g,y=>(z=y.split("")).slice(0,m=~~((l=z.length)/2)).reverse().concat((l>2&&l%2?z[m]:""),z.slice(-m).reverse()).join(""))


---------------------------other answers ---------------------------------------

function insideOut(x){
  var letters = x.split(" ");
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].length > 1) {
      if (letters[i].length % 2 === 0){
        var half = letters[i].length / 2;
        letters[i] = rev(letters[i].substr(0, half)) + rev(letters[i].substr(half))
      } else {
        var half = Math.floor(letters[i].length / 2)
        letters[i] = rev(letters[i].substr(0, half)) + letters[i].charAt(half) + rev(letters[i].substr(half + 1))
      }
    }
  }
  return letters.join(" ");

  function rev(string) {
    return string.split("").reverse().join("");
  }
}

---------------------------other answers ---------------------------------------
function insideOut(x){
    return x.split(" ").map(function(v){
        var word = v.split(""), l = word.length;
        if (l % 2 === 0) {
            return word.slice(0,l/2).reverse().join("") + word.slice((l/2)).reverse().join("");
        }
        else {
            return word.slice(0,(l-1)/2).reverse().join("") + word[(word.length-1)/2] + word.slice(((l-1)/2)+1).reverse().join("");
        }
    }).join(" ");
}
