 
 var readBinaryWatch = function(turnedOn) {
    let time = [];
    
    for (let h = 0; h < 12; h++) {
        for ( let m = 0; m < 60; m++) {
            let hOnes = h? h.toString(2).match(/1/g).length : 0
            let mOnes = m? m.toString(2).match(/1/g).length : 0

            if( hOnes + mOnes === turnedOn) {
                time.push(`${h}:${m < 10? `0${m}`: m}`)
            }
        }
    }
    return time
};
