function fakeBin(x){
  var split = x.split('')
  var result = ''
  for (var i=0; i<split.length; i++){
    if(split[i]<5){
      result += 0
    } else{
      result += 1
    }
  }
  return result
}
---------------------------other answers ---------------------------------------

const fakeBin=x=>[...x].reduce((a,b)=>a+(~~(+b/5)),"")

---------------------------other answers ---------------------------------------

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

---------------------------other answers ---------------------------------------

function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}
