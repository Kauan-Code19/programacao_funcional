import { calcularEstatisticas, filtrarPares } from './core/estatisticas.js';
import { criarMultiplicador, comporFuncoes } from './core/operacoes.js';
import { quadradosPositivos } from './utils/helpers.js';

const main = () => {
  const numeros = [10, 20, 30, 40, 50];
  
  console.log("Estatísticas:", calcularEstatisticas(numeros));
  console.log("Pares:", filtrarPares(numeros));
  
  const dobrar = criarMultiplicador(2);
  console.log("Dobro de 5:", dobrar(5));
  
  console.log("Quadrados positivos:", quadradosPositivos(numeros));

  const incrementarEDobrar = comporFuncoes(dobrar, x => x + 1);
  console.log("Incrementar e dobrar 3:", incrementarEDobrar(3));
};

main();