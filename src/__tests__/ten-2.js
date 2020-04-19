const { GENDER } = require('../constants');
const { orderNumeral } = require('../ten-2');

describe('Порядковое числительное от 10 до 19', () => {

    it('Мужской род', () => {
        expect(orderNumeral(10, GENDER.MASCULINE)).toBe( 'десятый');
        expect(orderNumeral(11, GENDER.MASCULINE)).toBe( 'одиннадцатый');
        expect(orderNumeral(12, GENDER.MASCULINE)).toBe( 'двенадцатый');
        expect(orderNumeral(13, GENDER.MASCULINE)).toBe( 'тринадцатый');
        expect(orderNumeral(14, GENDER.MASCULINE)).toBe( 'четырнадцатый');
        expect(orderNumeral(15, GENDER.MASCULINE)).toBe( 'пятнадцатый');
        expect(orderNumeral(16, GENDER.MASCULINE)).toBe( 'шестнадцатый');
        expect(orderNumeral(17, GENDER.MASCULINE)).toBe( 'семнадцатый');
        expect(orderNumeral(18, GENDER.MASCULINE)).toBe( 'восемнадцатый');
        expect(orderNumeral(19, GENDER.MASCULINE)).toBe( 'девятнадцатый');
    });

    it('Женский род', () => {
        expect(orderNumeral(10, GENDER.FEMININE)).toBe( 'десятая');
        expect(orderNumeral(11, GENDER.FEMININE)).toBe( 'одиннадцатая');
        expect(orderNumeral(12, GENDER.FEMININE)).toBe( 'двенадцатая');
        expect(orderNumeral(13, GENDER.FEMININE)).toBe( 'тринадцатая');
        expect(orderNumeral(14, GENDER.FEMININE)).toBe( 'четырнадцатая');
        expect(orderNumeral(15, GENDER.FEMININE)).toBe( 'пятнадцатая');
        expect(orderNumeral(16, GENDER.FEMININE)).toBe( 'шестнадцатая');
        expect(orderNumeral(17, GENDER.FEMININE)).toBe( 'семнадцатая');
        expect(orderNumeral(18, GENDER.FEMININE)).toBe( 'восемнадцатая');
        expect(orderNumeral(19, GENDER.FEMININE)).toBe( 'девятнадцатая');
    });

    it('Средний род', () => {
        expect(orderNumeral(10, GENDER.NEUTER)).toBe( 'десятое');
        expect(orderNumeral(11, GENDER.NEUTER)).toBe( 'одиннадцатое');
        expect(orderNumeral(12, GENDER.NEUTER)).toBe( 'двенадцатое');
        expect(orderNumeral(13, GENDER.NEUTER)).toBe( 'тринадцатое');
        expect(orderNumeral(14, GENDER.NEUTER)).toBe( 'четырнадцатое');
        expect(orderNumeral(15, GENDER.NEUTER)).toBe( 'пятнадцатое');
        expect(orderNumeral(16, GENDER.NEUTER)).toBe( 'шестнадцатое');
        expect(orderNumeral(17, GENDER.NEUTER)).toBe( 'семнадцатое');
        expect(orderNumeral(18, GENDER.NEUTER)).toBe( 'восемнадцатое');
        expect(orderNumeral(19, GENDER.NEUTER)).toBe( 'девятнадцатое');
    });

});