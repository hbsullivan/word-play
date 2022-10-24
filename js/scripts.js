function handleInput(event) {
  event.preventDefault();
  const userInput = document.getElementById("sentences").value
  const userArray = userInput.split(" ");
  console.log(userArray);

  userArray.forEach(function(element) {
    
  })
}


window.addEventListener("load", function() {
 form = document.getElementById("form");
 form.addEventListener("submit", handleInput);
})