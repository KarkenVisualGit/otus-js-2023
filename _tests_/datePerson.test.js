import { calculateAgeDifference, getOlder } from '../src/datePersons';

describe('calculateAgeDifference', () => {
  it('calculates the correct age difference', () => {
    const date1 = new Date('01.01.2000');
    const date2 = new Date('01.01.1990');

    const ageDifference = calculateAgeDifference(date1, date2);

    expect(ageDifference).toBeLessThan(0);
  });
});

describe('getOlder', () => {
  it('returns the correct result for the older person', () => {
    const person1 = {
      date: new Date('01.01.2000'),
      name: 'First person'
    };
    const person2 = {
      date: new Date('01.01.1990'),
      name: 'Second person'
    };

    const result = getOlder(person1, person2);

    expect(result).toBe('First person is younger');
  });
});
