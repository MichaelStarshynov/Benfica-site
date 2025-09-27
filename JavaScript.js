// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "ФК Бенфика";
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
  Главная: {
    title: 'Добро пожаловать на фан сайт Бенфики!',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥Бенфика - это больше чем футбол!</h3>
      <p style="font-size:18px;">Это страсть, борьба, победы и эмоции. Мы — Бенфика, мы — сила!</p>
      <p><strong>Присоеденяйтесь к нам, следите за матчами, покупайте билеты и поддерживайте команду!</strong></p>
      <button onclick="showPage('Билеты')" class="shop-btn">🎟️ Купить билеты</button>
      <button onclick="showPage('Новости')" class="shop-btn">📰 Читать новости</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://zbirna.com/storage/benfika-lissabon-1629790211PMyrX.jpg" style="max-width:100%; border-radius:10px; margin:20px 0;">
    </div>`
  },
  Новости: { title: `Новини нашого клубу` },
  Клуб: { 
  title: `Клуб - Бенфика Лиссабон`,
  text: `
    <h3>Бенфика — это больше, чем клуб. Это история, традиции и победы.</h3>
    <p>Футбольный клуб «Бенфика» основан в 1904 году. Это один из самых титулованных и известных клубов Португалии и Европы.</p>
    
    <h4>🏆 Достижения:</h4>
    <ul>
      <li>38x Чемпион Португалии</li>
      <li>26x Обладатель Кубка Португалии</li>
      <li>7x Обладатель Кубка лиги Португалии</li>
      <li>9x Обладатель Суперкубка Португалии</li>
      <li>2x Победитель Кубка европейских чемпионов (1961, 1962)</li>
    </ul>

    <h4>🏟️ Домашний стадион:</h4>
    <p>«Эштадиу да Луж» — главный стадион Бенфики и один из самых современных стадионов Европы. Вместимость: более 65 000 зрителей.</p>
    <img src="https://sacyr.com/documents/121856245/121894513/portugal-estadio-da-luz.jpg/2020c6a2-33dd-eb4a-3d94-30c20ed8146a?t=1605651396580" 
         alt="Домашний стадион Бенфики: Эштадиу да Луж" 
         style="max-width:300px; border-radius:10px;">

    <h4>Рекорды:</h4>
    <ul>
      <li>Лучший бомбардир: Эйсебио — 473 гола</li>
      <li>Больше всего матчей за клуб: Нене — 575 матчей</li>
      <li>Легендарный тренер: Бела Гуттман (дважды выигрывал Кубок чемпионов)</li>
      <li>Самый дорогой трансфер: Жоау Фелиш → Атлетико за €126 млн</li>
    </ul>
  `
},
  История: {
    title: `История футбольного клуба «Бенфика»`,
     text: `<br><img src="https://terrikon.com/i/c/por/1200/benfica.jpg"><br>
     <p>Футбольный клуб «Спорт Лиссабон и Бенфика», более известный просто как «Бенфика», был основан в 1904 году в Лиссабоне. Его история — это путь от небольшой группы энтузиастов до одного из самых успешных и узнаваемых клубов Европы. На протяжении более века «Бенфика» стала символом португальского футбола, гордостью миллионов болельщиков и неотъемлемой частью национальной культуры.</p>
     <h4>Рождение клуба</h4>
     <p>История «Бенфики» началась 28 февраля 1904 года, когда молодые спортсмены во главе с Косме Дамианом организовали клуб «Спорт Лиссабон». Их главной целью было развивать футбол, который в то время только набирал популярность в Португалии. Спустя несколько лет «Спорт Лиссабон» объединился с клубом «Групо Спорт Бенфика», и так родился современный «Спорт Лиссабон и Бенфика».</p>
     <p>С самого начала клуб отличался демократичностью: членами могли стать люди разных социальных слоёв, что выделяло его на фоне аристократического «Спортинга» и более элитарного «Порту». Именно поэтому «Бенфика» быстро завоевала популярность среди рабочих и студентов.</p>
     <h4>Первые успехи</h4>
     <p>В первые десятилетия XX века футбол в Португалии развивался медленно, но «Бенфика» уже тогда считалась одним из лидеров. Клуб выигрывал региональные турниры и становился заметной силой на национальном уровне. В 1930-х годах была создана Португальская лига, и «Бенфика» сразу заявила о себе как о претенденте на титулы.</p>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlKgCwJMpjWD1aLziI2czZHR0uG7SYMOmpg&s" title="Эйсебио, легенда Бенфики" alt="Эйсебио, легенда Бенфики">
     <h4>Золотая эра Эйсебио</h4>
     <p>Наибольшую славу клубу принес 1960-е годы. Именно тогда «Бенфика» вышла на европейскую арену и заявила о себе во весь голос. В 1961 году команда под руководством тренера Белы Гуттмана выиграла Кубок европейских чемпионов (ныне Лига чемпионов), обыграв в финале «Барселону» со счётом 3:2. Спустя год успех был повторён: в 1962 году «Бенфика» победила мадридский «Реал» 5:3, и это стало второй подряд победой в Европе.</p>
     <p>Главным героем того времени стал легендарный нападающий Эйсебио да Силва Феррейра, которого называли «Черной пантерой». Его невероятная скорость, техника и умение забивать сделали его символом клуба и всего португальского футбола. Эйсебио стал обладателем «Золотого мяча» в 1965 году и долгие годы оставался главным бомбардиром «Бенфики» и сборной Португалии.</p>
     <img class="history-picture"src="https://photobooth.cdn.sports.ru/preset/post/d/55/091f1c56648478d779a68c9ade80a.jpeg" alt="Победа Бенфики в ЛЧ в 1961" title="Победа Бенфики в ЛЧ в 1961">
     <img class="history-picture"src="https://contents.mediadecathlon.com/m18945828/k$711f65183992944afbe995a209d44f4b/picture.jpg" alt="Победа Бенфики в ЛЧ в 1962" title="Победа Бенфики в ЛЧ в 1962">
     <h4>Проклятие Гуттмана</h4>
     <p>Однако с золотыми победами связана и одна из самых мистических историй мирового футбола. После второго триумфа в Европе тренер Бела Гуттман покинул клуб, не получив обещанной прибавки к зарплате. Уходя, он якобы наложил «проклятие»: «Бенфика больше никогда не выиграет европейский кубок без меня». С тех пор клуб восемь раз выходил в финалы еврокубков, но ни разу не победил. Эта легенда до сих пор будоражит умы болельщиков.</p>
     <h4>Доминирование в Португалии</h4>
     <p>Несмотря на неудачи в Европе, «Бенфика» десятилетиями оставалась ведущей силой в Португалии. Клуб многократно выигрывал национальный чемпионат и кубки, вырастил десятки звёзд и стал важной частью португальского футбольного наследия. Его принципиальное соперничество с «Порту» и «Спортингом» сформировало знаменитое «трио грандов», без которого невозможно представить чемпионат страны.</p>
     <h4>Современная эпоха</h4>
     <p>В XXI веке «Бенфика» продолжила сохранять статус топ-клуба Португалии. В 2010-х годах команда под руководством Жорже Жезуша и Руя Витории несколько раз становилась чемпионом страны и успешно выступала в Лиге Европы, дважды доходя до финала (2013 и 2014 годы). Однако проклятие Гуттмана вновь проявило себя: оба финала были проиграны.</p>
     <p>Клуб также стал известен как кузница талантов. Здесь выросли такие игроки, как Анхель Ди Мария, Давид Луис, Неманья Матич, Жоау Фелиш и многие другие, которые затем перешли в европейские гранды за большие суммы. Это сделало «Бенфику» одним из самых успешных клубов Европы по развитию и продаже молодых футболистов.</p>
     <img src="https://cdn-m.sport24.ru/m/57fe/20fe/4b8c/4a57/8bd5/9a2a/c107/65c7/1600_10000_max.webp" alt="Орел Витория, символ Бенфики" title="Орел Витория, символ Бенфики">
     <h4>Символ и традиции</h4>
     <p>«Бенфика» — это не только футбол, но и огромная социальная база. Клуб гордится тем, что имеет одну из самых больших фанатских армий в мире. Его болельщики известны своей преданностью: даже в трудные времена они остаются с командой. Символом клуба является орёл по имени Витория, который перед матчами пролетает над стадионом «Эштадиу да Луж» и садится в центр поля, что стало неотъемлемой частью клубной идентичности.</p>
     <p>Домашний стадион «Эштадиу да Луж» («Стадион Света») — один из самых современных и вместительных в Европе, его посещаемость стабильно входит в число лучших на континенте.</p>
     <h4>Наследие и будущее</h4>
     <pСегодня «Бенфика» остаётся самым титулованным клубом Португалии: более 38 чемпионских титулов, десятки национальных кубков и две победы в Кубке чемпионов. Несмотря на проклятие Гуттмана, болельщики верят, что однажды клуб снова поднимет европейский трофей.></p>
     <p>Клуб продолжает развиваться, делая ставку на молодёжь, современные технологии и глобальное присутствие. «Бенфика» — это не просто команда, это живая легенда, объединяющая миллионы людей в Португалии и за её пределами. Её история — это история борьбы, надежды и верности, которая продолжается и сегодня.</p>
     `,
  },
  Команда: { title: `Команда` },
  Матчи: { 
    title: `Матчи`, 
    text:  `<p>Место в Лиге: 2 место</p><p>Место в Лиге Чемпионов: 24</p><p>Место в кубке Португалии: кубок еще не начался</p>`

  },
  Билеты: {
    title: `Купить билеты`,
    text: `Билеты можно купить <a href="https://www.slbenfica.pt/en-us/loja/bilhetes/futebol-modalidades" target="_blank">тут</a>.<br><img src="https://sport-arenas.ru/images/phocagallery/Europe/portugal/estadio-da-luz-lisbon/thumbs/phoca_thumb_l_estadio-da-luz-lisbon_07.jpg" style="max-width:300px;">`
  },
  Магазин: {
    title: `Купити атрибутику`,
    text: `Атрибутику Бенфики можно купить <a href="https://www.slbenfica.pt/en-us/loja" target="_blank">тут</a>.<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxQjeSy2AG37trL2PTyXWF-4GIMO7mvkXzA&s" style="max-width:300px;">`
  },
  Телеграм: {
    title: `Телеграм-канал`,
    text: `<p>Подписывайтесь на наш <a href="https://t.me/BenficaLissabon" target="_blank">телеграм-канал</a> для больше новостей.</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSeGjuDJOpbtG0lc2g05V_tfvscIM3VUqKg&s" >`
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
  if (pageKey === 'Новости') {
    showNews();
    return;
  }
  if (pageKey === 'Матчи') {
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

// Показ команды с разделами по позициям + тренеры
function showTeam() {
  content.innerHTML = ''; // очищаем перед выводом

  const title = document.createElement('h2');
  title.textContent = 'Состав команды';
  content.appendChild(title);

  // Категории игроков
  const groups = {
    'Вратари': ['GK', 'Вратарь'],
    'Защитники': ['DF', 'Защитник'],
    'Полузащитники': ['MF', 'Полузащитник'],
    'Нападающие': ['FW', 'Нападающий']
  };

  // Перебор категорий
  for (const groupName in groups) {
    const groupTitle = document.createElement('h3');
    groupTitle.textContent = groupName;
    content.appendChild(groupTitle);

    const groupList = document.createElement('div');
    groupList.className = 'players-list';

    window.team
      .filter(player => groups[groupName].some(pos => player.position.includes(pos)))
      .forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';

        card.innerHTML = `
          <img src="${player.photo}" alt="${player.name}" class="player-photo" />
          <p><strong>#${player.number} ${player.name}</strong></p>
          <p>${player.position}</p>
          <p>Возраст: ${player.age}</p>
          <p>Национальность: ${player.nationality}</p>
        `;

        groupList.appendChild(card);
      });

    if (groupList.children.length > 0) {
      content.appendChild(groupList);
    }
  }

  // ---- Тренеры ----
  if (window.coaches && window.coaches.length > 0) {
    const coachesTitle = document.createElement('h3');
    coachesTitle.textContent = 'Тренерский штаб';
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
        <p>Возраст: ${coach.age}</p>
        <p>Национальность: ${coach.nationality}</p>
      `;

      coachesList.appendChild(card);
    });

    content.appendChild(coachesList);
  }
}

 
function showMatches() {
  content.innerHTML = '<h2>Матчи</h2>';

  // берем текст из pages
  const info = document.createElement('div');
  info.innerHTML = pages['Матчи'].text;
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
      <p><strong>⚔️ Соперник:</strong> ${match.opponent}</p>
      <p><strong>🕒 Время:</strong> ${match.time}</p>
      <p><strong>🎯 Счет:</strong> ${match.score}</p>
      <p><strong>📍 Место:</strong> ${match.place}</p>
      <p><strong>🏆 Соревнование:</strong> ${match.competition}</p>
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
showPage('Главная');
