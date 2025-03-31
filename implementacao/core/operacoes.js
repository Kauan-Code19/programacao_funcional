export const aplicarOperacao = (func, lista) => lista.map(func);
export const criarMultiplicador = (n) => (x) => x * n;
export const comporFuncoes = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);