function closeCompare(a, b, margin){
  if (!margin){
    if (a<b){
      return -1
    } else if (b<a){
      return 1
    } else if (a===b){
      return 0
    }
  } else if (a+margin<b){
    return -1
  } else if (b+margin<a){
    return 1
  } else if (a+margin===b){
    return 0
  }
}

---------------------------other answers ---------------------------------------
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}

---------------------------other answers ---------------------------------------

function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}
