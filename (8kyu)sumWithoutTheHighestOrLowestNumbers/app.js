function sumArray(t){
	var sum = 0
  	if( !t || t.length <= 1 ) {
		return 0
	} else if (t){
	var sortedArray = t.sort(function(a,b){
		return (a - b)
	})
	for(var i=1; i<t.length-1; i++){
		sum += t[i]
	}
	}console.log(sortedArray)
	return sum
}

------------------------ other answers ----------------------------------------
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

------------------------ other answers ----------------------------------------
const sumArray=l=>!l || l.length < 3? 0 : l.sort((a,b)=>b-a).slice(1,l.length-1).reduce((a,b)=>a+b)

------------------------ other answers ----------------------------------------
const sumArray = (numbers) => (
  numbers && numbers.length > 1
    ? numbers
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((sum, number) => sum + number, 0)
    : 0
);
