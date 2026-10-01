'use strict';

/* ============ НАСТРОЙКИ (меняйте только здесь) ============ */
const CONFIG = {
  ip: '188.127.241.74:1105',
  donateUrl: '',          // ссылка на донат
  downloadUrl: 'https://play.google.com/store/apps/details?id=com.sampunity.game',  // SAMP Launcher Unity в Google Play
  videoUrl: 'video/connect.mp4', // ссылка на YouTube или путь к файлу, например 'video/connect.mp4'. Пусто — блок скрыт
  social: [               // пустая ссылка покажет уведомление
    { name: 'Discord', url: '' },
    { name: 'Telegram', url: '' },
    { name: 'VK', url: '' }
  ],
  googleLogin: false,     // включить после подключения backend и Google OAuth
  mainRules: 4            // сколько правил показывать на главной (остальные — в окне «все правила»)
};

/* ============ ПЕРЕВОДЫ: ru / uk / en ============ */
const I18N = {
  ru: {
    title: 'SAMP PROJECT — игровой SAMP-сервер',
    desc: 'Играй, развивай персонажа и становись частью нашего SAMP-сообщества.',
    nav_home: 'Главная', nav_rules: 'Правила', nav_start: 'Как начать', nav_donate: 'Донат',
    login: 'Войти', register: 'Регистрация', logout: 'Выйти',
    hero_title: 'Добро пожаловать<br>в San Andreas',
    hero_lead: 'Играй, развивай персонажа и становись частью нашего SAMP-сообщества.',
    play: 'Начать играть', ip_label: 'IP-адрес', copy_ip: '📋 Скопировать IP',
    avail: 'Сервер доступен', unavail: 'Сервер недоступен',
    rules_eyebrow: 'ПРАВИЛА', rules_title: 'Играй честно', rules_all: 'Открыть все правила', rules_modal: 'Правила проекта',
    start_eyebrow: 'КАК НАЧАТЬ', start_title: 'Три шага до игры',
    s1_t: 'Создай аккаунт', s1_d: 'Регистрация занимает меньше минуты.',
    s2_t: 'Установи SAMP', s2_d: 'Скачай SAMP Launcher Unity в Google Play и установи на телефон.', download: 'Скачать в Google Play',
    s3_t: 'Подключись по IP', s3_d: 'Открой SAMP, добавь сервер и вставь IP.',
    create_acc: 'Создать аккаунт',
    video_eyebrow: 'ВИДЕО', video_title: 'Как подключиться',
    donate_eyebrow: 'ПОДДЕРЖКА ПРОЕКТА', donate_lead: 'Поддержи проект и помоги развивать сервер.', donate_go: 'Перейти к донату',
    login_title: 'Вход', reg_title: 'Регистрация', google: 'Войти через Google', or: 'или',
    ph_login: 'Логин', ph_email: 'Email', ph_pass: 'Пароль', ph_pass_new: 'Пароль (от 6 символов)',
    no_acc: 'Нет аккаунта?', have_acc: 'Уже есть аккаунт?',
    copied: 'IP скопирован!', copy_fail: 'Не удалось скопировать. Введите IP вручную: ',
    donate_soon: 'Ссылка на донат пока не добавлена. Скоро она появится здесь.',
    download_soon: 'Ссылка на скачивание пока не добавлена.', link_soon: 'ссылка пока не добавлена.',
    google_soon: 'Вход через Google появится после подключения сервера', google_go: 'Перенаправляем в Google…',
    acc_created: 'Аккаунт создан! Добро пожаловать, ', logged_in: 'Вы вошли как ', logged_out: 'Вы вышли из аккаунта',
    err_taken: 'Этот логин уже занят', err_bad: 'Неверный логин или пароль',
    rules: [
      ['Уважение', 'Уважай игроков и администрацию проекта.'],
      ['Без читов', 'Использование читов и запрещённого программного обеспечения запрещено.'],
      ['RP', 'Соблюдай RolePlay-правила и атмосферу сервера.'],
      ['Баги', 'Не используй баги игры для получения преимущества.'],
      ['Реклама', 'Реклама сторонних проектов запрещена.'],
      ['Аккаунт', 'Не передавай доступ к аккаунту другим людям.'],
      ['Наказания', 'За нарушение правил администрация вправе применить санкции.']
    ]
  },
  uk: {
    title: 'SAMP PROJECT — ігровий SAMP-сервер',
    desc: 'Грай, розвивай персонажа та стань частиною нашої SAMP-спільноти.',
    nav_home: 'Головна', nav_rules: 'Правила', nav_start: 'Як почати', nav_donate: 'Донат',
    login: 'Увійти', register: 'Реєстрація', logout: 'Вийти',
    hero_title: 'Ласкаво просимо<br>до San Andreas',
    hero_lead: 'Грай, розвивай персонажа та стань частиною нашої SAMP-спільноти.',
    play: 'Почати грати', ip_label: 'IP-адреса', copy_ip: '📋 Скопіювати IP',
    avail: 'Сервер доступний', unavail: 'Сервер недоступний',
    rules_eyebrow: 'ПРАВИЛА', rules_title: 'Грай чесно', rules_all: 'Відкрити всі правила', rules_modal: 'Правила проєкту',
    start_eyebrow: 'ЯК ПОЧАТИ', start_title: 'Три кроки до гри',
    s1_t: 'Створи акаунт', s1_d: 'Реєстрація займає менше хвилини.',
    s2_t: 'Встанови SAMP', s2_d: 'Завантаж SAMP Launcher Unity у Google Play та встанови на телефон.', download: 'Завантажити в Google Play',
    s3_t: 'Підключись за IP', s3_d: 'Відкрий SAMP, додай сервер і встав IP.',
    create_acc: 'Створити акаунт',
    video_eyebrow: 'ВІДЕО', video_title: 'Як підключитися',
    donate_eyebrow: 'ПІДТРИМКА ПРОЄКТУ', donate_lead: 'Підтримай проєкт і допоможи розвивати сервер.', donate_go: 'Перейти до донату',
    login_title: 'Вхід', reg_title: 'Реєстрація', google: 'Увійти через Google', or: 'або',
    ph_login: 'Логін', ph_email: 'Email', ph_pass: 'Пароль', ph_pass_new: 'Пароль (від 6 символів)',
    no_acc: 'Немає акаунта?', have_acc: 'Вже є акаунт?',
    copied: 'IP скопійовано!', copy_fail: 'Не вдалося скопіювати. Введіть IP вручну: ',
    donate_soon: 'Посилання на донат ще не додано. Скоро воно з’явиться тут.',
    download_soon: 'Посилання на завантаження ще не додано.', link_soon: 'посилання ще не додано.',
    google_soon: 'Вхід через Google з’явиться після підключення сервера', google_go: 'Переходимо до Google…',
    acc_created: 'Акаунт створено! Ласкаво просимо, ', logged_in: 'Ви увійшли як ', logged_out: 'Ви вийшли з акаунта',
    err_taken: 'Цей логін уже зайнято', err_bad: 'Невірний логін або пароль',
    rules: [
      ['Повага', 'Поважай гравців та адміністрацію проєкту.'],
      ['Без читів', 'Використання читів та забороненого програмного забезпечення заборонено.'],
      ['RP', 'Дотримуйся RolePlay-правил та атмосфери сервера.'],
      ['Баги', 'Не використовуй баги гри для отримання переваги.'],
      ['Реклама', 'Реклама сторонніх проєктів заборонена.'],
      ['Акаунт', 'Не передавай доступ до акаунта іншим людям.'],
      ['Покарання', 'За порушення правил адміністрація має право застосувати санкції.']
    ]
  },
  en: {
    title: 'SAMP PROJECT — SAMP game server',
    desc: 'Play, grow your character and become part of our SAMP community.',
    nav_home: 'Home', nav_rules: 'Rules', nav_start: 'Get started', nav_donate: 'Donate',
    login: 'Log in', register: 'Sign up', logout: 'Log out',
    hero_title: 'Welcome<br>to San Andreas',
    hero_lead: 'Play, grow your character and become part of our SAMP community.',
    play: 'Start playing', ip_label: 'IP address', copy_ip: '📋 Copy IP',
    avail: 'Server is available', unavail: 'Server is unavailable',
    rules_eyebrow: 'RULES', rules_title: 'Play fair', rules_all: 'View all rules', rules_modal: 'Server rules',
    start_eyebrow: 'GET STARTED', start_title: 'Three steps to play',
    s1_t: 'Create an account', s1_d: 'Sign-up takes less than a minute.',
    s2_t: 'Install SAMP', s2_d: 'Download SAMP Launcher Unity from Google Play and install it on your phone.', download: 'Get it on Google Play',
    s3_t: 'Connect by IP', s3_d: 'Open SAMP, add the server and paste the IP.',
    create_acc: 'Create account',
    video_eyebrow: 'VIDEO', video_title: 'How to connect',
    donate_eyebrow: 'SUPPORT THE PROJECT', donate_lead: 'Support the project and help the server grow.', donate_go: 'Go to donation page',
    login_title: 'Log in', reg_title: 'Sign up', google: 'Continue with Google', or: 'or',
    ph_login: 'Username', ph_email: 'Email', ph_pass: 'Password', ph_pass_new: 'Password (6+ characters)',
    no_acc: 'No account yet?', have_acc: 'Already have an account?',
    copied: 'IP copied!', copy_fail: 'Could not copy. Enter the IP manually: ',
    donate_soon: 'The donation link has not been added yet. It will appear here soon.',
    download_soon: 'The download link has not been added yet.', link_soon: 'link has not been added yet.',
    google_soon: 'Google login will be available once the server is connected', google_go: 'Redirecting to Google…',
    acc_created: 'Account created! Welcome, ', logged_in: 'Logged in as ', logged_out: 'You have logged out',
    err_taken: 'This username is already taken', err_bad: 'Wrong username or password',
    rules: [
      ['Respect', 'Respect other players and the project staff.'],
      ['No cheats', 'Cheats and prohibited software are not allowed.'],
      ['RP', 'Follow the RolePlay rules and the server atmosphere.'],
      ['Bugs', 'Do not exploit game bugs to gain an advantage.'],
      ['Advertising', 'Advertising other projects is prohibited.'],
      ['Account', 'Do not share access to your account with others.'],
      ['Penalties', 'Staff may apply penalties for breaking the rules.']
    ]
  }
};
const LANGS = { ru: 'RU', uk: 'UA', en: 'EN' };

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ============ Язык ============ */
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } },
  del: k => { try { localStorage.removeItem(k); } catch { } }
};
function detectLang() {
  const saved = store.get('samp_lang', null);
  if (saved && I18N[saved]) return saved;
  const n = (navigator.language || 'ru').slice(0, 2).toLowerCase();
  return I18N[n] ? n : 'ru';
}
let lang = detectLang();
const t = k => (I18N[lang][k] ?? I18N.ru[k] ?? k);

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('title');
  $('meta[name=description]').content = t('desc');
  $('meta[property="og:title"]').content = t('title');
  $('meta[property="og:description"]').content = t('desc') + ' IP: ' + CONFIG.ip;
  $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $$('[data-lang]').forEach(el => {
    el.innerHTML = Object.keys(LANGS).map(l =>
      `<button data-action="lang" data-l="${l}" class="${l === lang ? 'on' : ''}" aria-pressed="${l === lang}">${LANGS[l]}</button>`).join('');
  });
  renderAuth(); renderRules(); renderStatus();
}
function setLang(l) {
  if (!I18N[l] || l === lang) return;
  lang = l; store.set('samp_lang', l); applyLang();
}

