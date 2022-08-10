const titulos = {
  filmes: [
    "O Senhor Dos Anéis: A Sociedade do Anel",
    "O Senhor Dos Anéis: As Duas Torres",
    "O Senhor Dos Anéis: O Retorno do Rei",

    "O Hobbit: Uma Jornada Inesperada",
    "O Hobbit: A Desolação de Smaug",
    "O Hobbit: A Batalha dos Cinco Exércitos",

    "Star Wars Ep. 1: A Ameaça Fantasma",
    "Star Wars Ep. 2: Ataque dos Clones",
    "Star Wars Ep. 3: A Vingança dos Sith",
    "Star Wars Ep. 4: Uma Nova Esperança",
    "Star Wars Ep. 5: o Império Contra-Ataca",
    "Star Wars Ep. 6: O Retorno de Jedi",

    "John Wick – De Volta ao Jogo",
    "John Wick – Um Novo Dia Para Matar",
    "John Wick – Parabellum",

    "Vingadores: A Era de Ultron",
    "Vingadores: Guerra Infinita",
    "Vingadores: Ultimato",

    "Harry Potter e a Pedra Filosofal",
    "Harry Potter e a Câmara Secreta",
    "Harry Potter e o Prisioneiro de Askaban",
    "Harry Potter e o Cálice de Fogo",
    "Harry Potter e a Ordem da Fênix",
    "Harry Potter e o Enigma do Príncipe",
    "Harry Potter e as Relíquias da Morte",

    "De Pernas Pro Ar",
    "Professor Aloprado",
    "Um Sonho de Liberdade",
    "O Poderoso Chefão",
    "Batman: Cavaleiro das Trevas",
    "A Lista de Shindler",
    "11 Homens e um Segredo",
    "Clube da Luta",
    "Forrest Gump: O Contador de Histórias",

    "Era Uma Vez em Hollywood",
    "Os Oito Odiados",
    "Django Livre",
    "Bastardos Inglórios",
    "Django Livre",
    "Kill Bill",
    "Cães de Aluguel",

    "O Último Samurai",
    "Tropa de Elite",
    "O Silêncio dos Inocentes",
    "Era Uma Vez no Oeste",
    "O Resgate do Soldado Ryan",
    "Os Caçadores da Arca Perdida",
    "À Espera de um Milagre",
    "O Exterminador do Futuro",
    "O Rei Leão",
    "O Curioso Caso de Benjamin Button",
    "O Homem Bicentenário",
    "Toy Story 3",
    "Brilho Eterno de uma Mente Sem Lembranças",
    "Como se fosse a primeira vez",
    "Invocação do Mal",
    "Cinquenta Tons de Cinza",
    "Um Estranho no Ninho",
    "De Volta Para o Futuro",
    "A Culpa é das Estrelas",
    "Mad Max: Estrada da Fúria",
    "O Conde de Monte Cristo",
    "Liga da Justiça",
    "Impacto Profundo",
    "No Limite do Amanhã",
    "O Massacre da Serra Elétrica",
    "A Bruxa de Blair",
    "O Sexto Sentido",
    "Arraste-me para o Inferno",
    "Silent Hill",
    "Chucky, O Brinquedo Assassino",
    "À Meia-noite Levarei Sua Alma",
    "O Despertar dos Mortos",
    "O Bebê de Rosemary",
    "Hora do Pesadelo",
    "Um Corpo que Cai",
    "Lawrence da Arábia",

    "Cidade de Deus",
    "O Silêncio dos Inocentes",
    "A Viagem de Chihiro",
    "Dr. Fantástico",
    "A Vida dos Outros",
    "O Túmulo dos Vagalumes",
    "Testemunha de Acusação",

    "Nascido para Matar",
    "Cidadão Kane",
    "Sindicato de Ladrões",
    "A Regra do Jogo",
    "Rastros de Ódio",
    "Cantando na Chuva",
    "Crepúsculo dos Deuses",
    "2001:Uma Odisséia no espaço",
    "Apocalypse Now",
    "E o Vento Levou",
    "Laranja Mecânica",
    "O Mágico de Oz",
    "Blade Runner, o Caçador de Andróides",
    "Um Dia de Louco",
    "Billy Madison, Um Herdeiro Bobalhão",
    "Um Maluco no Golfe",
    "À Prova de Balas",
    "Gigolô por Acidente",
    "Little Nicky – Um Diabo Diferente",
    "Como se Fosse a Primeira Vez",
    "Hotel Transilvânia",
    "Cidade dos Anjos",
    "A Outra Face",
    "O Senhor das Armas",
    "Kick Ass - Quebrando Tudo",
    "Con Air - A Rota da Fuga",
    "O Beijo da Morte",
    "A Lagoa Azul",
    "Ghost – Do Outro Lada da Vida",
    "Dirty Dancing, Ritmo Quente",
    "Te Pego Lá Fora",
    "Um Tira no Jardim de Infância",
    "Meu Primeiro Amor",
    "Esqueceram de Mim",
    "Edward Mãos de Tesoura",
    "Beetlejuice – Os fantasmas se Divertem",
    "Um príncipe em Nova York",
    "Uma Babá Quase Perfeita",
    "Dennis, o Pimentinha",
    "A Princesa Xuxa e os Trapalhões",
    "Os Trapalhões e a Luz Azul",
    "As Patricinhas de Berverly Hills",
    "Vivendo a Vida Adoidado",
    "Loucademia de Polícia",
    "K9 — Um Policial Bom Para Cachorro",
    "ET: O Extra Terrestre",
    "Uma Linda Mulher",
    "Querida, Encolhi as Crianças",
    "A Creche do Papai",
    "Operação Cupido",
    "Velozes e Furiosos",
    "Conan O Bárbaro",
    "Comando para Matar",
    "O Último Grande Herói",
    "Um Herói de Brinquedo",
    "Batman Begins",
    "Volta ao Mundo em 80 Dias",
    "Se Beber não Case",
  ],

  series: [
    "Todo Mundo Odeia o Chris",
    "Eu, A Patroa e As Crianças",
    "Um Maluco no Pedaço",
    "The Big Bang Theory",
    "O Gâmbito da Rainha",
    "Wanda Vision",
    "As Visões da Raven",
    "Bom dia, Verônica",
  ],
};

const tituloFilme = (mod, cat) => {
  let arr = "";
  switch (cat) {
    case "filmes":
      arr = titulos.filmes;

      break;
    case "series":
      arr = titulos.series;
      break;
  }
  if (arr != "") {
    const randomMovie = arr[Math.floor(Math.random() * arr.length)];

    const myArr = randomMovie.split(" ");
    let rng = "";
    while (rng.length < 4) {
      rng = myArr[Math.floor(Math.random() * myArr.length)];
    }

    const joined = myArr.join(" ");

    const newMovie = joined.replace(rng, mod);

    const newObj = {
      categoria: cat,
      original: randomMovie,
      alterado: newMovie,
    };

    return newObj;
  } else {
    return { erro: "Selecione uma categoria!" };
  }
};



export default tituloFilme;
