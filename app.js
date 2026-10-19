const products = [
  {
    id: 1, cat: 'smartphone', category: 'Смартфоны', name: 'NEO X Pro', price: 89990,
    rating: 4.9, stock: true, tag: 'ВЫБОР NEXUS', description: '6.7″ OLED · 256 ГБ · камера 50 Мп',
    image: 'assets/neo-x-pro.svg',
    specs: [['Дисплей', '6.7″ OLED, 120 Гц'], ['Память', '256 ГБ'], ['Камера', '50 + 12 + 10 Мп'], ['Аккумулятор', '5100 мА·ч']],
    options: { color: ['Графит', 'Серебро', 'Оливковый'], memory: ['256 ГБ', '512 ГБ'] },
  },
  {
    id: 2, cat: 'laptop', category: 'Ноутбуки', name: 'AeroBook 14', price: 114990,
    rating: 4.8, stock: true, tag: 'ЛЁГКИЙ ВЕС', description: '14″ · 16 ГБ · 512 ГБ SSD',
    image: 'assets/aerobook.svg',
    specs: [['Дисплей', '14″, 2.8K'], ['Процессор', 'Core Ultra 7'], ['Память', '16 ГБ RAM'], ['Накопитель', '512 ГБ SSD']],
    options: { color: ['Тёмный графит', 'Серебро'], memory: ['512 ГБ', '1 ТБ'] },
  },
  {
    id: 3, cat: 'audio', category: 'Аудио', name: 'Pulse Max', price: 24990,
    rating: 4.9, stock: true, tag: 'ХИТ', description: 'Шумоподавление · до 40 часов',
    image: 'assets/pulse-max.svg',
    specs: [['Звук', 'Активное шумоподавление'], ['Автономность', 'До 40 часов'], ['Подключение', 'Bluetooth 5.4'], ['Вес', '248 г']],
    options: { color: ['Графит', 'Тёплый серый'] },
  },
  {
    id: 4, cat: 'watch', category: 'Часы', name: 'NEX Watch S', price: 32990,
    rating: 4.7, stock: true, tag: '', description: 'AMOLED · GPS · до 7 дней работы',
    image: 'assets/nexus-watch.svg',
    specs: [['Дисплей', '1.8″ AMOLED'], ['Навигация', 'GPS'], ['Защита', '5 ATM'], ['Автономность', 'До 7 дней']],
    options: { color: ['Графит', 'Песочный', 'Оливковый'] },
  },
  {
    id: 5, cat: 'tablet', category: 'Планшеты', name: 'Tab Air 12', price: 57990,
    rating: 4.8, stock: true, tag: 'СТИЛУС В КОМПЛЕКТЕ', description: '12.9″ · 256 ГБ · яркий экран',
    image: 'assets/tab-air.svg',
    specs: [['Дисплей', '12.9″ Liquid Retina'], ['Память', '256 ГБ'], ['Процессор', 'Nexus M2'], ['Комплект', 'Стилус']],
    options: { color: ['Серебро', 'Графит'], memory: ['256 ГБ', '512 ГБ'] },
  },
  {
    id: 6, cat: 'accessory', category: 'Аксессуары', name: 'Charge Dock Pro', price: 8990,
    rating: 4.6, stock: true, tag: '', description: 'Зарядная станция 3-в-1 · 45 Вт',
    image: 'assets/charge-dock-pro.svg',
    specs: [['Мощность', '45 Вт'], ['Формат', '3-в-1'], ['Совместимость', 'Qi2 / MagSafe'], ['Кабель', 'USB-C']],
    options: { color: ['Графит', 'Серебро'] },
  },
  {
    id: 7, cat: 'smartphone', category: 'Смартфоны', name: 'NEO 12', price: 54990,
    rating: 4.7, stock: true, tag: '', description: '6.4″ OLED · 128 ГБ · камера 48 Мп',
    image: 'assets/neo-x-pro.svg',
    specs: [['Дисплей', '6.4″ OLED'], ['Память', '128 ГБ'], ['Камера', '48 + 8 Мп'], ['Аккумулятор', '4700 мА·ч']],
    options: { color: ['Графит', 'Серебро', 'Оливковый'], memory: ['128 ГБ', '256 ГБ'] },
  },
  {
    id: 8, cat: 'laptop', category: 'Ноутбуки', name: 'CoreBook Studio', price: 149990,
    rating: 4.9, stock: false, tag: 'СКОРО', description: '16″ · 32 ГБ · 1 ТБ SSD · Pro GPU',
    image: 'assets/corebook-studio.svg',
    specs: [['Дисплей', '16″, 3.2K'], ['Процессор', 'Core Ultra 9'], ['Память', '32 ГБ RAM'], ['Накопитель', '1 ТБ SSD']],
    options: { color: ['Тёмный графит', 'Серебро'], memory: ['1 ТБ', '2 ТБ'] },
  },
  {
    id: 9, cat: 'audio', category: 'Аудио', name: 'Buds Mini', price: 12990,
    rating: 4.5, stock: true, tag: '', description: 'Компактные · шумоподавление · 28 ч',
    image: 'assets/buds-mini.svg',
    specs: [['Шумоподавление', 'Адаптивное'], ['Автономность', 'До 28 часов'], ['Защита', 'IPX4'], ['Кодеки', 'AAC / SBC']],
    options: { color: ['Белый', 'Графит'] },
  },
  {
    id: 10, cat: 'accessory', category: 'Аксессуары', name: 'PowerBank 20K', price: 5990,
    rating: 4.6, stock: true, tag: 'В ДОРОГУ', description: '20 000 мА·ч · 45 Вт · дисплей',
    image: 'assets/powerbank-20k.svg',
    specs: [['Ёмкость', '20 000 мА·ч'], ['Мощность', '45 Вт'], ['Порты', 'USB-C + USB-A'], ['Вес', '320 г']],
    options: { color: ['Графит', 'Серебро'] },
  },
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
const currency = value => `${money.format(value)} ₽`;
const STORAGE_KEYS = { cart: 'nexus-demo-cart-v1', favorites: 'nexus-demo-favorites-v1' };

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function validCart(value) {
  if (!Array.isArray(value)) return [];
  return value.filter(row => products.some(product => product.id === Number(row.id))
    && Number.isInteger(row.qty) && row.qty > 0)
    .map(row => ({ id: Number(row.id), qty: Math.min(row.qty, 99), options: row.options && typeof row.options === 'object' ? row.options : {} }));
}

function validFavorites(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.map(Number).filter(id => products.some(product => product.id === id)))];
}

