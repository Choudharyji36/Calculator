let string = "";
let isOpenBracket = true; // Track bracket state
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
       try{
      string = eval(string);
      document.querySelector('input').value = string;
    }  catch{
        document.querySelector('input').value = "Error";
         string = "";
      }
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }

      else if (e.target.innerHTML == 'X') { // Backspace Functionality
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML == '%') {
      // Convert the current string to percentage
      string = eval(string) / 100;
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML == '( )') {
      if (isOpenBracket) {
        string += '(';
        isOpenBracket = false;
      } else {
        string += ')';
        isOpenBracket = true;
      }
      document.querySelector('input').value = string;
    }
      
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
   
  })
})
