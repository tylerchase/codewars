whoTookTheCarKey = function(message){
  var name = ''
  for (var i=0; i<message.length; i++){
    name+= String.fromCharCode(parseInt(message[i],2))
  }
  return name;
}

---------------------------other answers ---------------------------------------

const whoTookTheCarKey = m => m.map(x => String.fromCharCode(parseInt(x, 2))).join('');

---------------------------other answers ---------------------------------------

const whoTookTheCarKey = (message) => {
  const charCodes = message.map( (s) => parseInt(s, 2) );
  return String.fromCharCode(...charCodes);
};