/* ============ Уведомления ============ */
function toast(msg, type = 'ok') {
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  $('#toasts').append(el);
  requestAnimationFrame(() => el.classList.add('in'));
  setTimeout(() => { el.classList.remove('in'); setTimeout(() => el.remove(), 350); }, 2800);
}

/* ============ Авторизация ============
   Сейчас — демо на localStorage. Для настоящего backend замените тела
   методов на fetch('/api/...'), интерфейс остаётся тем же. */
async function hash(s) {
  try {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  } catch { return 'plain:' + s; }
}
const Auth = {
  current: () => store.get('samp_session', null),
  async register({ login, email, password }) {
    const users = store.get('samp_users', []);
    if (users.some(u => u.login.toLowerCase() === login.toLowerCase())) throw new Error('err_taken');
    users.push({ login, email, pass: await hash(password) });
    store.set('samp_users', users);
    store.set('samp_session', { login });
    return { login };
  },
  async login({ login, password }) {
    const u = store.get('samp_users', []).find(x => x.login.toLowerCase() === login.toLowerCase());
    if (!u || u.pass !== await hash(password)) throw new Error('err_bad');
    store.set('samp_session', { login: u.login });
    return { login: u.login };
  },
  logout: () => store.del('samp_session')
};

function renderAuth() {
  const s = Auth.current();
  $$('[data-auth]').forEach(el => {
    el.innerHTML = s
      ? `<span class="user">👤 ${esc(s.login)}</span><button class="btn ghost sm" data-action="logout">${t('logout')}</button>`
      : `<button class="btn ghost sm" data-action="login">${t('login')}</button><button class="btn primary sm" data-action="register">${t('register')}</button>`;
  });
}

