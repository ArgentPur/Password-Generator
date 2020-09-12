
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordId = document.querySelector("password");
 

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
    rL: randomLw,
    rU: randomUp,
    rS: randomSym,
    rN: randomNum
  };

// Add event listener to generate button
generateBtn.addEventListener('click', () => {

}) 

  var complexity = prompt("Chose password length between 8-128 charachters.")
  if (complexity < minNumber || complexity > maxNumber){
    alert("Type a number between 8-128 for password length!")
    complexity = null;
  }
if (isNaN(complexity) === true) {
  alert("select a number between 8-128")
}
else {
  var length = parseInt(complexity);
  var Lw = confirm("Include lowercase charachters in password?")
  var Up = confirm("Include uppercase charachters in password?")
  var Sym = confirm("Include special symbols in password?")
  var Num = confirm("Include numbers in password?")
}

//logs user input to prompts//
console.log(Lw,Up,Sym,Num);
console.log(length)

passwordId.textContent = generatePassword(Lw,Up,Sym,Num,length);

function generatePassword (Lw, Up, Sym, Num, length) {
  let generatePassword = "";

  const typesCount = Lw + Up + Sym + Num;
  console.log('typesCount: ', typesCount);

  const typesArr = [{Lw}, {Up}, {Sym}, {Num}].filter
  (item => Object.values(item)[0]);

  console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Obeject.keys(type)[0];
      console.log('funcName: ', funcName);

      generatePassword += randomFunc[funcName]();
    });
  }

  console.log(generatePassword)
  
}

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
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


