const { GENDER } = require('./constants');

const rank3Roots = [
    'сот',
    'двухсот',
    'трехсот',
    'четырехсот',
    'пятисот',
    'шестисот',
    'семисот',
    'восьмисот',
    'девятисот',
];

const rank3Infinitives = [
    'сто',
    'двести',
    'триста',
    'четыреста',
    'пятьсот',
    'шестьсот',
    'семьсот',
    'восемьсот',
    'девятьсот'
];

function getInfinitive(n){
    return rank3Infinitives[n/100 - 1];
}

function getRoot(n) {
    return rank3Roots[n/100 - 1];
}

function getEnd(gender){
    switch (gender) {
        case GENDER.MASCULINE:
            return 'ый';
        case GENDER.FEMININE:
            return 'ая';
        case GENDER.NEUTER:
            return 'ое'
    }
}

function orderNumeral(n, gender, lowOrderNumeral){
    if(n < 100){
        return lowOrderNumeral(n % 100, gender);
    }
    if (n % 100 === 0) {
        return getRoot(n) + getEnd(gender);
    }  else {
        return getInfinitive(n - n % 100) + ' ' + lowOrderNumeral(n % 100, gender);
    }
}

module.exports = {
    orderNumeral
};