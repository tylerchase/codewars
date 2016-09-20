function sumTwoSmallestNumbers(numbers) {
  var count1 = 10000000;
  var count2 = 10000000;
  var sum = 0
  for (var i=0; i<numbers.length; i++){
    if(numbers[i] < count2 && numbers[i] < count1){
      count2 = count1
      count1 = numbers[i]
    } else if (numbers[i] < count2){
      count2 = numbers[i]
    }
  }
  sum = count1 + count2
  return sum
};

--------------------------other answers-----------------------------------------
function sumTwoSmallestNumbers(numbers){
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

--------------------------other answers-----------------------------------------
function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
};
--------------------------other answers-----------------------------------------
function sumTwoSmallestNumbers(numbers) {
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}
