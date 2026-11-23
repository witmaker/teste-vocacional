const questions = [
  {
    q: "Em um jogo, o que te interessa mais?",
    a: [
      { text: "Conhecer a história dos personagens e se aprofundar na lore do jogo.", area: 1 },
      { text: "Montar estratégias e descobrir padrões que ajudem a concluir as missões.", area: 2 },
      { text: "Explorar os cenários, encontrar Easter Eggs e interagir com os objetos/NPCs.", area: 0 }
    ]
  },
  {
    q: "Nos trabalhos em grupo, você prefere ficar com qual parte?",
    a: [
      { text: "Confecção de maquete, acessórios, decoração, artefatos e materiais de exposição.", area: 0 },
      { text: "Apresentação do trabalho, criação de slides, gravação e edição dos vídeos.", area: 1 },
      { text: "Organização das tarefas, redação ou revisão da parte escrita do trabalho.", area: 2 }
    ]
  },
  {
    q: "Qual dessas atividades tem mais a ver com você?",
    a: [
      { text: "Ver vídeos ou podcasts sobre invenções tecnológicas, avanços da ciência e o futuro da humanidade.", area: 2 },
      { text: "Caminhar por feiras de artesanato, visitar exposições de arte ou conhecer museus.", area: 0 },
      { text: "Assistir a um filme ou série e depois procurar no YouTube vídeos com detalhes e explicações do final.", area: 1 }
    ]
  },
  {
    q: "Em relação aos afazeres domésticos, você:",
    a: [
      { text: "Começa empenhado(a) mas logo se distrai com coisas que guardou e nem lembrava", area: 0 },
      { text: "Só consegue limpar a casa se for ouvindo música/podcast ou com algo passando na TV.", area: 1 },
      { text: "Monta até um checklist com as tarefas em ordem de prioridade e separa quem faz o quê.", area: 2 }
    ]
  },
  {
    q: "Que tipo de pessoa você é assistindo a um filme?",
    a: [
      { text: "A que percebe todas as pistas e cria teorias mirabolantes.", area: 2 },
      { text: "A que presta atenção em cada detalhe dos ambientes.", area: 0 },
      { text: "A que gosta de comentar tudo o que acontece e fala mais do que assiste.", area: 1 }
    ]
  },
  {
    q: "Quando uma banda ou cantor de que você gosta lança uma música nova, você se anima mais para ver...",
    a: [
      { text: "Os bastidores de como foi a gravação.", area: 1 },
      { text: "A letra e a história por trás da música.", area: 2 },
      { text: "O videoclipe, incluindo os cenários, a decoração e a estética.", area: 0 }
    ]
  },
  {
    q: "Que tipo de rotina profissional seria melhor para você?",
    a: [
      { text: "Mais calma: trabalhar sentado(a) em um escritório, sem precisar ter muito contato com clientes.", area: 2 },
      { text: "Mais dinâmica: trabalhar sozinho(a), atendendo ao público e fazendo coisas diferentes a cada semana.", area: 0 },
      { text: "Mais criativa: trabalhar conhecendo pessoas e lugares novos, sem ter um local fixo.", area: 1 }
    ]
  },
  {
    q: "Você foi a um parque que oferece diversas oficinas e atrações. Você entraria na fila para...",
    a: [
      { text: "Fazer a oficina de cerâmica fria.", area: 0 },
      { text: "Tirar fotos nos cenários do evento.", area: 1 },
      { text: "Participar do desafio de Escape Room.", area: 2 }
    ]
  },
  {
    q: "Você recebeu a missão de melhorar os espaços da escola. Qual seria sua primeira iniciativa?",
    a: [
      { text: "Implantar mais tecnologias, como computadores e sistemas de segurança.", area: 2 },
      { text: "Disponibilizar mais equipamentos para gravação de áudio e vídeo na sala de música.", area: 1 },
      { text: "Oferecer mais laboratórios e espaços para estimular a criatividade.", area: 0 }
    ]
  },
  {
    q: "Pensando no seu futuro, qual dessas conquistas deixaria você mais orgulhoso(a)?",
    a: [
      { text: "Ver uma ideia sua se tornar conhecida, alcançar pessoas e conquistar um público.", area: 1 },
      { text: "Ver algo que você imaginou ganhar forma e ser utilizado por outras pessoas.", area: 0 },
      { text: "Criar uma solução que ajude as pessoas a fazerem coisas que antes pareciam difíceis.", area: 2 }
    ]
  },
  {
    q: "Qual hobby você escolheria para ter no tempo livre?",
    a: [
      { text: "Sair para tirar fotos de pontos turísticos da cidade.", area: 1 },
      { text: "Pintar, montar ou confeccionar algum acessório/objeto.", area: 0 },
      { text: "Ler livros ou jogar games de estratégia.", area: 2 }
    ]
  },
  {
    q: "Quais características te definem melhor?",
    a: [
      { text: "Observador, analítico, crítico e racional.", area: 2 },
      { text: "Criativo, dinâmico, invencionista e paciente.", area: 0 },
      { text: "Comunicativo, extrovertido, detalhista e desinibido.", area: 1 }
    ]
  }
];

