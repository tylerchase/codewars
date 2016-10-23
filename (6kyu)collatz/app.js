// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
function collatz(n){
  var result = [n]
  var resultString = '' + n + '-> '
  console.log(resultString)
  while (result[result.length-1] > 1){
    if ( result[result.length-1]%2 !== 0){
    result.push((result[result.length-1]*3)+1)
    resultString += ((result[result.length-1]*3)+1) + '->'
    console.log(resultString)
  } else {
    result.push(result[result.length-1]/2)
    resultString+= (result[result.length-1]/2) +'->'
  }
//    console.log(result)
//   console.log(resultString)
 }
 return  result.toString().replace(/,/g, '->')
}

---------------------------other answers ---------------------------------------


function collatz(n){
  if(n===1) return "1";
  return n + "->" + collatz(n%2===0?n/2:3*n+1)
}

---------------------------other answers ---------------------------------------

function collatz(n){
  return n === 1 ? '1' : n + '->' + collatz(n%2 ? 3*n+1 : n/2);
}
