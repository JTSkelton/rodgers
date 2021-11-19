//Utility Logic
function numArray(number){
  numberArray = [];
  for (i = 0; i <= number; i++){
    numberArray.push(i.toString());
  }
  return numberArray;
  }

//Business Logic

function rodgers(number){
  finalArray = [];
  numberArray = numArray(number)
  numberArray.forEach(function(num){
    if (num.includes("3")){
        finalArray.push("Won't you be my neighbor?");
      }
    else if (num.includes("2")){
        finalArray.push("Boop!");
      }
    else if (num.includes("1")){
      finalArray.push("Beep!");
    } else {
      finalArray.push(num);
    }
    
  });
  return finalArray;
}

rodgers(23)

function rodgersRegEx(number) {
  numberArray = numArray(number).join(" ");
  finalArray = numberArray.replace(/\d*3\d*/g,"Won't you be my neighbor?").replace(/\d*2\d*/g,"Boop!").replace(/\d*1\d*/g,"Beep!")
  return finalArray;
}

rodgersRegEx(103);