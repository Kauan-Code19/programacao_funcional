## 👥 Divisão de Responsabilidades

Cada integrante contribuiu com as seguintes partes do projeto:

| Integrante                          | Responsabilidades                                      |
|-------------------------------------|-------------------------------------------------------|
| **Maria Fiama Sales Florencio**     | Desenvolvimento e execução dos testes unitários       |
| **Karla Briseno Do Amaral**         | Criação e estruturação do README.md                   |
| **Antônio Kauan Pereira Do Carmo**  | Desenvolvimento do core da aplicação e revisão do README |
| **Elias Roger de Sousa**            | Implementação do core e arquivo principal (main)      |
| **Nathan Monteiro Silva**           | Desenvolvimento das utils e helpers da aplicação      |
| **Carlos Eduardo Soares de Lima**   | Implementação das utils e helpers da aplicação        |

### Fluxo de Trabalho
1. **Core Team** (Antônio e Elias) estruturou a base funcional  
2. **Utils Team** (Nathan e Carlos) desenvolveu as funções auxiliares  
3. **QA** (Maria) validou toda a aplicação com testes  
4. **Docs** (Karla e Antônio) documentou o processo  
5. **Integração** final foi feita em conjunto por todos os membros

### Atendimento aos Requisitos de Programação Funcional

1. **Função Lambda**
   - Onde: `filtrarPares` em `estatisticas.js`
   - Característica: Arrow function que filtra números pares

2. **List Comprehension (equivalente)**
   - Onde: `quadradosPositivos` em `helpers.js`
   - Característica: Combinação de filter+map simulando list comprehension

3. **Closure**
   - Onde: `criarMultiplicador` em `operacoes.js`
   - Característica: Função que retorna outra função com acesso ao escopo externo

4. **Função de Alta Ordem**
   - Onde: `aplicarOperacao` e `comporFuncoes` em `operacoes.js`
   - Característica: Funções que recebem/retornam outras funções


## Requisitos Não-Funcionais Atendidos

1. **Imutabilidade**
   - Implementado em: Todo o código base
   - Evidências: 
     - Uso exclusivo de `const` para declarações
     - Funções sempre retornam novos valores (nunca modificam inputs)

2. **Legibilidade**  
   - Implementado em: Todos os módulos  
   - Técnicas aplicadas:  
     - Nomes descritivos (ex: `calcularEstatisticas`)  
     - Funções com responsabilidade única  
     - Formatação consistente

3. **Testabilidade**  
   - Implementado em: Pasta `test/`  
   - Cobertura:  
     - 100% das funções principais  
     - Casos básicos e extremos  

4. **Modularidade**  
   - Implementado em: Estrutura de pastas  
   - Organização:  
     - `src/core/` para lógica principal  
     - `src/utils/` para helpers  
     - `test/` para testes correspondentes  

5. **Performance**  
   - Implementado em: Operações em listas  
   - Garantias:  
     - Complexidade O(n) previsível  
     - Uso eficiente de map/filter/reduce  


## Assistência do DeepSeek Chat

### Como o DeepSeek Ajudou
- **Organização do Projeto**:
  - Definição da estrutura de pastas (`implementacao/`, `core/`, `utils/`, `testes/`)

- **Documentação**:
  - Estruturação deste README
  - Formatação da documentação

**Importante**: Todo o código foi desenvolvido ativamente pela equipe, utilizando o DeepSeek como ferramenta de apoio técnico.


## Como Executar  
```bash
npm install
npm start
npm test
```