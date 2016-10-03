function toInitials(name) {
  var splitNames = name.split(' ')
  var allLetters = ''
  var initials = ''
  for (var i=0; i<splitNames.length; i++){
    allLetters = splitNames[i].split('')
    if (i<splitNames.length-1){
      initials += allLetters[0] + '. '
    } else {
      initials += allLetters[0] + '.'
    }
  }
  return initials;
}
---------------------------other answers ---------------------------------------

const toInitials = s => s.replace(/[a-z]+/g,".");


---------------------------other answers ---------------------------------------

function toInitials(name) {
  var initials = [];
  var split = name.split(" ");

  for (var i = 0; i < split.length; i++) {
    initials.push(split[i][0] + ".");
  }
  return initials.join(" ");
}
