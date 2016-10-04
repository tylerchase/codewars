function accum(s) {
  var split = s.split('')
  var result = ''
  var count = 0
  for (var i=0; i<split.length;i++){
  	if (i<split.length-1){
      result += split[i].toUpperCase() + (split[i].toLowerCase().repeat(count)) + '-'
      count++
  	} else {
  	  result += split[i].toUpperCase() + (split[i].toLowerCase().repeat(count))
  	}
  }
  return result;
}
---------------------------other answers ---------------------------------------
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

---------------------------other answers ---------------------------------------
function accum(str) {
  var res = [];
  for(var i = 0; i < str.length; i++) {
    var row = '';
    for(var j = 0; j < i + 1; j++) {
      row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    res.push(row);
  }
  return res.join('-');
}

---------------------------other answers ---------------------------------------
function accum(s) {
  // your code
  var txt = "";
  for(var i = 0; i < s.length; i++) {
    txt += s[i].toUpperCase();
    for(var x = 0; x < i; x++ ) {
      txt += s[i].toLowerCase();
    }
    txt += "-";
  }
  txt = txt.slice(0, txt.length-1);

  return txt;
}
