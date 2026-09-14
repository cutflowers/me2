const breeds = [
  {name:"Золотистый ретривер", icon:"🦮", type:"Дружелюбный", text:"Добрый, умный и очень общительный пёс. Обожает людей и игры."},
  {name:"Хаски", icon:"🐺", type:"Энергичный", text:"Активная порода с невероятными глазами и характером настоящего исследователя."},
  {name:"Корги", icon:"🐕", type:"Весёлый", text:"Короткие лапки, большие уши и характер, который легко запоминается."},
  {name:"Шиба-ину", icon:"🐕", type:"Независимый", text:"Самостоятельный и харизматичный японский пёс с фирменной улыбкой."},
  {name:"Немецкая овчарка", icon:"🐕‍🦺", type:"Умный", text:"Преданная и обучаемая порода, известная своей смелостью и интеллектом."},
  {name:"Пудель", icon:"🐩", type:"Сообразительный", text:"Очень умный, активный и элегантный компаньон."},
];

const facts = [
  "Собаки могут запоминать множество слов и связывать их с предметами и действиями.",
  "Нос собаки обладает огромным количеством обонятельных рецепторов — поэтому мир запахов для неё намного детальнее нашего.",
  "Виляние хвостом не всегда означает только радость: положение и скорость движения тоже имеют значение.",
  "Собаки умеют считывать направление человеческого взгляда и часто ориентируются на него.",
  "Щенки много спят, потому что сон важен для роста и развития мозга."
];

const grid = document.querySelector("#breedGrid");
const search = document.querySelector("#search");

function renderBreeds(query = "") {
  const filtered = breeds.filter(b => b.name.toLowerCase().includes(query.toLowerCase()));
  grid.innerHTML = filtered.length ? filtered.map(b => `
    <article class="card">
      <div class="card-icon">${b.icon}</div>
      <span class="tag">${b.type}</span>
      <h3>${b.name}</h3>
      <p>${b.text}</p>
    </article>
  `).join("") : `<p>🐾 Ничего не нашли. Попробуй другое название.</p>`;
}
renderBreeds();
search.addEventListener("input", e => renderBreeds(e.target.value));

document.querySelector("#factBtn").addEventListener("click", () => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  const box = document.querySelector("#factBox");
  box.textContent = "🐾 " + fact;
  box.classList.remove("hidden");
});

document.querySelector("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.querySelector("#themeBtn").textContent =
    document.body.classList.contains("dark") ? "🌙" : "☀️";
});
