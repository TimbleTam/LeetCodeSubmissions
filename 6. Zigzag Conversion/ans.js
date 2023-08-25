/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows === 1) return s;
    
    let zigArray = [], ziggingValue = 0, zigDown = true;

    for(let i = 0; i < numRows; i++) {
        zigArray.push([]);
    }

    zigArray[0].push(s[0]);

    for(let i = 1; i < s.length; i++) {
        
        if(zigDown != true) {
            ziggingValue--;
            zigArray[ziggingValue].push(s[i]);
        } else {
            ziggingValue++;
            zigArray[ziggingValue].push(s[i]);
        }

        if(ziggingValue == 0) zigDown = true;
        else if(ziggingValue >= numRows - 1) zigDown = false;
    }

    let returnString = "";

    for(let i = 0; i < zigArray.length; i++) {
        for(let k = 0; k < zigArray[i].length; k++) {
            if(zigArray[i][k] != 0 && zigArray[i][k] != null) {
                returnString = returnString + zigArray[i][k];
            }
        }
    }

    return returnString;


};
