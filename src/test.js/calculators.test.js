import calculators from "../Logic/calculators";

describe('calculators', () => {
  test('it reset the caculator', () => {
    const obj = {
      total: '8',
      next: '2',
      operation: '+',
    };
    const result = calculators(obj, 'AC');
    expect(result).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('If there is an operation, update next', () => {
    const obj = {
      total: '8',
      next: '2',
      operation: '+',
    };
    const result = calculators(obj, '-');
    expect(result).toStrictEqual({
      total: '10',
      next: null,
      operation: '-',
    });
  });

  test('f there is no operation, update next and clear the value', () => {
    const obj = {
      total: '8',
      next: '2',
      operation: null,
    };
    const result = calculators(obj, '2');
    expect(result).toStrictEqual({
      total: null,
      next: '22',
    });
  });
  test('If button equal to dot (.)', () => {
    const obj = {
      total: '8',
      next: '2',
      operation: null,
    };
    const result = calculators(obj, '.');
    expect(result).toStrictEqual({
      total: '8',
      next: `${2}.`,
      operation: null,
    });
  });

  test('When click on equal', () => {
    const obj = {
      total: '8',
      next: '2',
      operation: '+',
    };
    const result = calculators(obj, '=');
    expect(result).toStrictEqual({
      total: '10',
      next: null,
      operation: null,
    });
  });

  test('When click on plus  +', () => {
    const obj = {
      total: '8',
      next: '2',
      operation: '+',
    };
    const result = calculators(obj, '+');
    expect(result).toStrictEqual({
      total: '10',
      next: null,
      operation: '+',
    });
  });
});