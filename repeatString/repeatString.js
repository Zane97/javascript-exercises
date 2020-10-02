const repeatString = function(phrase, count) {
    var out = "";
    
    // Error checking
    if (count < 0)
        return "ERROR";
    
    for(; count > 0; count--){
            out += phrase;
    }
    
    return out;
}

module.exports = repeatString
