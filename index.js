let input = document.querySelectorAll('.box input');
let checkBtn = document.querySelector('#chekk');
let result = document.querySelector('.result');


checkBtn.addEventListener('click', (e) => {
    var yourName = document.getElementById('name_').value;
    var pairName = document.getElementById('pair').value;

    const inputChar = yourName + pairName;
    const resultt = new Set([...inputChar]);
    const size = resultt.size;
    setTimeout(function () {
        result.innerHTML = `${yourName} & ${pairName}` + ' ' + getMatch(size);
    }, 2000)


    function getMatch(size) {
        return {
            1: 'are made for FRIENDSHIP',
            2: 'are made for LUCK',
            3: 'are made for ADDICTION',
            4: 'are made for MARRIAGE',
            5: 'are made for ENGAGEMENT',
            6: 'are made for SECRET LOVE',
            7: 'are made for MARRIAGE',
            8: 'are made for SECRET LOVE',
            9: 'are made for LUCK',
            10: 'are made for FRIENDSHIP'
        }[size];
    }


    /*   if (size == 1) {
           console.log(`${yourName} & ${pairName} are made for FRIENDSHIP`);
       } else if (size == 2) {
           console.log(`${yourName} & ${pairName} are made for LUCK`);
       } else if (size == 3) {
           console.log(`${yourName} & ${pairName} are made for ADDICTION`);
       } else if (size == 4) {
           console.log(`${yourName} & ${pairName} are made for MARRIAGE`);
       } else if (size == 5) {
           console.log(`${yourName} & ${pairName} are made for ENGAGEMENT`);
       } else if (size == 6) {
           console.log(`${yourName} & ${pairName} are made for SECRET LOVE`);
       } else if (size == 7) {
           console.log(`${yourName} & ${pairName} are made for LOVE`);
       }
       else if (size == 8) {
           console.log(`${yourName} & ${pairName} are made for LUCK`);
       }
       else if (size == 9) {
           console.log(`${yourName} & ${pairName} are made for FRIENDSHIP`);
       }
       else if (size == 10) {
           console.log(`${yourName} & ${pairName} are made for SECRETS`);
       }
 
 
   }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   /*const repeat = [...repeatChar].sort();
   const repeatChar = [];
   for (let i = 0; i < inputChar.length - 1; i++) {
       if (inputChar[i] === inputChar[i + 1])
           repeatChar.push(inputChar);
   }
   const repeatArray = [...new Set(repeatChar)];
   for (let i = 0; i < inputChar.length; i++) {
       arr.push(inputChar.charAt(i));
 
 
   }
 
 
   /*if (add == 1) {
       console.log(`${yourName} & ${pairName} are made for FRIENDSHIP`);
   } elseif(add == 2); {
       console.log(`${yourName} & ${pairName} are made for LOVE`);
   } elseif(add == 3); {
       console.log(`${yourName} & ${pairName} are made for ADDICTION`);
   } elseif(add == 4); {
       console.log(`${yourName} & ${pairName} are made for MARRIAGE`);
   } elseif(add == 5); {
       console.log(`${yourName} & ${pairName} are made for ENGAGEMENT`);
   } elseif(add == 6); {
       console.log(`${yourName} & ${pairName} are made for SECRET LOVE`);
   }*/


})
