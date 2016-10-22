function getMichaelLastName(inputText){
  var lastNames = []
  var nextWord = []
  var cappedLetters = []
  var split = inputText.replace(/[&\/\-\#,+()$~%.'":*?<>{}]/g,'').split(' ')
  for (var i=0; i<split.length; i++){
    if(split[i] == 'Michael'){
      nextWord.push(split[i+1])
    }
    for(var j=0; j<nextWord.length; j++){
      cappedLetters = nextWord[j].split('')
      if (cappedLetters[0] === cappedLetters[0].toUpperCase()){
        lastNames.push(nextWord[j])
      }
    }
  }
  return lastNames.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
}

---------------------------other answers ---------------------------------------


var getMichaelLastName = function (inputText) {
  var matches = inputText.match(/Michael\s+([A-Z][a-zA-Z]+)+/g);

  if (typeof matches === 'string') {
    matches = [matches];
  }

  return matches.map(match => match.substring(8));
}

---------------------------other answers ---------------------------------------
function getMichaelLastName(txt) {
  return txt.match(/Michael\s([A-Z]\w+)/g).map(x => x.split(' ')[1])
}
