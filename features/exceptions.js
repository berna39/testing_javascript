function gunnersCanPlayFor(team){
    if(team == 'Tottenham')
    { 
        throw new Error('A gunner could never play for Spurs');
    }
    return 'Okey';
}

module.exports = gunnersCanPlayFor;