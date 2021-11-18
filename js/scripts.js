function rodgers(number){
  numberArray = [];
  finalArray = [];
  const beep = "1"
  const boop = "2"
  const neighbor = "3"

  for (i = 0; i <= number; i++){
    numberArray.push(i.toString());
  }

  numberArray.forEach(function(num){
    if (num.includes(beep)){
      finalArray.push("Beep!");
    } else {
      finalArray.push(num);
    }
  });
  return finalArray;
}

rodgers(10)