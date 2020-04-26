const { GENDER } = require('./constants');
const rank1 = require('./rank-1');
const ten2 = require('./ten-2');
const rank2 = require('./rank-2');
const rank3 = require('./rank-3');

const ten2OrderNumeral = (n, gender) => {
    return ten2.orderNumeral(n, gender, rank1.orderNumeral);
};

const rank2OrderNumeral = (n, gender) => {
    return rank2.orderNumeral(n, gender, ten2OrderNumeral);
};

const rank3OrderNumeral = (n, gender) => {
    return rank3.orderNumeral(n, gender, rank2OrderNumeral)
};

function orderNumeral(n, gender){
    return rank3OrderNumeral(n, gender);
}

module.exports = {
    orderNumeral,
    GENDER
};