const { GENDER } = require('./constants');

const ten2Roots = [
    'десят',
    'одиннадцат',
    'двенадцат',
    'тринадцат',
    'четырнадцат',
    'пятнадцат',
    'шестнадцат',
    'семнадцат',
    'восемнадцат',
    'девятнадцат',
];

function getRoot(n){
    return ten2Roots[n-10];
}

function getEnd(gender){
    switch(gender){
        case GENDER.MASCULINE:
            return 'ый';
        case GENDER.FEMININE:
            return 'ая';
        case GENDER.NEUTER:
            return 'ое';
    }
}

function orderNumeral(n, gender, lowerOrderNumeral){
    if(n < 10){
        return lowerOrderNumeral(n, gender);
    }
    return getRoot(n) + getEnd(gender);
}

module.exports = {
    orderNumeral
};