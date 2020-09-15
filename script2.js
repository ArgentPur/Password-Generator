var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','U','V','w','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var specChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = ['0','1','2','3','4','5','6','7','8','9',]

const minNumber = 8;
const maxNumber = 128;

const randomFunc = {
    rL: randomLw,
    rU: randomUp,
    rS: randomSym,
    rN: randomNum
  }; 

generateBtn.addEventListener('click', () => {

})

var complexity = prompt("")


function randomLw(){
    return valueLw[Math.floor(Math.random() * valueLw.length)];
  }
  function randomUp(){
    return valueUp[Math.floor(Math.random() * valueUp.length)];
  }
  function randomSym(){
    return valueSym[Math.floor(Math.random() * valueSym.length)];
  }
  function randomNum(){
    return valueNum[Math.floor(Math.random() * valueNum.length)];
  }
  
  
