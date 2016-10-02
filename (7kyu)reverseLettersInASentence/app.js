function reverser(sentence) {
  var reversed = ''
  var split = sentence.split(' ')
  for (var i=0; i<split.length; i++){
    if (i<split.length){
      reversed += split[i].split('').reverse().join('') + ' '
    } else {
      reversed += split[i].split('').reverse().join('')
    }
  }
  return reverser
}
---------------------------other answers ---------------------------------------
function reverser(sentence) {
  return  (sentence.split(" ")).map(x=>x.split("").reverse().join("")).join(" ")
}

---------------------------other answers ---------------------------------------

function reverser(sentence) {
    var reversed = [];
    sentence.split(' ').forEach(function (word) {
        reversed.push(word.split('').reverse().join(''));
    });
    return reversed.join(' ');
}

---------------------------other answers ---------------------------------------
const reverser = (sentence) => sentence.split(' ').map((a) => a.split('').reverse().join('')).join(" ")
