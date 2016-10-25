function trouble(x, t){
  for (var i=0; i<x.length-1; i++){
    if (x[i] + x[i+1] == t){
      x.splice([i+1], 1)
      if ([i]<x.length-1){
        i--
      }
    }
  }
  return x
}
---------------------------other answers ---------------------------------------

function trouble(x, t){
  var newArray = [x[0]];
  for (i = 1; i < x.length; i++) {
    if (x[i] + newArray[newArray.length-1] != t) {
      newArray.push(x[i])
    }
  }
  return newArray;
}

---------------------------other answers ---------------------------------------

function trouble(x, t){
  for(var i=0; i<x.length; i++) {
    if(x[i]+x[i+1]===t) {
      x.splice(i+1,1);
      i--;
    }
  }

  return x;
}
