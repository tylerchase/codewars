function rentalCarCost(d) {
  if (d<3){
    return d * 40
  } else if (d<7){
    return (d * 40) - 20
  } else {
    return (d * 40) - 50
  }
}

---------------------------other answers ---------------------------------------
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

---------------------------other answers ---------------------------------------

const rentalCarCost = d => d*40 - (d>2)*20 - (d>6)*30;