let cart = validCart(readStorage(STORAGE_KEYS.cart, []));
let favorites = validFavorites(readStorage(STORAGE_KEYS.favorites, []));
let activeFilter = 'all';
let ratingFilter = 0;
let favoritesOnly = false;
let modalProductId = null;
let modalSelection = {};
let toastTimeout = null;

function saveCart() {
  try { localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart)); } catch { /* Продолжить без сохранения при закрытом хранилище браузера. */ }
}

function saveFavorites() {
  try { localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites)); } catch { /* Избранное работает до закрытия страницы. */ }
}

function initialOptions(product) {
  return Object.fromEntries(Object.entries(product.options).map(([group, values]) => [group, values[0]]));
}

function cartKey(id, options = {}) {
  return encodeURIComponent(JSON.stringify({ id: Number(id), options }));
}

function optionsFromKey(key) {
  try { return JSON.parse(decodeURIComponent(key)); } catch { return null; }
}

function optionsLabel(options) {
  return Object.values(options || {}).join(' · ');
}

function productCard(product) {
  const isFavorite = favorites.includes(product.id);
  return `<article class="product-card" data-product-card="${product.id}">
    <div class="product-image">
      <button class="image-open" type="button" data-open-product="${product.id}" aria-label="Подробнее о товаре «${product.name}»"><img src="${product.image}" alt="${product.name}" loading="lazy">${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}</button>
      <button class="favorite-button" type="button" data-favorite="${product.id}" aria-label="${isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}: ${product.name}" aria-pressed="${isFavorite}">${isFavorite ? '♥' : '♡'}</button>
    </div>
    <div class="product-info"><div class="product-meta"><span>${product.category}</span><span class="product-rating">★ ${product.rating.toFixed(1)}${product.stock ? '' : ' · Под заказ'}</span></div>
      <button class="product-title-button" type="button" data-open-product="${product.id}">${product.name}</button><p class="product-desc">${product.description}</p>
      <div class="product-bottom"><strong class="price">${currency(product.price)}</strong><button class="add-button" type="button" data-add="${product.id}">${product.stock ? 'В корзину' : 'Предзаказ'}</button></div>
    </div>
  </article>`;
}

