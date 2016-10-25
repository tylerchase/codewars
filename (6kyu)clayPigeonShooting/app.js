function shoot(x){
  var peteScore = 0
  var philScore = 0
  for (var i=0; i<x.length; i++){
    if (x[i][1] == false){
       if (x[i][0]["P1"] == 'XX'){
          peteScore+=2
        } else if (x[i][0]["P1"] == "XO" || x[i][0]["P1"] == "OX"){
          peteScore+=1
        }
        if (x[i][0]["P2"] == 'XX'){
          philScore+=2
        }
        else if (x[i][0]["P2"] == "XO" || x[i][0]["P2"] == "OX"){
          philScore+=1
        }
    }
      else if (x[i][1] == true){
        if (x[i][0]["P1"] == 'XX'){
          peteScore+=4
        } else if (x[i][0]["P1"] == "XO" || x[i][0]["P1"] == "OX"){
          peteScore+=2
        }
        if (x[i][0]["P2"] == 'XX'){
          philScore+=4
        }
        else if (x[i][0]["P2"] == "XO" || x[i][0]["P2"] == "OX"){
          philScore+=2
        }
    }
  }
  if (peteScore > philScore){
    return "Pete Wins!"
  }
  else if (peteScore < philScore){
    return "Phil Wins!"
  }
  else  if (peteScore == philScore){
    return "Draw!"
  }
}
---------------------------other answers ---------------------------------------


shoot=x=>(y=x.reduce((a,b)=>a+(b[0].P1.split("O").length-b[0].P2.split("O").length)*(b[1]+1),0))>0?'Phil Wins!':y<0?'Pete Wins!':'Draw!'

---------------------------other answers ---------------------------------------

function shoot(x){
  var factor = 2;
  var P1Score = 0, P2Score = 0;
  x.map( function(cur) {
    if (cur[1] === true) { factor = 2; }
    else { factor = 1; }
    cur[0]['P1'].split('').map(function(cur){ cur === 'X' ? P1Score += factor : P1Score; });
    cur[0]['P2'].split('').map(function(cur){ cur === 'X' ? P2Score += factor : P2Score; });
  });
  if (P1Score > P2Score) return 'Pete Wins!';
  else if (P1Score < P2Score) return 'Phil Wins!';
  else return 'Draw!'
}
---------------------------other answers ---------------------------------------

function shoot(rounds){
  let pete = 0
  let phil = 0;
  rounds.forEach(([ { P1, P2 }, doubleScore ]) => {
    pete += score(P1, doubleScore);
    phil += score(P2, doubleScore);
  });
  return pete === phil ? 'Draw!' : pete > phil ?  'Pete Wins!' :  'Phil Wins!';
}

const SCORE_MAP = { X: 1, O: 0 };
const DOUBLE_SCORE_MAP = { X: 2, O: 0 };
function score(input, doubleScore) {
  scoreMap = doubleScore ? DOUBLE_SCORE_MAP : SCORE_MAP;
  return [...input].map(v => scoreMap[v]).reduce((s, v) => s + v, 0);
}
