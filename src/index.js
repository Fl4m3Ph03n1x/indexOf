const isEmpty = str => str === "";

const indexOf = ( string, substring, fromIndex = 0 ) => {

    if( isEmpty(substring) ){
        if( fromIndex > string.length )
            return string.length;

        if( fromIndex < 0 )
            return 0;

        return fromIndex;
    }

    // Skips checking strings that have the same length (since they may be equal)
    // or strings where the substring is larger than the string we are comparing it to ( since it is a mathematical impossibility )
    if( substring.length >= string.length ){
        return substring === string ? 0 : -1;
    }

    for( let i = fromIndex; i < string.length; i++ ){

        //Check if the first and last chars of substring are different from the chars in corresponding position of string.
        //If so, we pass to the next iteration for aditional checks.
        if( substring[0] !== string[i] || substring[substring.length - 1] !== string[i + substring.length - 1] ){
            continue;
        }

        // Check all characters inside substring, excluding the first and last
        let foundSubstring = true;
        for( let j = 1; j < substring.length - 1; j++ ){
            if( substring[j] !== string[i + j] ){
                // The substring isn't in this position, so, check the next character
                foundSubstring = false;
                break;
            }
        }

        //we didn't find our substring, we keep looking
        if( !foundSubstring )
            continue;

        // If you reached here, you found the substring
        return i;
    }

    return -1;
};

module.exports = indexOf;
