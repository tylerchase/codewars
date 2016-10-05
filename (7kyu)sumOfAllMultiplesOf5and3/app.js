function findSum(n) {
  var count = 0
  while(n>0){
    if (n%3 === 0){
      count += n
      n--
    } else if (n%5 === 0){
      count += n
      n--
    } else {
      n--
    }
  }
  return count
}

---------------------------other answers ---------------------------------------
function findSum(n) {
   var x = 0, sum = 0;
   for(x=0;x<=n;x++)
      if (x%3 === 0 || x%5 === 0)
         sum += x;
   return sum;
}
---------------------------other answers ---------------------------------------
function findSum(n) {
  var arr = [], total = 0;
  for(var i = 0;i < n+1;i++){
    if(i % 3 === 0 || i % 5 === 0){
      arr.push(i);
    }
  }
  for(var a = 0; a < arr.length; a++){
     total = total + arr[a];
  }
  return total;
}

---------------------------other answers ---------------------------------------
function findSum(n, res=0) {
  return n==1 ? res : findSum(n-1, n%5&&n%3 ? res : res+n)
}
