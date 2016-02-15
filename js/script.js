(function() {
  
var inputStr="";
var userValue=0;
document.getElementById('user').focus();


document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      document.getElementById('sub').click();
      
    }
});

document.getElementById("sub").addEventListener("click", function(){
    
    document.getElementById('answer').innerHTML = "";
    var inputStr = document.getElementById('user').value;
    var userValue = parseInt(inputStr);
    validate(userValue);
    fizzBuzz(userValue);
    document.getElementById('user').value = "";
});


function validate(e) {
    if (e >= 1 && e <= 100){
      return;
    } else
    alert('Please enter a number between 1 and 100.');
}


function fizzBuzz(num) {
  for (i = num; i <= 100; i += 1) {
    if (i%3 == 0 && i%5 ==0){
      document.getElementById('answer').innerHTML += 'fizzbuzz' + '<br>';
    } else if (i%3 == 0) {
      document.getElementById('answer').innerHTML += 'fizz' + '<br>';
    } else if (i%5 == 0) {
      document.getElementById('answer').innerHTML += 'buzz' + '<br>';
    } else 
    
    document.getElementById('answer').innerHTML += (i) + '<br>';
  }
};




})();
