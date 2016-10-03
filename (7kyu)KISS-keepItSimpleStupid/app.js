function isKiss( words ){
  var longest = 0
  var splitWords = words.split(' ')
  for (var i=0; i<splitWords.length; i++){
    if (splitWords[i].length > longest){
      longest = splitWords[i].length
    }
  }
  if (longest>splitWords.length){
    return "Keep It Simple Stupid"
  } else {
    return "Good work Joe!"
  }
}
---------------------------other answers ---------------------------------------

function isKiss( words ){
  let arr = words.split(' ');
  for(let i=0; i<arr.length; i++){
    if(arr[i].length > arr.length) return "Keep It Simple Stupid";
  }
  return "Good work Joe!";
}

---------------------------other answers ---------------------------------------
function isKiss( words ){
  var word = words.split(' ')
  for (i=0; i < word.length; i++){
    if (word[i].length > word.length){
      return "Keep It Simple Stupid"
      }
  }
  return "Good work Joe!"
}
