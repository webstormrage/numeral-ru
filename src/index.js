const GENDER = {
    MASCULINE: 'MASCULINE',
    FEMININE: 'FEMININE',
    NEUTER: 'NEUTER'
};

const top20Roots = [
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

const top9 = {
    getEnd(n, gender){
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
    },
    getRoot(n){
        return top20Roots[n-1];
    }
};

function orderNumeral(n, gender){
    if(n >= 1 && n < 10){
        return top9.getRoot(n) + top9.getEnd(n, gender);
    }
}

module.exports = {
    orderNumeral,
    GENDER
};