/* ============ Модальные окна ============ */
const overlay = $('#overlay'), mbody = $('#mbody');
let lastFocus = null;

function openModal(html) {
  if (!overlay.classList.contains('open')) lastFocus = document.activeElement;
  mbody.innerHTML = html;
  overlay.classList.add('open');
  document.body.classList.add('lock');
  setTimeout(() => ($('input', mbody) || $('.close')).focus(), 60);
}
function closeModal() {
  overlay.classList.remove('open');
  document.body.classList.remove('lock');
  lastFocus && lastFocus.focus && lastFocus.focus();
}

const googleBlock = () => `<button type="button" class="btn ghost wide" data-action="google"><b>G</b> ${t('google')}</button><div class="or"><span>${t('or')}</span></div>`;
const views = {
  login: () => `<h2 id="mt">${t('login_title')}</h2>${googleBlock()}
    <form data-form="login">
      <input name="login" placeholder="${t('ph_login')}" autocomplete="username" required>
      <input name="password" type="password" placeholder="${t('ph_pass')}" autocomplete="current-password" required>
      <p class="err" role="alert"></p>
      <button class="btn primary wide">${t('login')}</button>
    </form>
    <p class="switch">${t('no_acc')} <button class="link" data-action="register">${t('register')}</button></p>`,
  register: () => `<h2 id="mt">${t('reg_title')}</h2>${googleBlock()}
    <form data-form="register">
      <input name="login" placeholder="${t('ph_login')}" minlength="3" maxlength="24" autocomplete="username" required>
      <input name="email" type="email" placeholder="${t('ph_email')}" autocomplete="email" required>
      <input name="password" type="password" placeholder="${t('ph_pass_new')}" minlength="6" autocomplete="new-password" required>
      <p class="err" role="alert"></p>
      <button class="btn primary wide">${t('create_acc')}</button>
    </form>
    <p class="switch">${t('have_acc')} <button class="link" data-action="login">${t('login')}</button></p>`,
  rules: () => `<h2 id="mt">${t('rules_modal')}</h2><ol class="all-rules">${
    t('rules').map(r => `<li><b>${esc(r[0])}</b><span>${esc(r[1])}</span></li>`).join('')}</ol>`
};

