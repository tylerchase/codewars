function consecutive(arr) {
  count = 0
  if(arr.length <= 1){
    return 0
  } else {
    var sorted = arr.sort(function(a,b){
      return a - b
    })
    var min = sorted[0]
    console.log(min)
    var max = sorted.pop()
    console.log(max)
    var numbersBetween = (max - min) - 1
    var length = sorted.length + 1
    count = (numbersBetween - length ) + 2
  }
  return count
}

----------------------------- other answers ------------------------------------

function consecutive(arr){
  let l = arr.length;
  return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}

----------------------------- other answers ------------------------------------
function consecutive(arr) {
  var sorted = arr.sort(function(a, b) {return a-b;});
  var count = 0;
  for (var i = 0; i < sorted.length - 1; i++) {
    var diff = sorted[i+1] - sorted[i]
    if (diff > 1) {
      count += diff - 1
    }
  }
  return count;
}

----------------------------- other answers ------------------------------------
function consecutive(arr) {
  return arr.length && Math.max.apply(0,arr) - Math.min.apply(0,arr) - arr.length + 1;
}