const areas = [
  { name: "Impressão 3D", emoji: "🧊", color: "print", title: "Seu perfil é criativo e construtor!", desc: "Você curte transformar ideias em coisas reais. Gosta de imaginar, projetar, testar e criar soluções que podem ganhar forma — e até virar produtos e negócios.", workshop: "Na oficina, você vai explorar modelagem 3D, fabricação de protótipos e possibilidades de empreender com produtos personalizados.", challenge: "Desafio: criar um produto que possa ser apresentado e comercializado." },
  { name: "Comunicação Digital", emoji: "🎥", color: "digital", title: "Seu perfil é comunicativo e espontâneo!", desc: "Você gosta de transmitir ideias, produzir conteúdos e conectar pessoas. Criatividade, expressão e comunicação são pontos fortes do seu jeito de pensar.", workshop: "Na oficina, você vai experimentar criação de conteúdo com equipamentos inovadores, edição de vídeo e oportunidades de empreender no ambiente digital.", challenge: "Desafio: produzir um conteúdo audiovisual para compartilhar uma reflexão." },
  { name: "Inteligência Artificial", emoji: "🤖", color: "ai", title: "Seu perfil é inovador e explorador!", desc: "Você tem curiosidade por tecnologia e gosta de descobrir novas maneiras de resolver problemas. Ferramentas inteligentes e automação chamam sua atenção.", workshop: "Na oficina, você vai conhecer ferramentas de IA, criar soluções inteligentes e explorar oportunidades profissionais e empreendedoras nessa área.", challenge: "Desafio: desenvolver uma solução com IA para resolver um problema real." }
];

let current = 0;
const answers = Array(questions.length).fill(null);
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

document.getElementById("startBtn").addEventListener("click", () => {
  quiz.classList.remove("hidden");
  result.classList.add("hidden");
  renderQuestion();
  quiz.scrollIntoView({ behavior: "smooth", block: "start" });
});

function renderQuestion() {
  const q = questions[current];
  document.getElementById("counter").textContent =
    `${String(current + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  document.getElementById("questionNumber").textContent =
    `PERGUNTA ${String(current + 1).padStart(2, "0")}`;
  questionText.textContent = q.q;
  document.getElementById("progressBar").style.width =
    `${(current / questions.length) * 100}%`;

  options.innerHTML = "";
  q.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option" + (answers[current] === index ? " selected" : "");

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = ["A", "B", "C"][index];

    const text = document.createElement("span");
    text.textContent = answer.text;

    button.append(letter, text);
    button.setAttribute("aria-pressed", answers[current] === index ? "true" : "false");
    button.addEventListener("click", () => {
      answers[current] = index;
      renderQuestion();
    });
    options.appendChild(button);
  });

  backBtn.disabled = current === 0;
  nextBtn.disabled = answers[current] === null;
  nextBtn.textContent = current === questions.length - 1
    ? "Ver meu resultado ✨"
    : "Próxima →";
}

backBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (answers[current] === null) return;

  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  const scores = [0, 0, 0];

  answers.forEach((answerIndex, questionIndex) => {
    const selectedOption = questions[questionIndex].a[answerIndex];
    scores[selectedOption.area]++;
  });

  const max = Math.max(...scores);
  const winners = scores
    .map((score, index) => score === max ? index : -1)
    .filter(index => index !== -1);

  const scoreHTML = areas.map((area, index) => `
    <div>
      <div class="score-head"><span>${area.emoji} ${area.name}</span><span>${scores[index]} / ${questions.length}</span></div>
      <div class="score-track"><div class="score-fill ${area.color}" style="width:${(scores[index] / questions.length) * 100}%"></div></div>
    </div>
  `).join("");

  let mainHTML = "";
  if (winners.length === 1) {
    const area = areas[winners[0]];
    mainHTML = `
      <div class="result-emoji">${area.emoji}</div>
      <div class="result-kicker">Sua área de maior afinidade</div>
      <h2>${area.name}</h2>
      <h3>${area.title}</h3>
      <p>${area.desc}</p>
      <div class="result-note"><strong>Na oficina:</strong> ${area.workshop}<br><br><strong>${area.challenge}</strong></div>
    `;
  } else {
    const names = winners.map(i => areas[i].name);
    mainHTML = `
      <div class="result-emoji">✨</div>
      <div class="result-kicker">Seu perfil é versátil!</div>
      <h2>Você combina com mais de uma área</h2>
      <p>Você teve a mesma pontuação em ${names.join(" e ")}. Isso mostra que seus interesses passeiam por diferentes campos da tecnologia. Escolha a oficina cuja experiência prática mais desperta sua curiosidade.</p>
    `;
  }

  result.innerHTML = `
    ${mainHTML}
    <div class="score-list">${scoreHTML}</div>
    <p class="result-note">Este teste é uma ferramenta de exploração de interesses, não uma avaliação psicológica nem uma definição da sua profissão. Você pode descobrir novos interesses experimentando!</p>
    <button class="primary" id="restartBtn">Refazer o teste ↻</button>
  `;

  result.classList.remove("hidden");
  quiz.classList.add("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "start" });

  document.getElementById("restartBtn").addEventListener("click", () => {
    answers.fill(null);
    current = 0;
    result.classList.add("hidden");
    quiz.classList.remove("hidden");
    renderQuestion();
    quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
