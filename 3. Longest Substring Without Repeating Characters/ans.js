/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    const inp = s.substring();
    let res = [];
    let longest = 0;

    if(inp.length <= 1) {
        return inp.length;
    }

    for(let i = 0; i < inp.length; i++) {
        res.push(inp[i]);

        if(res.length > 1){
            for(let j = 0; j < (res.length - 1); j++) {
                if(res[j] == inp[i]) {

                    for(let k = 0; k < (j + 1); k++) {
                        res.shift();
                    }
                    break;
                }
            }
        }
        (res.length > longest) ? longest = res.length : longest = longest;
    }

    return longest;

};