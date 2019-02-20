function telephoneCheck(str) {

    // If there is a country code, check that it's equal to 1 
    if (str.match(/[-\w]+/)[0].length == 1 || str.match(/[-\w]+/)[0].length == 2) {
        if (str.match(/[-\w]+/) != 1) {
            //console.log("'" + str.match(/[-\w]+/) + "' is not a valid area code.");
            return false;
        } else {
            //console.log("'" + str.match(/[-\w]+/) + "' is a valid area code.");

            str = str.slice(str.match(/[-\w]+/).length).trim();
            //console.log("string without country code: '" + str + "'");
        }
    }

    // Check that the area code is both present, valid and formmatted correctly
    if (!str.match(/^\(\d\d\d\)|^\d\d\d/)) {
        //console.log("'" + str + "' has no valid area code");
        return false;
    } else {
        //console.log("'" + str.match(/^\(\d\d\d\)|^\d\d\d/) + "' is a valid area code");
        let length;
        if (str.match(/^\(\d\d\d\)/)) {
            length = 5;
        } else {
            length = 3;
        }
        str = str.slice(length).trim();
        //console.log("string without area code: '" + str + "'");
    }

    // Check that all remaining characters are valid
    let numTally = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i].charCodeAt(0) != " ".charCodeAt(0)) {
            numTally++;
        } else {
            if (str[i].charCodeAt(0) == "-".charCodeAt(0) || str[i].charCodeAt(0) == " ".charCodeAt(0)) {
                //console.log("Valid non-number char: '" + str[i] + "'");
            } else {
                //console.log("false");
                return false;
            }
        }

    }
    // Check that there are eight other valid numbers
    if (numTally != 7) {
        //console.log("Wrong number: " + numTally)
        return false;
    }

    // All tests passed. This is a valid US Phone Number.
    //console.log("All tests passed. This is a valid US Phone Number.");
    return true;
}

if(telephoneCheck("1 841)253-3418"))
    console.log("Telephone number: " + "1 841)253-3418" + " is valid.");
else
    console.log("Telephone number: " + "1 841)253-3418" + " is not valid.");

if(telephoneCheck("1 486 567-7580"))
    console.log("Telephone number: " + "1 486 567-7580" + " is valid.");
else
    console.log("Telephone number: " + "1 486 567-7580" + " is not valid.");

if(telephoneCheck("1 (578)567-5532"))
    console.log("Telephone number: " + "1 (578)567-5532" + " is valid.");
else
    console.log("Telephone number: " + "1 (578)567-5532" + " is not valid.");
