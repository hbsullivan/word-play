//Business Logic

function userInput(text) {
  userArray = text.split(" ");
  newArray = [];
  userArray.forEach(function(element){
    if (element.length >= 3){
      newArray.push(element);
      return newArray
    }
  });
       
    newArray.reverse();     
    finalArray = newArray.join(" ");
    return finalArray
}






//UI Logic

function gatherInput(event) {
  event.preventDefault();
  const sentence = document.getElementById("sentences").value

  document.getElementById("newSentence").innerText = userInput(sentence)
}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", gatherInput);
})