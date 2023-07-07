const tamanhoPopulacao = 10;

const itens = [
  { nome: "Ativo 1", peso: 6,  valor: 8 },
  { nome: "Ativo 2", peso: 10, valor: 15 },
  { nome: "Ativo 3", peso: 3,  valor: 5 },
  { nome: "Ativo 4", peso: 1,  valor: 3 },
  { nome: "Ativo 5", peso: 7,  valor: 12 },
];

const executarAlgoritmoGenetico = () => {
    let populacao = Array.from({ length: tamanhoPopulacao }, () =>
      Array.from({ length: itens.length }, () => (Math.random() < 0.5 ? 0 : 1))
    );

    console.log(populacao);
};

executarAlgoritmoGenetico();