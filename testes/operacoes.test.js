import { strict as assert } from 'assert';
import { 
  aplicarOperacao, 
  criarMultiplicador, 
  comporFuncoes 
} from '../implementacao/core/operacoes.js';

describe('Operações', () => {
  it('deve aplicar operação a cada elemento', () => {
    const resultado = aplicarOperacao(x => x * 2, [1, 2, 3]);
    assert.deepStrictEqual(resultado, [2, 4, 6]);
  });

  it('closure deve multiplicar corretamente', () => {
    const triplicar = criarMultiplicador(3);
    assert.strictEqual(triplicar(4), 12);
  });

  it('deve compor funções corretamente', () => {
    const fn = comporFuncoes(x => x + 1, x => x * 2);
    assert.strictEqual(fn(3), 7);
  });
});

describe('Operações - Casos Especiais', () => {
    it('deve lidar com lista vazia em aplicarOperacao', () => {
      assert.deepStrictEqual(
        aplicarOperacao(x => x * 2, []),
        []
      );
    });
  
    it('deve compor múltiplas funções', () => {
      const fn = comporFuncoes(
        x => x + 1,
        x => x * 2,
        x => x - 3
      );
      assert.strictEqual(fn(5), 5);
    });
});