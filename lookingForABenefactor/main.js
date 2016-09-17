function newAvg(arr, newavg) {
	var sum = 0
	var avg = 0
	var neededTotal = 0
	var neededDonation = 0
  var ValueError = Error
  if (arr){
	for (var i=0; i<arr.length; i++){
    sum+=arr[i]
	}
	avg = (sum/arr.length)
	if (avg < newavg){
		neededTotal= ((arr.length + 1) * newavg)
		neededDonation = neededTotal - sum
	} else{
		throw ValueError
	}
    return neededDonation
   }
}

//-------------------------- other responses ----------------------------------
var newAvg = (arr, newavg) => {
  if ((arr.reduce((a,b)=>a+b,0) / arr.length) > newavg) {
    throw Error();
  } else {
    return Math.ceil(newavg * (arr.length+1) - arr.reduce((a,b)=>a+b,0));
  }
}

//-------------------------- other responses -----------------------------------
function newAvg(arr, newavg) {
    let sum = arr.length ? arr.reduce(( pre, cur ) => pre + cur) : 0;
    let nextDonation = (newavg * (arr.length + 1)) - sum;

    if(nextDonation <= 0)
      throw 'ValueError';

    return Math.ceil(nextDonation);
}
