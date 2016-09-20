function leaderB(user, user_score, your_score){
  var difference = 0
  var betaKata = 0
  var kata = 0

  if (your_score<user_score){
    difference = user_score - your_score
  }
  else if (your_score>user_score){
    return "Winning!"
  }
  if (difference %3 == 1){
    betaKata = Math.floor(difference/3)
    kata = 1
  } else if(difference %3 == 2){
    betaKata = Math.floor(difference/3)
    kata = 2
  } else {
    betaKata = difference/3
    kata = 0
  }
  if (betaKata + kata >1000){
    return "To beat " + user +"\'s score, I must complete " + betaKata + " Beta kata and " + kata +" 8kyu kata. Dammit!"
  } else if (betaKata + kata < 1){
    return "Only need one!"
  } else {
  return "To beat " + user + "\'s score, I must complete " + betaKata + " Beta kata and "  + kata +" 8kyu kata."
  }
}

----------------------------------other answers --------------------------------
function leaderB(user, user_score, your_score){
  var diff = user_score - your_score

  if (diff < 0)
    return "Winning!"
  if (diff == 0)
    return "Only need one!"

  var beta = ~~(diff/3), eight = diff % 3

  return `To beat ${user}'s score, I must complete ${beta} Beta kata and ${eight} 8kyu kata.` + (beta+eight > 1000 ? " Dammit!" : "")
}

----------------------------------other answers --------------------------------
