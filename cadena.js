module.exports.isPal=(str)=>{
    str=str.toLowerCase().replace(/ /g,'');
    return str == str.split('').reverse().join('');
}

module.exports.getNumWords=(str)=>{
    return str.split(' ').length;
}

module.exports.getNumLet=(str)=>{
    var num=0;
    var words=str.split(' ');

    words.forEach(word => {
        num+=word.length;
    });

    return num;
}

function numVoc(str){
    return str.toLowerCase().match(/[aeiou]/g).length;
}
module.exports.getNumVoc=numVoc;

module.exports.getNumCons=(str)=>{
    return str.length-numVoc(str)-1;
}