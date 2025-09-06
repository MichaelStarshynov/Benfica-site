// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "Шахтар";
document.body.appendChild(h1);

// Навигация
const nav = document.createElement('div');
nav.id = 'nav';
document.body.appendChild(nav);

// Контент
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

// Страницы сайта
const pages = {
  Головна: {
    title: 'Ласкаво просимо на фан сайт Шахтар!',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥 Шахтар — це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та єдність. Ми — гірники, ми — сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчами, купуйте квитки та підтримуйте команду!</strong></p>
      <button onclick="showPage('Квітки')" class="shop-btn">🎟️ Замовити квитки</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читати новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://shakhtar.com/-/media/fcsd/players/slider_2024_25_2/1250_800_25_1.jpg" style="max-width:100%; border-radius:10px; margin:20px 0;">
    </div>`
  },
  Новини: { title: `Новини нашого клубу` },
  Клуб: { title: `Клуб - Шахтар Донецьк`,
      text: `
      <h3>Шахтар — це більше ніж клуб. Це емоції, пристрасть та перемоги.</h3>
    <p>Футбольний клуб «Шахтар» заснований у 1936 році. За свою історію він став одним із найтитулованіших клубів України.</p>
    
    <h4>🏆 Досягнення:</h4>
    <ul>
      <li>15x Чемпіон України</li>
      <li>15x Володар Кубка України</li>
      <li>9x Володар Суперкубка України</li>
      <li>1x Володар Кубка УЄФА (2009)</li>
    </ul>

    <h4>🏟️ Домашній стадіон:</h4>
    <p>«Арена Львів» — сучасний стадіон з атмосферою справжнього футболу. Місткість: 34 915 глядачів.</p>
    <img src="https://upload.wikimedia.org/wikipedia/ru/6/68/Lviv_Arena_Lviv_15.JPG" alt="Домашня арена Шахтаря: Арена Львів"style="max-width:300px;">

    <h4>Рекорди:</h4>
    <ul>
      <li>Найкращий бомбардир: Луїс Адріано - 128 голів</li>
      <li>Найкращин ассистент: Даріо Срна - 89 ассистів</li>
      <li>Найбільше матчів за клуб: Даріо Срна - 492 матча</li>
      <li>Наймолодший дебютант — Георгій Судаков (18 років)</li>
      <li>Найдорожчий трансфер — Михайло Мудрик → Челсі за €70 млн</li>
      <li>Найтитулованіший тренер — Мірча Луческу</li>

    </ul>
            `
  },
  Історія: {
    title: `Історія`,
     text: `<hr><br><p>У далекому 1936 році, коли Донецьк ще називався Сталіно, народилася футбольна команда, якій судилося стати символом цілого регіону та обличчям українського футболу. Клуб створили на хвилі популярності робітничого руху, і його перша назва — «Стахановець» — була на честь легендарного шахтаря Олексія Стаханова. Уже тоді команда уособлювала гордість шахтарського краю, і з перших матчів гравці боролися на полі так само вперто, як гірники під землею. Перший гол в історії клубу забив Михайло Пащенко, і цей момент став першим кроком у довгій та насиченій подіями подорожі.</p>
     <p>Після Другої світової війни команда отримала нову назву — «Шахтар». Вона одразу відображала дух Донбасу: простий, сильний і гордий. У радянські часи клуб не завжди був у центрі уваги, але вже тоді заклав свою особливість — боротьбу до кінця, відданість вболівальників і жагу до великих звершень. У 1961 та 1962 роках «Шахтар» двічі поспіль виграв Кубок СРСР, а згодом ще двічі піднімав цей трофей у 1980 та 1983 роках. Це були роки, коли клуб поступово ставав серйозним суперником для грандів радянського футболу, а Донбас уперше відчув гордість за команду, яка могла боротися з будь-ким.</p>
     <p>Після здобуття Україною незалежності розпочалася нова ера. У 1996 році власником клубу став молодий бізнесмен Рінат Ахметов, і саме з цього моменту почалася модернізація. «Шахтар» почав вибудовувати амбіційну інфраструктуру та запрошувати іноземних футболістів, зокрема з Бразилії, які додали грі команди технічності та яскравості. А головним стратегом став румунський тренер Мірча Луческу, який очолив команду у 2004 році. Саме за нього «Шахтар» перетворився на домінанта українського футболу: чемпіонати, Кубки, Суперкубки стали звичними трофеями для донецького клубу.</p>
     <p>2009 рік став золотою сторінкою в історії «Шахтаря». Тоді команда виграла Кубок УЄФА, перемігши у фіналі німецький «Вердер» із рахунком 2:1. Це була перша велика європейська перемога українського клубу за роки незалежності, і цей успіх зробив «Шахтар» відомим у всій Європі. Голи у фіналі забили Луїс Адріано та Жадсон, а Донбас святкував так, ніби виграв чемпіонат світу. Того ж року клуб переїхав на нову домашню арену — «Донбас Арену», сучасний стадіон на понад 50 тисяч місць, який став гордістю не лише Донецька, а й усієї України.</p>
     <p>На початку 2010-х років «Шахтар» продовжував своє домінування в Україні, ставши головним суперником київського «Динамо». Клуб регулярно грав у Лізі чемпіонів, виходив до чвертьфіналів і демонстрував яскравий футбол. Донеччани стали символом професіоналізму та стабільності в українському спорті.</p>
     <p>Та у 2014 році все змінилося. Через війну на Донбасі «Шахтар» був змушений залишити рідний стадіон і переїхати. «Донбас Арена» перетворилася на центр гуманітарної допомоги, а сама команда грала то у Львові, то у Харкові, то у Києві. Втрата дому стала болем не лише для гравців і керівництва, а й для мільйонів фанатів. Але навіть у вигнанні «Шахтар» не зламався. Команда залишалася чемпіоном, виховувала нових українських талантів, грала у Європі та доводила, що справжня сила клубу не лише у стадіонах чи грошах, а в єдності та характері.</p>
     <p>Сезони 2020-х років пройшли в особливо складних умовах. Повномасштабне вторгнення Росії у 2022 році змусило команду ще більше подорожувати та грати матчі за кордоном. Але навіть тоді «Шахтар» став символом незламності України. Гравці виступали у єврокубках, часто тренуючись під звуки сирен, а матчі проводили з думкою про тих, хто залишився вдома під обстрілами. Клуб активно займався благодійністю: організація «Shakhtar Social» допомагає дітям, переселенцям і сім’ям постраждалих від війни.</p>
     <p>Сьогодні «Шахтар» продовжує боротьбу на кількох фронтах: у внутрішніх чемпіонатах, у Європі та на гуманітарному напрямку. Команда зберігає свій стиль: поєднання української молоді та талановитих легіонерів, технічна гра, швидкість і бажання атакувати. Клуб мріє повернутися до рідного Донецька та знову вивести «Донбас Арену» на футбольну карту світу.</p>
     <br><p>Історія «Шахтаря» — це не лише спортивна хроніка. Це історія про стійкість і вірність, про те, як клуб з шахтарського краю перетворився на бренд європейського масштабу. Він пережив війну, втрату дому, зміну поколінь, але завжди залишався символом надії для мільйонів українців. Коли-небудь «Шахтар» знову зіграє свій матч у Донецьку, і тоді цей день стане не лише спортивним святом, а й символом перемоги та відродження.</p>`,
  },
  Команда: { title: `Команда` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Поточне місце в УПЛ: 2 місце.</p><p>Поточне місце в Лізі Конференцій: Груповий раунд</p>`

  },
  Квітки: {
    title: `Купити квітки`,
    text: `Квітки можна купити <a href="https://tickets.shakhtar.com/" target="_blank">тут</a>.<br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVDgvWW2ZjnAG5b-EV_JWxg1cgHvDxt3zKw&s" style="max-width:300px;">`
  },
  Магазин: {
    title: `Купити атрибутику`,
    text: `Атрибутику Шахтаря можна придбати <a href="https://shop.shakhtar.com/ru/" target="_blank">тут</a>.<img src="https://shakhtar.com/uk-ua/fans/fan-clubs/~/media/6e35b8002727401582252a8b1ca0eb5c.ashx" style="max-width:300px;">`
  },
  Телеграм: {
    title: `Телеграм-канал`,
    text: `<p>Підписуйтесь на наш <a href="https://web.telegram.org/a/#-1002610472309" target="_blank">телеграм-канал</a> для більше новин.</p>
    <img src="https://i.postimg.cc/3Nh7fV0N/b67d0faa-4437-4fe4-bb6d-843c00cd8edc.jpg" alt="@FanShakhtarDonetsk">`
  }
};

