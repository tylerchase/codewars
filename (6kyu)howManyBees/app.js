howManyBees = function(hive) {
  if (!hive || hive.length<=1){
    return 0
  } else {
    var count = 0
    var joined= []
    var finale = []
    for (var i=0; i<hive.length; i++){
       joined.push(hive[i].join(''))
    }

    for(var j=0; j<joined.length; j++){
    //console.log(joined[j], "joined")
    for (var d=0; d<joined[j].length; d++){
       finale = joined[j].split('')

    }
      for(var q=0; q<finale.length -2; q++){
          if (finale[q]+finale[q+1]+ finale[q+2] == 'bee' || finale[q]+finale[q+1]+ finale[q+2] == 'eeb'){
            console.log(finale[q]+finale[q+1]+ finale[q+2])
          count++
          }
        }
    }
   //console.log(hive.length, "hivelen")
   var hivelen = hive.length

    var numLen = 0
    for (var u=0; u<hive.length; u++){
      numLen = hive[u].length
    }
    //console.log(numLen, 'numlen')
    var test = [];
    var rando = ''

    for (var z=0; z<=numLen-1; z++){
      for (var x=0; x<hive.length; x++){
        //  console.log(hive[0][0])
       // console.log(hive.length)
        // console.log(hive[x][z], 'y')
          rando += hive[x][z]
      }
      test.push(rando)
    }
    //console.log(test)
    //console.log(test[test.length-1], 'test')
    var std = test[test.length-1]
    var stv = std.match(new RegExp(".{1,"+hivelen+"}", 'g'))
    //console.log(stv)
    for (var e=0; e<stv.length; e++){
      var finalArray = stv[e].split('')
      for (var g= 0; g<finalArray.length-2; g++){
        if (finalArray[g]+finalArray[g+1]+ finalArray[g+2] == 'bee' || finalArray[g]+finalArray[g+1]+ finalArray[g+2] == 'eeb'){
          count++
        }
      }
    }
  }
  return count
}

---------------------------other answers ---------------------------------------


howManyBees = function(hive) {
  if (!hive || !hive.length)
    return 0;

  let flip = hive[0].map((_, i) => hive.map(row => row[i]));
  let text = hive.concat(flip).map(row => row.join('')).join('|');
  let bees = text.match(/(?=bee|eeb)/g) || [];

  return bees.length;
}

---------------------------other answers ---------------------------------------
const howManyBees = hive => {
  let count = 0;
  for( let i=0; hive && i<hive.length; i++ ){
    for( let j=0; j<hive[i].length; j++ ) {
      if( hive[i][j] == 'b') {
        count += ~~(hive[i+2] && hive[i+1][j] == 'e' && hive[i+2][j] == 'e' ) +
                 ~~(hive[i-2] && hive[i-1][j] == 'e' && hive[i-2][j] == 'e' ) +
                 ~~(hive[i][j+2] && hive[i][j+1] == 'e' && hive[i][j+2] == 'e' ) +
                 ~~(hive[i][j-2] && hive[i][j-1] == 'e' && hive[i][j-2] == 'e' );
      }
    }
  }
  return count;
}
