
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordId = document.querySelector("password");
var length;
var Lw; 
var Up; 
var Sym; 
var Num;
var Complexity;
var charPool = [] 
var passwordText

// Write password to the #password input
   const valueLw = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  const valueUp = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  const valueSym = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  const valueNum = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  //password length//
  const minNumber = 8;
  const maxNumber = 128;

  const randomFunc = {
    Lw: randomLw,
    Up: randomUp,
    Sym: randomSym,
    Num: randomNum
  };

// Add event listener to generate button
generateBtn.addEventListener('click', () => {

  var complexity = prompt("Chose password length between 8-128 charachters.")
  if (complexity < minNumber || complexity > maxNumber){
    alert("Type a number between 8-128 for password length!");
  }
if (isNaN(complexity) === true) {
  alert("select a number between 8-128")
}
else {
  length = parseInt(complexity);
  Lw = confirm("Include lowercase charachters in password?")
  Up = confirm("Include uppercase charachters in password?")
  Sym = confirm("Include special symbols in password?")
  Num = confirm("Include numbers in password?")
}

console.log(Lw,Up,Sym,Num);
console.log(length)

if(complexity > 7 && complexity < 129) return {writePassword}

function writePassword() {
  let generatePassword = "";

  const typesCount = Lw + Up + Sym + Num;
  console.log('typesCount: ', typesCount);

  const typesArr = [{Lw}, {Up}, {Sym}, {Num}].filter
  (item => Object.values(item)[0]);

  console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  }

  if (Lw){charPool = charPool.concat(value.Lw)}
  function randomLw(){
    return valueLw[Math.floor(Math.random() * valueLw.length)];
  }
  if (Up){charPool = charPool.concat(value.Up)}
  function randomUp(){
    return valueUp[Math.floor(Math.random() * valueUp.length)];
  }
  if (Sym){charPool = charPool.concat(value.Sym)}
  function randomSym(){
    return valueSym[Math.floor(Math.random() * valueSym.length)];
  }
  if (Num){charPool = charPool.concat(value.Num)}
  function randomNum(){
    return valueNum[Math.floor(Math.random() * valueNum.length)];
  }
  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Obeject.keys(type)[0];
      console.log('funcName: ', funcName);

      generatePassword += randomFunc[funcName]();
    });
  }
  for  (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    var randomCharachter = charPool[randIndex];
    var password = []; 
    password.push(randomCharachter); 
  }
    function writePassword() {
      let password = generatePassword();
      var passwordText = document.querySelector("#password");
      document.getElementById("#password").value = password
  
    passwordText.value = password;
  
  }
  return password.join('')



  
  
}

}) 





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


  function writePassword() {
    let password = generatePassword();
    var passwordText = document.querySelector("#password");
    document.getElementById("#password").value = password

  passwordText.value = password;

}