document.addEventListener('submit', async e => {
  const form = e.target.closest('[data-form]');
  if (!form) return;
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  data.login = (data.login || '').trim();
  const btn = $('button.primary', form), err = $('.err', form);
  btn.disabled = true; err.textContent = '';
  try {
    const kind = form.dataset.form;
    const user = await Auth[kind](data);
    closeModal(); renderAuth();
    toast(kind === 'register' ? t('acc_created') + user.login : t('logged_in') + user.login);
  } catch (ex) {
    err.textContent = t(ex.message);
  } finally { btn.disabled = false; }
});

/* ============ Действия кнопок ============ */
async function copyIP() {
  let ok = false;
  try { await navigator.clipboard.writeText(CONFIG.ip); ok = true; }
  catch {
    const ta = document.createElement('textarea');
    ta.value = CONFIG.ip; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.append(ta); ta.select();
    try { ok = document.execCommand('copy'); } catch { }
    ta.remove();
  }
  ok ? toast(t('copied')) : toast(t('copy_fail') + CONFIG.ip, 'warn');
}

const actions = {
  login: () => { closeMenu(); openModal(views.login()); },
  register: () => { closeMenu(); openModal(views.register()); },
  rules: () => openModal(views.rules()),
  close: closeModal,
  copy: copyIP,
  lang: el => setLang(el.dataset.l),
  google: () => toast(CONFIG.googleLogin ? t('google_go') : t('google_soon'), 'info'),
  donate: () => {
    if (CONFIG.donateUrl) window.open(CONFIG.donateUrl, '_blank', 'noopener');
    else toast(t('donate_soon'), 'info');
  },
  download: () => {
    if (CONFIG.downloadUrl) window.open(CONFIG.downloadUrl, '_blank', 'noopener');
    else toast(t('download_soon'), 'info');
  },
  social: el => {
    const s = CONFIG.social[el.dataset.i];
    if (s.url) window.open(s.url, '_blank', 'noopener');
    else toast(s.name + ': ' + t('link_soon'), 'info');
  },
  logout: () => { Auth.logout(); renderAuth(); closeMenu(); toast(t('logged_out'), 'info'); }
};