// Создаем кнопки навигации
for (const key in pages) {
  const btn = document.createElement('button');
  btn.textContent = key;
  btn.className = 'nav-btn';
  btn.onclick = () => showPage(key);
  nav.appendChild(btn);
}



// Показ страницы
function showPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  content.innerHTML = '';

  if (pageKey === 'Команда') {
    showTeam();
    return;
  }
  if (pageKey === 'Новини') {
    showNews();
    return;
  }
  if (pageKey === 'Історія') {
    showLegends();
    return;
  }
  if (pageKey === 'Матчі') {
    showMatches();
    return;
  }

  const titleElem = document.createElement('h2');
  titleElem.textContent = page.title;
  content.appendChild(titleElem);

  if (page.text) {
    const textElem = document.createElement('div');
    textElem.innerHTML = page.text;
    content.appendChild(textElem);
  }
}

// Показ команды с фото
function showTeam() {
  // Заголовок
  const title = document.createElement('h2');
  title.textContent = 'Гравці';
  content.appendChild(title);

  // Игроки
  const playersList = document.createElement('div');
  playersList.className = 'players-list';
  window.team.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';

    card.innerHTML = `
      <img src="${player.photo}" alt="${player.name}" class="player-photo" />
      <p><strong>#${player.number} ${player.name}</strong></p>
      <p>${player.position}</p>
      <p>Вік: ${player.age}</p>
      <p>Національність: ${player.nationality}</p>
    `;

    playersList.appendChild(card);
  });
  content.appendChild(playersList);

  // Тренеры
  const coachesTitle = document.createElement('h3');
  coachesTitle.textContent = 'Тренерський штаб';
  content.appendChild(coachesTitle);

  const coachesList = document.createElement('div');
  coachesList.className = 'coaches-list';
  window.coaches.forEach(coach => {
    const card = document.createElement('div');
    card.className = 'coach-card';

    card.innerHTML = `
      <img src="${coach.photo}" alt="${coach.name}" class="coach-photo" />
      <p><strong>${coach.coach}</strong></p>
      <p>${coach.name}</p>
      <p>Вік: ${coach.age}</p>
      <p>Національність: ${coach.nationality}</p>
    `;

    coachesList.appendChild(card);
  });
  content.appendChild(coachesList);
}
function showMatches() {
  content.innerHTML = '<h2>Матчі</h2>';

  // берем текст из pages
  const info = document.createElement('div');
  info.innerHTML = pages['Матчі'].text;
  content.appendChild(info);

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.matches || window.matches.length === 0) {
    grid.innerHTML = '<p>Матчів поки немає.</p>';
    content.appendChild(grid);
    return;
  }

  window.matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🕒 Час:</strong> ${match.time}</p>
      <p><strong>🎯 Рахунок:</strong> ${match.score}</p>
      <p><strong>📍 Місце:</strong> ${match.place}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}

