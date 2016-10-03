function bald(x){
  count = 0
  var splitString = x.split('')

  for (var i=0; i<splitString.length; i++){
    if (splitString[i]=== '/'){
    count++
    }
  }
  var result = []
  result[0]= x.replace(/\//g,'-')

  if (count === 0){
    result.push('Clean!')
    return result
  } else if (count == 1){
    result.push('Unicorn!')
    return result
  } else if (count == 2){
    result.push('Homer!')
    return result
  } else if (count>= 3 && count<=5){
    result.push('Careless!')
    return result
  } else {
    result.push('Hobo!')
    return result
  }
}

---------------------------other answers ---------------------------------------
function bald(x){
  return [ "-".repeat(x.length), (["Clean","Unicorn","Homer","Careless","Careless","Careless"][x.split("/").length-1]||"Hobo") +"!"]
}

---------------------------other answers ---------------------------------------
function bald(x){
  var res = [];
  res.push('-'.repeat(x.length));
  var count = 0;
  for(var i=0;i<x.length;i++) if(x[i] === '/') count++;
  switch(true)
  {
    case count === 0: res.push('Clean!');break;
    case count === 1: res.push('Unicorn!');break;
    case count === 2: res.push('Homer!');break;
    case count >= 3 && count <= 5: res.push('Careless!');break;
    case count > 5: res.push('Hobo!');break;
  }
  return res;
}
