/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let longest = "";

    if(s.length <= 1) {
        return s.toString();
    }

    if(s.length == 2 && s[0] != s[1]) {
        return s[0];
    }

    for(let i = 0; i < s.length; i++) {

        let forwards = "";

        for(let j = (i + 0); j < s.length; j++) {
            forwards = forwards + s[j];

            let k = 0;
            for(k = 0; k < ((forwards.length - ((forwards.length % 2 === 0) ? 1 : 2)) / 2); k++) {
                if(forwards[k] !== forwards[(forwards.length - 1) - k]) {
                    break;
                }
            }

            if(k >= ((forwards.length - ((forwards.length % 2 === 0) ? 1 : 2)) / 2) && forwards.length >= longest.length) {
                longest = forwards;
            }
        }
    }

    return longest;


};