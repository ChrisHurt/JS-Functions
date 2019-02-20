function caesarCipher(str,shift) {
    let shiftedStr = "";
    let caesarShift = shift;
    let dir = Math.sign(shift);

    if(dir < 0){
        for (let i = 0; i < str.length; i++) {
            if (((str.charCodeAt(i) >= "A".charCodeAt(0)) && (str.charCodeAt(i) <= "Z".charCodeAt(0))) && (str.charCodeAt(i) + caesarShift < "A".charCodeAt(0)) && (str.charCodeAt(i) + caesarShift > "A".charCodeAt(0) - ("Z".charCodeAt(0) - "A".charCodeAt(0)) - 1)) {
                shiftedStr += String.fromCharCode((str.charCodeAt(i) + caesarShift) + ("Z".charCodeAt(0) - "A".charCodeAt(0)) + 1);

                //console.log(str[i] + " : " + shiftedStr[shiftedStr.length-1]);

            } else if (((str.charCodeAt(i) >= "A".charCodeAt(0)) && (str.charCodeAt(i) <= "Z".charCodeAt(0))) && str.charCodeAt(i) + caesarShift <= "Z".charCodeAt(0) && str.charCodeAt(i) + caesarShift >= "A".charCodeAt(0)) {
                shiftedStr += String.fromCharCode(str.charCodeAt(i) + caesarShift);
                //console.log(str[i] + " : " + shiftedStr[shiftedStr.length-1]);

            } else {
                shiftedStr += String.fromCharCode(str.charCodeAt(i));
                //console.log(str[i] + " : " + shiftedStr[shiftedStr.length-1]);
            }
        }
    } else if(dir > 0){
        for (let i = 0; i < str.length; i++) {
            if (((str.charCodeAt(i) >= "A".charCodeAt(0)) && (str.charCodeAt(i) <= "Z".charCodeAt(0))) && (str.charCodeAt(i) + caesarShift > "Z".charCodeAt(0)) && str.charCodeAt(i) + caesarShift < "Z".charCodeAt(0) + ("Z".charCodeAt(0) - "A".charCodeAt(0)) - 1) {
                shiftedStr += String.fromCharCode((str.charCodeAt(i) + caesarShift) - ("Z".charCodeAt(0) - "A".charCodeAt(0)) - 1);
                //console.log(str[i] + " : " + shiftedStr[shiftedStr.length-1]);
            } else if (((str.charCodeAt(i) >= "A".charCodeAt(0)) && (str.charCodeAt(i) <= "Z".charCodeAt(0))) && str.charCodeAt(i) + caesarShift <= "Z".charCodeAt(0) && str.charCodeAt(i) + caesarShift > "A".charCodeAt(0)) {
                shiftedStr += String.fromCharCode(str.charCodeAt(i) + caesarShift);
                //console.log(str[i] + " : " + shiftedStr[shiftedStr.length-1]);
            } else {
                shiftedStr += String.fromCharCode(str.charCodeAt(i));
                //console.log(str[i] + " : " + shiftedStr[shiftedStr.length-1]);
            }
        }
    }
    return shiftedStr;
}


console.log("From: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.' +1 shift to: \t\t" + caesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",1));
console.log("From: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.' -1 shift to: \t\t" + caesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",-1));
console.log("From: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.' +1 and -1 shift to: \t" + caesarCipher(caesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",-1),1));