// Показ истории и легенд клуба (карточки первыми)
function showLegends() {
  content.innerHTML = '';

  // Заголовок
  const title = document.createElement('h2');
  title.textContent = 'Історія клубу';
  content.appendChild(title);

  if (!window.legends || window.legends.length === 0) {
    content.innerHTML += '<p>Легенд поки що немає.</p>';
  } else {
    // Подзаголовок для легенд
    const legendsTitle = document.createElement('h3');
    legendsTitle.textContent = 'Легенди клубу';
    content.appendChild(legendsTitle);

    // Карточки легенд
    const legendsList = document.createElement('div');
    legendsList.className = 'players-list';

    window.legends.forEach(legend => {
      const card = document.createElement('div');
      card.className = 'player-card';

      card.innerHTML = `
        <img src="${legend.photo}" alt="${legend.name}" class="player-photo" />
        <p><strong>${legend.name}</strong></p>
        <p>${legend.position || legend.postion || ''}</p>
        <p>Вік: ${legend.age}</p>
        <p>Національність: ${legend.nationality}</p>
      `;

      legendsList.appendChild(card);
    });

    content.appendChild(legendsList);
  }


  // Текст истории
  const historyText = document.createElement('div');
  historyText.innerHTML = pages['Історія'].text;
  content.appendChild(historyText);
}


// Новости
function showNews() {
  content.innerHTML = '<h2>Новини</h2>';

  const grid = document.createElement('div');
  grid.className = 'news-grid';

  // Сортируем новости по дате (от новых к старым)
  const sortedNews = [...window.news].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedNews.forEach(item => {
    const preview = document.createElement('div');
    preview.className = 'news-card';
    preview.onclick = () => showFullNews(item.id);

    const firstSentence = item.text.split('.')[0] + '.';

    preview.innerHTML = `
      <h3>${item.title}</h3>
      <p>${firstSentence}</p>
    `;

    grid.appendChild(preview);
  });

  content.appendChild(grid);
}

function showFullNews(id) {
  const item = window.news.find(n => n.id === id);
  content.innerHTML = '';

  if (!item) {
    content.innerHTML = '<p>Новину не знайдено.</p>';
    return;
  }

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Назад';
  backBtn.className = 'back-btn';
  backBtn.onclick = showNews;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = item.title;
  content.appendChild(title);

  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.style.maxWidth = '100%';
    img.style.borderRadius = '10px';
    img.style.margin = '20px auto'; // <-- тут auto по бокам
  img.style.display = 'block';
    content.appendChild(img);
  }

  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  content.appendChild(fullText);
}



// Запуск - показываем главную страницу
showPage('Головна');