function renderFeatured() {
  $('#featuredProducts').innerHTML = products.slice(0, 6).map(productCard).join('');
}

function matchesCatalog(product) {
  const min = Math.max(0, Number($('#minPrice').value) || 0);
  const maxInput = $('#maxPrice').value;
  const max = maxInput === '' ? Infinity : Math.max(0, Number(maxInput));
  return (!favoritesOnly || favorites.includes(product.id))
    && (activeFilter === 'all' || product.cat === activeFilter)
    && product.rating >= ratingFilter
    && product.price >= min && product.price <= max
    && (!$('#inStockOnly').checked || product.stock);
}

function renderCatalog() {
  const results = products.filter(matchesCatalog);
  const sort = $('#sortSelect').value;
  if (sort === 'priceAsc') results.sort((a, b) => a.price - b.price);
  if (sort === 'priceDesc') results.sort((a, b) => b.price - a.price);
  if (sort === 'rating') results.sort((a, b) => b.rating - a.rating || a.price - b.price);
  $('#catalogProducts').innerHTML = results.length
    ? results.map(productCard).join('')
    : `<div class="empty-results"><strong>${favoritesOnly ? 'Избранное пока пусто' : 'Ничего не нашлось'}</strong><p>${favoritesOnly ? 'Отмечайте сердечком товары, которые понравились.' : 'Измените фильтры или сбросьте их и начните сначала.'}</p>${favoritesOnly ? '' : '<button type="button" data-reset-filters>Сбросить фильтры</button>'}</div>`;
  $('#resultCount').textContent = `${results.length} ${pluralize(results.length, 'товар', 'товара', 'товаров')}`;
  $('#catalogTitle').textContent = favoritesOnly ? 'Избранное' : 'Весь каталог';
  $('#favoritesNotice').hidden = !favoritesOnly;
  $$('#filters [data-filter]').forEach(button => {
    const active = !favoritesOnly && button.dataset.filter === activeFilter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function pluralize(number, one, few, many) {
  const lastTwo = number % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return many;
  const last = number % 10;
  if (last === 1) return one;
  if (last >= 2 && last <= 4) return few;
  return many;
}

function renderFavoritesCount() {
  $('#favoriteCount').textContent = favorites.length;
  $('#openFavorites').setAttribute('aria-label', `Открыть избранное, товаров: ${favorites.length}`);
}

function setFilter(filter, shouldScroll = true) {
  activeFilter = filter;
  favoritesOnly = false;
  renderCatalog();
  closeMobileMenu();
  if (shouldScroll) $('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetFilters() {
  $('#minPrice').value = '0';
  $('#maxPrice').value = '200000';
  $('#inStockOnly').checked = false;
  $('#sortSelect').value = 'popular';
  ratingFilter = 0;
  $$('[data-rating]').forEach(button => {
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');
  });
  setFilter('all', false);
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter(favoriteId => favoriteId !== id) : [...favorites, id];
  saveFavorites();
  renderFavoritesCount();
  renderFeatured();
  renderCatalog();
  if ($('#searchDialog').open) renderSearchResults($('#searchInput').value);
  showToast(favorites.includes(id) ? 'Добавлено в избранное' : 'Убрано из избранного');
}

function openFavorites() {
  activeFilter = 'all';
  favoritesOnly = true;
  renderCatalog();
  $('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openDialog(dialog) {
  if (!dialog.open) dialog.showModal();
}

function closeDialog(id) {
  const dialog = typeof id === 'string' ? $(`#${id}`) : id;
  if (dialog?.open) dialog.close();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2100);
}

function addToCart(id, options = initialOptions(products.find(product => product.id === id))) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const safeOptions = { ...options };
  const key = cartKey(id, safeOptions);
  const existing = cart.find(item => cartKey(item.id, item.options) === key);
  if (existing) existing.qty = Math.min(99, existing.qty + 1);
  else cart.push({ id, qty: 1, options: safeOptions });
  updateCart();
  showToast(`${product.name} добавлен в корзину`);
}

function updateCart() {
  const quantity = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find(productItem => productItem.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  $('#cartCount').textContent = quantity;
  $('#mobileCartCount').textContent = quantity;
  $('#cartTitleCount').textContent = quantity ? `(${quantity})` : '';
  $('#cartSubtotal').textContent = currency(total);
  $('#cartTotal').textContent = currency(total);
  $('#cartItems').innerHTML = cart.map(item => {
    const product = products.find(productItem => productItem.id === item.id);
    const key = cartKey(item.id, item.options);
    const variant = optionsLabel(item.options);
    return `<article class="cart-row"><div class="cart-thumb"><img src="${product.image}" alt="" loading="lazy"></div><div class="cart-row-main"><h3>${product.name}</h3>${variant ? `<p class="cart-row-variant">${variant}</p>` : ''}<div class="cart-row-price">${currency(product.price)}</div><div class="cart-quantity" aria-label="Количество ${product.name}"><button type="button" data-cart-minus="${key}" aria-label="Уменьшить количество">−</button><span>${item.qty}</span><button type="button" data-cart-plus="${key}" aria-label="Увеличить количество">+</button></div></div><strong class="cart-row-total">${currency(product.price * item.qty)}</strong></article>`;
  }).join('');
  const empty = cart.length === 0;
  $('#cartEmpty').hidden = !empty;
  $('#cartSummary').hidden = empty;
  saveCart();
}

function changeQuantity(key, change) {
  const target = optionsFromKey(key);
  if (!target) return;
  const row = cart.find(item => cartKey(item.id, item.options) === cartKey(target.id, target.options));
  if (!row) return;
  row.qty += change;
  if (row.qty <= 0) cart = cart.filter(item => item !== row);
  row.qty = Math.min(99, row.qty);
  updateCart();
}

function openCart() {
  updateCart();
  openDialog($('#cartDialog'));
}

function renderProductDetails(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const optionsMarkup = Object.entries(product.options).map(([group, values]) => `
    <div class="option-group"><span class="option-title">${group === 'color' ? 'Цвет' : 'Память'}: <span data-selected-option="${group}">${modalSelection[group]}</span></span>
      <div class="option-buttons">${values.map(value => `<button class="option-button${modalSelection[group] === value ? ' active' : ''}" type="button" data-option-group="${group}" data-option-value="${value}" aria-pressed="${modalSelection[group] === value}">${value}</button>`).join('')}</div>
    </div>`).join('');
  $('#productDetails').innerHTML = `<div class="product-detail"><div class="product-detail-image"><img src="${product.image}" alt="${product.name}"></div><div class="product-detail-copy"><div class="eyebrow"><span class="eyebrow-line"></span> ${product.category.toUpperCase()}</div><div class="detail-meta"><span class="product-rating">★ ${product.rating.toFixed(1)}</span><span>·</span><span>${product.stock ? 'Есть в наличии' : 'Доступен под заказ'}</span></div><h2>${product.name}</h2><p class="detail-description">${product.description}. Техника для повседневных задач — с продуманными характеристиками и понятными возможностями.</p><div class="detail-price">${currency(product.price)}</div><div class="detail-specs">${product.specs.map(([label, value]) => `<div class="detail-spec"><span>${label}</span><span>${value}</span></div>`).join('')}</div>${optionsMarkup}<div class="detail-actions"><button class="button button-secondary" type="button" data-buy="${id}">Купить сейчас <span>→</span></button><button class="button button-primary" type="button" data-add-detail="${id}">В корзину <span>＋</span></button></div></div></div>`;
}

function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  modalProductId = id;
  modalSelection = initialOptions(product);
  renderProductDetails(id);
  openDialog($('#productDialog'));
}

function renderSearchResults(query = '') {
  const normalized = query.trim().toLocaleLowerCase('ru');
  const matches = products.filter(product => !normalized
    || `${product.name} ${product.category} ${product.description} ${product.specs.map(spec => spec.join(' ')).join(' ')}`.toLocaleLowerCase('ru').includes(normalized));
  const shown = normalized ? matches : matches.slice(0, 4);
  $('#searchCaption').textContent = normalized ? `Результаты: ${matches.length}` : 'Популярные товары';
  $('#searchResults').innerHTML = shown.length ? shown.map(product => `<article class="search-result"><button class="search-result-image" type="button" data-open-product="${product.id}" aria-label="Подробнее о товаре ${product.name}"><img src="${product.image}" alt="" loading="lazy"></button><button class="search-result-main product-title-button" type="button" data-open-product="${product.id}"><strong>${product.name}</strong><span>${product.category} · ${currency(product.price)}</span></button><button class="add-button" type="button" data-add="${product.id}">В корзину</button></article>`).join('') : '<div class="search-no-results">По этому запросу товаров нет. Попробуйте другое название.</div>';
}

function openSearch() {
  renderSearchResults('');
  openDialog($('#searchDialog'));
  requestAnimationFrame(() => $('#searchInput').focus());
}

function closeMobileMenu() {
  $('#mobileNav').hidden = true;
  $('#menuBtn').setAttribute('aria-expanded', 'false');
  $('#menuBtn').setAttribute('aria-label', 'Открыть меню');
}

function renderCheckoutSummary() {
  $('#checkoutItems').innerHTML = `<div class="checkout-summary-items">${cart.map(item => {
    const product = products.find(productItem => productItem.id === item.id);
    const variant = optionsLabel(item.options);
    return `<div class="checkout-summary-row"><span>${product.name} × ${item.qty}${variant ? `<br>${variant}` : ''}</span><strong>${currency(product.price * item.qty)}</strong></div>`;
  }).join('')}</div>`;
  const total = cart.reduce((sum, item) => sum + products.find(product => product.id === item.id).price * item.qty, 0);
  $('#checkoutTotal').textContent = currency(total);
}

function startCheckout() {
  if (!cart.length) {
    showToast('Сначала добавьте товар в корзину');
    return;
  }
  renderCheckoutSummary();
  $('#checkoutForm').hidden = false;
  $('#checkoutForm').reset();
  $('#checkoutForm').closest('.checkout-layout').hidden = false;
  $('#orderSuccess').hidden = true;
  $('.checkout-dialog .dialog-top').hidden = false;
  closeDialog('cartDialog');
  openDialog($('#checkoutDialog'));
}

function finishDemoOrder(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const formData = new FormData(form);
  const firstName = String(formData.get('name')).trim().split(/\s+/)[0];
  const orderNumber = `NX-${String(Date.now()).slice(-7)}`;
  $('#successMessage').textContent = `${firstName}, это демонстрационное подтверждение. Заказ не отправлен, данные формы не сохранялись.`;
  $('#successOrderNumber').textContent = orderNumber;
  form.closest('.checkout-layout').hidden = true;
  $('.checkout-dialog .dialog-top').hidden = true;
  $('#orderSuccess').hidden = false;
  cart = [];
  updateCart();
}

document.addEventListener('click', event => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favorite));
    return;
  }

  const addButton = event.target.closest('[data-add]');
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    return;
  }

  const addDetail = event.target.closest('[data-add-detail]');
  if (addDetail) {
    addToCart(Number(addDetail.dataset.addDetail), modalSelection);
    closeDialog('productDialog');
    return;
  }

  const buyButton = event.target.closest('[data-buy]');
  if (buyButton) {
    addToCart(Number(buyButton.dataset.buy), modalSelection);
    closeDialog('productDialog');
    openCart();
    return;
  }

  const optionButton = event.target.closest('[data-option-group]');
  if (optionButton) {
    const { optionGroup, optionValue } = optionButton.dataset;
    modalSelection[optionGroup] = optionValue;
    $$(`[data-option-group="${optionGroup}"]`, $('#productDetails')).forEach(button => {
      const active = button.dataset.optionValue === optionValue;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $(`[data-selected-option="${optionGroup}"]`, $('#productDetails')).textContent = optionValue;
    return;
  }

  const plus = event.target.closest('[data-cart-plus]');
  if (plus) { changeQuantity(plus.dataset.cartPlus, 1); return; }
  const minus = event.target.closest('[data-cart-minus]');
  if (minus) { changeQuantity(minus.dataset.cartMinus, -1); return; }

  const openProductButton = event.target.closest('[data-open-product]');
  if (openProductButton) {
    const id = Number(openProductButton.dataset.openProduct);
    if ($('#searchDialog').open) closeDialog('searchDialog');
    openProduct(id);
    return;
  }

  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) { setFilter(filterButton.dataset.filter); return; }

  const categoryButton = event.target.closest('[data-filter-category]');
  if (categoryButton) { setFilter(categoryButton.dataset.filterCategory); return; }

  const filterLink = event.target.closest('[data-filter-link]');
  if (filterLink) {
    event.preventDefault();
    setFilter(filterLink.dataset.filterLink);
    return;
  }

  if (event.target.closest('#mobileNav a')) {
    closeMobileMenu();
    return;
  }

  const ratingButton = event.target.closest('[data-rating]');
  if (ratingButton) {
    ratingFilter = Number(ratingButton.dataset.rating);
    $$('[data-rating]').forEach(button => {
      const active = button === ratingButton;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderCatalog();
    return;
  }

  const closeButton = event.target.closest('[data-close-dialog]');
  if (closeButton) { closeDialog(closeButton.dataset.closeDialog); return; }

  if (event.target.closest('#resetFilters, [data-reset-filters]')) { resetFilters(); return; }
  if (event.target.closest('#leaveFavorites')) { favoritesOnly = false; renderCatalog(); return; }
  if (event.target.closest('#showAll')) { setFilter('all'); return; }
  if (event.target.closest('#openCart, #openCartMobile')) { closeMobileMenu(); openCart(); return; }
  if (event.target.closest('#openSearch, #footerSearch')) { closeMobileMenu(); openSearch(); return; }
  if (event.target.closest('#openFavorites')) { closeMobileMenu(); openFavorites(); return; }
  if (event.target.closest('#continueShopping')) { closeDialog('cartDialog'); $('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  if (event.target.closest('#openCheckout')) { startCheckout(); return; }
  if (event.target.closest('#finishOrder')) {
    closeDialog('checkoutDialog');
    $('#checkoutForm').closest('.checkout-layout').hidden = false;
    $('#orderSuccess').hidden = true;
    $('.checkout-dialog .dialog-top').hidden = false;
    $('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Спасибо, что попробовали демо NEXUS');
    return;
  }

  if (event.target.closest('#menuBtn')) {
    const open = $('#menuBtn').getAttribute('aria-expanded') !== 'true';
    $('#menuBtn').setAttribute('aria-expanded', String(open));
    $('#menuBtn').setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    $('#mobileNav').hidden = !open;
    return;
  }

  const dialog = event.target.closest('dialog');
  if (dialog && event.target === dialog && dialog.id !== 'cartDialog') closeDialog(dialog);
  if (dialog?.id === 'cartDialog' && event.target === dialog) closeDialog(dialog);
});

$('#minPrice').addEventListener('input', renderCatalog);
$('#maxPrice').addEventListener('input', renderCatalog);
$('#inStockOnly').addEventListener('change', renderCatalog);
$('#sortSelect').addEventListener('change', renderCatalog);
$('#searchInput').addEventListener('input', event => renderSearchResults(event.target.value));
$('#checkoutForm').addEventListener('submit', finishDemoOrder);
$('#searchDialog').addEventListener('close', () => { $('#searchInput').value = ''; });
$('#menuBtn').addEventListener('keydown', event => { if (event.key === 'Escape') closeMobileMenu(); });

renderFavoritesCount();
renderFeatured();
renderCatalog();
updateCart();
