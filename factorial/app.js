function factorial(n){
  var total = 1
  if (n===0) {
    return 1
  } else {
    for (var i=1; i<=n; i++){
    total *= i
    }
  }
 return total
}

factorial(4) // 24

----------------------------other answers -------------------------------------
function factorial(n) {
  return !n ? 1 : n * factorial(n - 1);
}
----------------------------other answers -------------------------------------
function factorial(n) {
  for (var acc = 1; n > 0; acc *= n, n--);
  return acc
}
