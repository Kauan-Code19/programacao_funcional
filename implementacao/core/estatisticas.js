export const calcularEstatisticas = (lista) => {
    if (!lista || lista.length === 0) return null;
    
    return {
      media: lista.reduce((a, b) => a + b, 0) / lista.length,
      maximo: Math.max(...lista),
      minimo: Math.min(...lista),
      soma: lista.reduce((a, b) => a + b, 0)
    };
  };
  
  export const filtrarPares = (lista) => lista.filter(x => x % 2 === 0);