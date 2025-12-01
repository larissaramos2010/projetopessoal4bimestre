// CRIE UMA LÓGICA ABAIXO
let filme1 = {
    titulo: "Tropa de Elite", 
    genero: "Ação", 
    ano: 2007, 
    avaliacao: 8
}
let filme2 = {
    titulo: "Cidade de Deus", 
    genero: "Ação e Drama", 
    ano: 2002, 
    avaliacao: 9
}
let filme3 = {
    titulo: "Que horas ela volta?", 
    genero: "Drama social", 
    ano: 2015, 
    avaliacao: 10
}
let filme4 = {
    titulo: "Central do Brasil", 
    genero: "Drama", 
    ano: 1998, 
    avaliacao: 9
}
let filme5 = {
    titulo: "Minha Mãe é uma Peça", 
    genero: "Comédia", 
    ano: 2013, 
    avaliacao: 8
}
let filme6 = {
    titulo: "O Auto da Compadecida", 
    genero: "Comédia", 
    ano: 2000, 
    avaliacao: 10
}
let filme7 = {
    titulo: "Carandiru", 
    genero: "Crime e Drama",
    ano: 2003, 
    avaliacao: 9
}
let filme8 = {
    titulo: "Ainda Estou Aqui", 
    genero: "DramaBiografico", 
    ano: 2024, 
    avaliacao: 9
}
let filme9 = {
    titulo: "Vitória",
    genero:"Drama",
    ano: 2025, 
    avaliacao: 9
}
let filme10 = {
    titulo: "Homem com H",
    genero: "Drama", 
    ano: 2024, 
    avaliacao: 8
}

const arquivoCinematografico = [
    filme1, filme2, filme3, filme4, filme5,
    filme6, filme7, filme8, filme9, filme10
];
}

// Transformar catálogo em array para facilitar operações
const listaFilmes = arquivoCinematografico

// Criar array de notas
let conjuntoNotas = [];
for (let i = 0; i < arquivoCinematografico.length; i++) {
    conjuntoNotas[i] = arquivoCinematografico[i].avaliacao;
}

// Identificar maior nota
let notaMaxima = conjuntoNotas[0];

for (let i = 1; i < conjuntoNotas.length; i++) {
    if (conjuntoNotas[i] > notaMaxima) {
        notaMaxima = conjuntoNotas[i];
    }
}

let indiceMelhor = -1;

for (let i = 0; i < conjuntoNotas.length; i++) {
    if (conjuntoNotas[i] === notaMaxima) {
        indiceMelhor = i + 1;
        break; 
    }
}
// Média geral
let somaValores = conjuntoNotas.reduce((acc, atual) => acc + atual, 0)
let mediaFinal = somaValores / conjuntoNotas.length

// --- NOVAS FUNCIONALIDADES ---

// Filme mais antigo
let filmeMaisAntigo = listaFilmes.reduce((a, b) => a.ano < b.ano ? a : b)

// Filme mais recente
let filmeMaisRecente = listaFilmes.reduce((a, b) => a.ano > b.ano ? a : b)

// Agrupamento por gênero
let generos = {}
listaFilmes.forEach(filme => {
    if (!generos[filme.genero]) {
        generos[filme.genero] = 1
    } else {
        generos[filme.genero]++
    }
})

// Filmes nota 9 ou 10
const filmesTop = filmesTop.map(f => f.titulo); // Assumindo que filmesTop foi criado anteriormente
let filmesTopString = "";
for (const filme of filmesTop) {
    if (filmesTopString.length > 0) {
        filmesTopString += ", ";
    }
    filmesTopString += filme.titulo;
}
// ${filmesTopString}

// Ordenado por avaliação:
let ordenadoPorNotaString = "";
for (const filme of ordenadoPorNota) {
    if (ordenadoPorNotaString.length > 0) {
        ordenadoPorNotaString += ", ";
    }
    ordenadoPorNotaString += `(${filme.titulo} + ${filme.avaliacao})`;
}
// ${ordenadoPorNotaString}

// Ordenado por ano:
let ordenadoPorAnoString = "";
for (const filme of ordenadoPorAno) {
    if (ordenadoPorAnoString.length > 0) {
        ordenadoPorAnoString += ", ";
    }
    ordenadoPorAnoString += `(${filme.titulo} + ${filme.ano})`;
}
// ${ordenadoPorAnoString}




// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }
