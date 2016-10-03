function howMuchILoveYou(nbPetals) {
  if(nbPetals%6 === 1){
    return "I love you"
  } else if(nbPetals%6 === 2){
    return "a little"
  } else if(nbPetals%6 === 3){
    return "a lot"
  } else if(nbPetals%6 === 4){
    return "passionately"
  } else if(nbPetals%6 === 5){
    return "madly"
  } else {
    return "not at all"
  }
}

---------------------------other answers ---------------------------------------

const howMuchILoveYou = nbPetals => ["I love you","a little","a lot","passionately","madly","not at all"][(nbPetals-1)%6];

---------------------------other answers ---------------------------------------
function howMuchILoveYou(nbPetals) {
    var array = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return array[--nbPetals % array.length];

}
