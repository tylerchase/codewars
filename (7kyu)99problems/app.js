function last (sx){
  var lastOne = []
  if (!sx || sx.length<=1){
    return null
  } else {
  for (var i = 0; i<sx.length; i++){
    lastOne = sx[i]
    }
    return lastOne
  }
}

-------------------------------other answers -----------------------------------
const last = _ => _.pop() || null;


-------------------------------other answers -----------------------------------

function last(list) {
if (list.length===0) return null;
else return list[list.length-1];

}
