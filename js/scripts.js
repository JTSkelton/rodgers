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
    if (num.includes(neighbor)){
        finalArray.push("Won't you be my neighbor?");
      }
    else if (num.includes(boop)){
        finalArray.push("Boop!");
      }
    else if (num.includes(beep)){
      finalArray.push("Beep!");
    } 
    else {
      finalArray.push(num);
    }
  });
  return finalArray;
}

// function rodgersRegEx(number) {
//   numberArray = [];
//   for (i = 0; i <= number; i++){
//    numberArray.push(i);
//  }
//  numberArray = numberArray.join(" ");
//  finalArray = numberArray.replace(/\d*3\d*/g,"Won't you be my neighbor?").replace(/\d*2\d*/g,"Boop!").replace(/\d*1\d*/g,"Beep!")
//  return finalArray;
// }

// rodgersRegEx(103);