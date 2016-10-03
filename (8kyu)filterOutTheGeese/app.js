function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (var i=0; i<birds.length; i++){
    for (var j=0; j<geese.length; j++){
      if (birds[i] === geese[j]){
        birds.splice(i, 1)
        i--
      }
    }
  }
  return birds
};

---------------------------other answers ---------------------------------------
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

---------------------------other answers ---------------------------------------
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};
