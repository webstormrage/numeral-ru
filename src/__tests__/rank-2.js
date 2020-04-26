const { GENDER } = require('../constants');
const { orderNumeral } = require('../rank-2');

const mockRank = (n, gender) => `${n} ${gender}`;

describe('Порядковое числительное десятки', () => {

    it('Мужской род, кратные 10', () => {
        expect(orderNumeral(20, GENDER.MASCULINE)).toBe('двадцатый');
        expect(orderNumeral(30, GENDER.MASCULINE)).toBe('тридцатый');
        expect(orderNumeral(40, GENDER.MASCULINE)).toBe('сороковой');
        expect(orderNumeral(50, GENDER.MASCULINE)).toBe('пятидесятый');
        expect(orderNumeral(60, GENDER.MASCULINE)).toBe('шестидесятый');
        expect(orderNumeral(70, GENDER.MASCULINE)).toBe('семидесятый');
        expect(orderNumeral(80, GENDER.MASCULINE)).toBe('восьмидесятый');
        expect(orderNumeral(90, GENDER.MASCULINE)).toBe('девяностый');
    });

    it('Женский род, кратные 10', () => {
        expect(orderNumeral(20, GENDER.FEMININE)).toBe('двадцатая');
        expect(orderNumeral(30, GENDER.FEMININE)).toBe('тридцатая');
        expect(orderNumeral(40, GENDER.FEMININE)).toBe('сороковая');
        expect(orderNumeral(50, GENDER.FEMININE)).toBe('пятидесятая');
        expect(orderNumeral(60, GENDER.FEMININE)).toBe('шестидесятая');
        expect(orderNumeral(70, GENDER.FEMININE)).toBe('семидесятая');
        expect(orderNumeral(80, GENDER.FEMININE)).toBe('восьмидесятая');
        expect(orderNumeral(90, GENDER.FEMININE)).toBe('девяностая');
    });

    it('Средний род, кратные 10', () => {
        expect(orderNumeral(20, GENDER.NEUTER)).toBe('двадцатое');
        expect(orderNumeral(30, GENDER.NEUTER)).toBe('тридцатое');
        expect(orderNumeral(40, GENDER.NEUTER)).toBe('сороковое');
        expect(orderNumeral(50, GENDER.NEUTER)).toBe('пятидесятое');
        expect(orderNumeral(60, GENDER.NEUTER)).toBe('шестидесятое');
        expect(orderNumeral(70, GENDER.NEUTER)).toBe('семидесятое');
        expect(orderNumeral(80, GENDER.NEUTER)).toBe('восьмидесятое');
        expect(orderNumeral(90, GENDER.NEUTER)).toBe('девяностое');
    });

    it('Некратные 10', () => {
        expect(orderNumeral(21, GENDER.NEUTER, mockRank)).toBe('двадцать 1 NEUTER');
        expect(orderNumeral(31, GENDER.NEUTER, mockRank)).toBe('тридцать 1 NEUTER');
        expect(orderNumeral(41, GENDER.NEUTER, mockRank)).toBe('сорок 1 NEUTER');
        expect(orderNumeral(51, GENDER.NEUTER, mockRank)).toBe('пятьдесят 1 NEUTER');
        expect(orderNumeral(61, GENDER.NEUTER, mockRank)).toBe('шестьдесят 1 NEUTER');
        expect(orderNumeral(71, GENDER.NEUTER, mockRank)).toBe('семьдесят 1 NEUTER');
        expect(orderNumeral(81, GENDER.NEUTER, mockRank)).toBe('восемьдесят 1 NEUTER');
        expect(orderNumeral(91, GENDER.NEUTER, mockRank)).toBe('девяносто 1 NEUTER');
    });

    it('Меньшие 20', () => {
        expect(orderNumeral(19, GENDER.NEUTER, mockRank)).toBe('19 NEUTER');
        expect(orderNumeral(10, GENDER.NEUTER, mockRank)).toBe('10 NEUTER');
    });

});