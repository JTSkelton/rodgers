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
        finalArray.push("<li>" + num + ": " + "Won't you be my neighbor?" + "</li>");
      }
    else if (num.includes("2")){
        finalArray.push("<li>" + num + ": " + "Boop!" + "</li>");
      }
    else if (num.includes("1")){
      finalArray.push("<li>" + num + ": " + "Beep!" + "</li>");
    } else {
      finalArray.push("<li>" + num + ": " + num + "</li>");
    }
    
  });
  return finalArray;
}


// RegEx Practice Function
// function rodgersRegEx(number) {
//   numberArray = numArray(number).join(" ").replace(/\d*3\d*/g,"Won't you be my neighbor?").replace(/\d*2\d*/g,"Boop!").replace(/\d*1\d*/g,"Beep!");
//   return numberArray;
// }

$(document).ready(function(){
  $("form.rodgers").submit(function(event){
    event.preventDefault();
    const number = $(".input").val();
    $("#answer").html(rodgers(number));
    // $("#answer").html(rodgersRegEx(number));
  });
});
