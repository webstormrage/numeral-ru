const { GENDER } = require('../constants');
const { orderNumeral } = require('../rank-1');

describe('Порядковое числительное от 1 до 9', () => {

    it('Мужской род', () => {
        expect(orderNumeral(1, GENDER.MASCULINE)).toBe( 'первый');
        expect(orderNumeral(2, GENDER.MASCULINE)).toBe( 'второй');
        expect(orderNumeral(3, GENDER.MASCULINE)).toBe( 'третий');
        expect(orderNumeral(4, GENDER.MASCULINE)).toBe( 'четвертый');
        expect(orderNumeral(5, GENDER.MASCULINE)).toBe( 'пятый');
        expect(orderNumeral(6, GENDER.MASCULINE)).toBe( 'шестой');
        expect(orderNumeral(7, GENDER.MASCULINE)).toBe( 'седьмой');
        expect(orderNumeral(8, GENDER.MASCULINE)).toBe( 'восьмой');
        expect(orderNumeral(9, GENDER.MASCULINE)).toBe( 'девятый');
    });

    it('Женский род', () => {
        expect(orderNumeral(1, GENDER.FEMININE)).toBe( 'первая');
        expect(orderNumeral(2, GENDER.FEMININE)).toBe( 'вторая');
        expect(orderNumeral(3, GENDER.FEMININE)).toBe( 'третья');
        expect(orderNumeral(4, GENDER.FEMININE)).toBe( 'четвертая');
        expect(orderNumeral(5, GENDER.FEMININE)).toBe( 'пятая');
        expect(orderNumeral(6, GENDER.FEMININE)).toBe( 'шестая');
        expect(orderNumeral(7, GENDER.FEMININE)).toBe( 'седьмая');
        expect(orderNumeral(8, GENDER.FEMININE)).toBe( 'восьмая');
        expect(orderNumeral(9, GENDER.FEMININE)).toBe( 'девятая');
    });

    it('Средний род', () => {
        expect(orderNumeral(1, GENDER.NEUTER)).toBe( 'первое');
        expect(orderNumeral(2, GENDER.NEUTER)).toBe( 'второе');
        expect(orderNumeral(3, GENDER.NEUTER)).toBe( 'третье');
        expect(orderNumeral(4, GENDER.NEUTER)).toBe( 'четвертое');
        expect(orderNumeral(5, GENDER.NEUTER)).toBe( 'пятое');
        expect(orderNumeral(6, GENDER.NEUTER)).toBe( 'шестое');
        expect(orderNumeral(7, GENDER.NEUTER)).toBe( 'седьмое');
        expect(orderNumeral(8, GENDER.NEUTER)).toBe( 'восьмое');
        expect(orderNumeral(9, GENDER.NEUTER)).toBe( 'девятое');
    });

});

