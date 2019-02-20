
function stringBaseEncode(str, base) {

    // Convert the input string to an array of words
    let arr2 = str.split(/\s/);
    
    // Initialise empty return array for storing words and spaces
    let arr = [];
    
    // Reinsert all the spaces lost to the array split process
    for(let k =0; k < arr2.length; k++){
        arr.push(arr2[k]);
        arr.push(" ");
    }

    // Initialise empty return string
    let retStr = "";

    // Convert each input character into a string with a radix of 'base'
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++){
            
            retStr += arr[i][j].charCodeAt(0).toString(base);
            retStr += " ";
        }
    }

    // Return a string encoded to a given 'base'
    return retStr;
}

function stringBaseDecode(str, base) {

    // Convert the input string to an array of encoded letters
    let arr = str.split(/\s/);
    let retStr = "";

    // Decode each encoded letter using the known base
    for (let i = 0; i < arr.length; i++) {
        retStr += String.fromCharCode(parseInt(arr[i], base));
    }

    // Return a string decoded from a given 'base'
    return retStr;
}

// Input Strings can be encoded into a string of a given base 
console.log("Input Strings can be encoded into a string of a given base: " + stringBaseEncode("Aren't bonfires fun!?",25));

// Encoded Strings of a given base can be decoded
console.log("Encoded Strings of a given base can be decoded: " + stringBaseDecode("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111",2));

console.log("Testing: " + stringBaseDecode(stringBaseEncode("Happy Coding!",25),25));