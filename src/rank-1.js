const { GENDER } =require('./constants');

const rank1Roots = [
    'перв',
    'втор',
    'трет',
    'четверт',
    'пят',
    'шест',
    'седьм',
    'восьм',
    'девят'
];

function getEnd(n, gender){
        switch (gender) {
            case GENDER.MASCULINE:{
                switch (n) {
                    case 1:
                    case 4:
                    case 5:
                    case 9:
                        return 'ый';
                    case 2:
                    case 6:
                    case 7:
                    case 8:
                        return 'ой';
                    case 3:
                        return 'ий';
                }
            }
            case GENDER.FEMININE:{
                if(n === 3){
                    return 'ья';
                }else{
                    return 'ая';
                }
            }
            case GENDER.NEUTER:{
                if(n === 3){
                    return 'ье';
                }else{
                    return 'ое';
                }
            }
        }
    }

function getRoot(n){
    return rank1Roots[n-1];
}

function orderNumeral(n, gender){
    return getRoot(n) + getEnd(n, gender);
}

module.exports = {
    orderNumeral
};