const capacidadeMaxima = 20;
const tamanhoPopulacao = 10;
let geracoes = 100;

const itens = [
  { nome: "Ativo 1", peso: 6, valor: 8 },
  { nome: "Ativo 2", peso: 10, valor: 15 },
  { nome: "Ativo 3", peso: 3, valor: 5 },
  { nome: "Ativo 4", peso: 1, valor: 3 },
  { nome: "Ativo 5", peso: 7, valor: 12 },
];

const calcularFitness = (individuos) => {
  let valorTotal = 0;
  let pesoTotal = 0;

  individuos.forEach((gene, i) => {
    if (gene === 1) {
      valorTotal += individuos[i].valor;
      pesoTotal += individuos[i].peso;
    }
  });

  return pesoTotal > capacidadeMaxima ? 0 : valorTotal;
};

const selecao = (populacao) => {
  const individuosAvaliados = populacao.map((individuo) => ({
    individuo,
    fitness: calcularFitness(individuo),
  }));

  individuosAvaliados.sort((a, b) => b.fitness - a.fitness);

  return individuosAvaliados.slice(0, tamanhoPopulacao);
};

const cruzamento = (pai_1, pai_2) => {
  const pontoCorte = Math.floor(Math.random() * pai_1.length);
  const filho = [...pai_1.slice(0, pontoCorte), ...pai_2.slice(pontoCorte)];
  return filho;
};

const executarAlgoritmoGenetico = () => {
  let populacao = Array.from({ length: tamanhoPopulacao }, () =>
    Array.from({ length: itens.length }, () => (Math.random() < 0.5 ? 0 : 1))
  );

  let melhorIndividuo;

  while (geracoes > 0) {
    const novaPopulacao = [];

    const melhoresIndividuos = selecao(populacao);
    melhorIndividuo = melhoresIndividuos[0].individuo;

    for (let i = 0; i < tamanhoPopulacao; i++) {
        const pai_1 =
        melhoresIndividuos[
            Math.floor(Math.random() * melhoresIndividuos.length)
        ].individuo;

        const pai_2 =
        melhoresIndividuos[
            Math.floor(Math.random() * melhoresIndividuos.length)
        ].individuo;

        let filho = cruzamento(pai_1, pai_2);

        novaPopulacao.push(filho);
    }
    
    populacao = novaPopulacao;
    geracoes--;
  }

  return melhorIndividuo;
};

const melhorSolucao = executarAlgoritmoGenetico();

console.log("Melhor solução encontrada: ", melhorSolucao);
