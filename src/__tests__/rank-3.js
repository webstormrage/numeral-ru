const { GENDER } = require('../constants');
const { orderNumeral } = require('../rank-3');

const mockRank = (n, gender) => `${n} ${gender}`;

describe('Порядковое числительное сотни', () => {

    it('Мужской род, кратные 100', () => {
        expect(orderNumeral(100, GENDER.MASCULINE)).toBe('сотый');
        expect(orderNumeral(200, GENDER.MASCULINE)).toBe('двухсотый');
        expect(orderNumeral(300, GENDER.MASCULINE)).toBe('трехсотый');
        expect(orderNumeral(400, GENDER.MASCULINE)).toBe('четырехсотый');
        expect(orderNumeral(500, GENDER.MASCULINE)).toBe('пятисотый');
        expect(orderNumeral(600, GENDER.MASCULINE)).toBe('шестисотый');
        expect(orderNumeral(700, GENDER.MASCULINE)).toBe('семисотый');
        expect(orderNumeral(800, GENDER.MASCULINE)).toBe('восьмисотый');
        expect(orderNumeral(900, GENDER.MASCULINE)).toBe('девятисотый');
    });

    it('Женский род, кратные 100', () => {
        expect(orderNumeral(100, GENDER.FEMININE)).toBe('сотая');
        expect(orderNumeral(200, GENDER.FEMININE)).toBe('двухсотая');
        expect(orderNumeral(300, GENDER.FEMININE)).toBe('трехсотая');
        expect(orderNumeral(400, GENDER.FEMININE)).toBe('четырехсотая');
        expect(orderNumeral(500, GENDER.FEMININE)).toBe('пятисотая');
        expect(orderNumeral(600, GENDER.FEMININE)).toBe('шестисотая');
        expect(orderNumeral(700, GENDER.FEMININE)).toBe('семисотая');
        expect(orderNumeral(800, GENDER.FEMININE)).toBe('восьмисотая');
        expect(orderNumeral(900, GENDER.FEMININE)).toBe('девятисотая');
    });

    it('Средний род, кратные 100', () => {
        expect(orderNumeral(100, GENDER.NEUTER)).toBe('сотое');
        expect(orderNumeral(200, GENDER.NEUTER)).toBe('двухсотое');
        expect(orderNumeral(300, GENDER.NEUTER)).toBe('трехсотое');
        expect(orderNumeral(400, GENDER.NEUTER)).toBe('четырехсотое');
        expect(orderNumeral(500, GENDER.NEUTER)).toBe('пятисотое');
        expect(orderNumeral(600, GENDER.NEUTER)).toBe('шестисотое');
        expect(orderNumeral(700, GENDER.NEUTER)).toBe('семисотое');
        expect(orderNumeral(800, GENDER.NEUTER)).toBe('восьмисотое');
        expect(orderNumeral(900, GENDER.NEUTER)).toBe('девятисотое');
    });

    it('Некратные 100', () => {
        expect(orderNumeral(101, GENDER.NEUTER, mockRank)).toBe('сто 1 NEUTER');
        expect(orderNumeral(201, GENDER.NEUTER, mockRank)).toBe('двести 1 NEUTER');
        expect(orderNumeral(301, GENDER.NEUTER, mockRank)).toBe('триста 1 NEUTER');
        expect(orderNumeral(401, GENDER.NEUTER, mockRank)).toBe('четыреста 1 NEUTER');
        expect(orderNumeral(501, GENDER.NEUTER, mockRank)).toBe('пятьсот 1 NEUTER');
        expect(orderNumeral(601, GENDER.NEUTER, mockRank)).toBe('шестьсот 1 NEUTER');
        expect(orderNumeral(701, GENDER.NEUTER, mockRank)).toBe('семьсот 1 NEUTER');
        expect(orderNumeral(801, GENDER.NEUTER, mockRank)).toBe('восемьсот 1 NEUTER');
        expect(orderNumeral(901, GENDER.NEUTER, mockRank)).toBe('девятьсот 1 NEUTER');
    });

});