document.addEventListener('click', e => {
  const a = e.target.closest('[data-action]');
  if (a) { actions[a.dataset.action] && actions[a.dataset.action](a); return; }
  if (e.target === overlay) closeModal();
  if (e.target.closest('.panel a')) closeMenu();
});

/* ============ Мобильное меню и шапка ============ */
const header = $('#header'), burger = $('#burger');
function closeMenu() {
  header.classList.remove('open');
  burger.textContent = '☰';
  burger.setAttribute('aria-expanded', 'false');
}
burger.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  burger.textContent = open ? '✕' : '☰';
  burger.setAttribute('aria-expanded', open);
});
addEventListener('resize', () => { if (innerWidth > 1040) closeMenu(); });
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeMenu(); }
  if (e.key === 'Tab' && overlay.classList.contains('open')) {
    const f = $$('button,input,a[href]', overlay).filter(x => !x.disabled);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ============ Правила, статус, соцсети, видео ============ */
function renderRules() {
  $('#rulesGrid').innerHTML = t('rules').slice(0, CONFIG.mainRules).map((r, i) =>
    `<article class="card rule reveal in"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></article>`
  ).join('');
}

let serverOnline = true;
async function getServerStatus() {
  // TODO: заменить на fetch к API мониторинга, например /api/status
  return { online: true };
}
function renderStatus() {
  const el = $('[data-status]');
  el.classList.toggle('off', !serverOnline);
  $('span', el).textContent = serverOnline ? t('avail') : t('unavail');
}
getServerStatus().then(s => { serverOnline = s.online; renderStatus(); });

$('#social').innerHTML = CONFIG.social.map((s, i) =>
  `<button class="link" data-action="social" data-i="${i}">${esc(s.name)}</button>`).join('');

(function initVideo() {
  const url = CONFIG.videoUrl.trim();
  if (!url) return;
  const yt = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  const box = $('#videoBox');
  if (yt) box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="SAMP PROJECT" loading="lazy" allow="accelerometer;encrypted-media;picture-in-picture" allowfullscreen></iframe>`;
  else box.innerHTML = `<video controls playsinline preload="metadata" src="${esc(url)}"></video>`;
  $('#video').hidden = false;
})();

/* ============ Появление блоков и подсветка меню ============ */
const revealIO = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); }
}), { threshold: .12 });
$$('.reveal:not(.in)').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; revealIO.observe(el); });

const navLinks = $$('.menu a');
const spyIO = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.hash === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => spyIO.observe(s));

/* ============ Падающий снег (на заднем фоне) ============ */
(() => {
  const c = $('#snow'), x = c.getContext('2d');
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let w, h, flakes = [];
  const make = initial => ({
    x: Math.random() * w, y: initial ? Math.random() * h : -10,
    r: Math.random() * 2.6 + 1, v: Math.random() * .7 + .3,
    a: Math.random() * 6.28, s: Math.random() * .01 + .004
  });
  function size() {
    w = innerWidth; h = innerHeight;
    c.width = w * dpr; c.height = h * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.round(w / 13));
    while (flakes.length < n) flakes.push(make(true));
    flakes.length = n;
  }
  function draw() {
    x.clearRect(0, 0, w, h);
    x.fillStyle = 'rgba(255,255,255,.95)';
    x.strokeStyle = 'rgba(110,150,215,.4)';
    for (const p of flakes) {
      p.y += p.v; p.a += p.s; p.x += Math.sin(p.a) * .4;
      if (p.y > h + 10) Object.assign(p, make(false));
      x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fill(); x.stroke();
    }
  }
  (function loop() { draw(); if (!reduce.matches) requestAnimationFrame(loop); })();
  addEventListener('resize', size);
  size();
})();

applyLang();
