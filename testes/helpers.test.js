import { strict as assert } from 'assert';
import { quadradosPositivos } from '../implementacao/utils/helpers.js';

describe('Helpers', () => {
  it('deve retornar quadrados de números positivos', () => {
    assert.deepStrictEqual(
      quadradosPositivos([-3, -2, 0, 1, 2, 3]),
      [1, 4, 9]
    );
  });

  it('deve retornar array vazio para lista sem positivos', () => {
    assert.deepStrictEqual(
      quadradosPositivos([-5, -4, 0]),
      []
    );
  });
});