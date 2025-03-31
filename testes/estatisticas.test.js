import { calcularEstatisticas, filtrarPares } from '../implementacao/core/estatisticas.js';
import assert from 'assert';

describe('Estatísticas', () => {
  it('deve calcular estatísticas corretamente', () => {
    const resultado = calcularEstatisticas([1, 2, 3, 4, 5]);
    assert.strictEqual(resultado.media, 3);
    assert.strictEqual(resultado.maximo, 5);
    assert.strictEqual(resultado.minimo, 1);
  });

  it('deve filtrar pares corretamente', () => {
    assert.deepStrictEqual(filtrarPares([1, 2, 3, 4]), [2, 4]);
  });
});

describe('Estatísticas - Casos Especiais', () => {
    it('deve retornar null para lista vazia', () => {
      assert.strictEqual(calcularEstatisticas([]), null);
    });
  
    it('deve lidar com números negativos', () => {
      const resultado = calcularEstatisticas([-5, 0, 5]);
      assert.strictEqual(resultado.media, 0);
      assert.strictEqual(resultado.maximo, 5);
      assert.strictEqual(resultado.minimo, -5);
    });
});