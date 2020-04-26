const { GENDER } = require('./constants');

const rank2Roots = [
    'двадцат',
    'тридцат',
    'сорок',
    'пятидесят',
    'шестидесят',
    'семидесят',
    'восьмидесят',
    'девяност'
];

function getInfinitive(n){
    if(n === 50){
        return 'пятьдесят';
    } else if(n === 60) {
        return 'шестьдесят';
    } else if (n === 70) {
        return 'семьдесят';
    } else if (n === 80) {
        return 'восемьдесят';
    } else if(n === 40){
        return rank2Roots[2];
    } else if (n === 90) {
        return 'девяносто';
    } else {
        return rank2Roots[n/10 - 2] + 'ь';
    }
}

function getEnd(n, gender){
    switch (gender) {
        case GENDER.MASCULINE: {
            if(n === 40){
                return 'овой';
            }else{
                return 'ый';
            }
        }
        case GENDER.FEMININE: {
            if(n === 40) {
                return 'овая';
            }else {
                return 'ая';
            }
        }
        case GENDER.NEUTER: {
            if(n === 40) {
                return 'овое';
            }else {
                return 'ое';
            }
        }
    }
}

function getRoot(n){
    return rank2Roots[n/10 - 2];
}

function orderNumeral(n, gender, lowOrderNumeral){
    if (n % 10 === 0) {
        return getRoot(n) + getEnd(n, gender);
    }else if( n < 20){
        return lowOrderNumeral(n, gender);
    } else {
        return getInfinitive(n - n % 10) + ' ' + lowOrderNumeral(n % 10, gender);
    }
}

module.exports = {
    orderNumeral
};