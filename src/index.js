const { GENDER } = require('./constants');
const rank1 = require('./rank-1');
const ten2 = require('./ten-2');
const rank2 = require('./rank-2');
const rank3 = require('./rank-3');

const rank2OrderNumeral = (n, gender) => {
    return rank2.orderNumeral(n, gender, rank1.orderNumeral);
};

const rank3OrderNumeral = (n, gender) => {
    return rank3.orderNumeral(n, gender, rank2OrderNumeral)
};

function orderNumeral(n, gender){
    if(n >= 1 && n < 10){
        return rank1.orderNumeral(n, gender);
    }else if(n >= 10 && n < 20){
        return ten2.orderNumeral(n, gender);
    }else if( n >= 20 && n < 100){
        return rank2OrderNumeral(n, gender);
    }else if(n >= 100 && n < 1000){
        return rank3OrderNumeral(n, gender);
    }
}

module.exports = {
    orderNumeral,
    GENDER
};