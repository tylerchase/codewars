// x Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

// my answer
function findShort(s){
var split = s.split(' ')
counter = 100

for (var i=0; i<split.length; i++){
  if (split[i].length < counter){
  	counter = split[i].length
     word = split[i]
  	}
  }
  return counter;
}
