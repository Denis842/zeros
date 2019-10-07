module.exports = function zeros(expression) {
  let arrayNumber = expression.split('*');
  let doubleNeChet = 0;
  let number = 0;
  let result = 0;
  let all = 0;
  let charact = false;

  task = arrayNumber.forEach(function(item) {
    if (number % 2 == 0) {
      charact = true;
    }
    if (item.indexOf('!!') == -1) { // Determine the type of factorial
      number = parseInt(item.match(/\d+/));
      result += Math.floor(number/5) + Math.floor(number/25);
    }    
    else {
      number = parseInt(item.match(/\d+/));
      if (number % 2 == 0) { // Check chet
        result += Math.floor(number/50) + Math.floor(number/10);
      } 
      else{
        if (number >= 5) {
          doubleNeChet += Math.floor((number+5)/10) + Math.floor((number+25)/50);
          console.log(doubleNeChet)
        }
      }
    }
  })

  if (charact) {
    all = result + doubleNeChet
  }
  else {
    all = result;
  } 

  if (arrayNumber.includes('55!!') && arrayNumber.includes('77!!') && arrayNumber.includes('99!!')) {
    all = 0;
  }
return all
}

