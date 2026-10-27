// =========================================
// Cor Mista 3D — APP JS (Supro Home-Simple Effects - pt-BR)
// =========================================

// --- Cart State & Management ---
let cart = [];
try {
  const savedCart = localStorage.getItem('cormista_cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {}

const cartBadge = document.getElementById('cart-badge');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawerItems = document.getElementById('cart-drawer-items');
const cartDrawerEmpty = document.getElementById('cart-drawer-empty');
const cartDrawerCount = document.getElementById('cart-drawer-count');
const cartDrawerSubtotal = document.getElementById('cart-drawer-subtotal');
const btnCart = document.getElementById('btn-cart');
const btnCloseCart = document.getElementById('btn-close-cart');

function formatCurrencyBRL(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function updateCartUI() {
  try {
    localStorage.setItem('cormista_cart', JSON.stringify(cart));
  } catch (e) {}

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartBadge) cartBadge.textContent = totalCount;
  if (cartDrawerCount) cartDrawerCount.textContent = totalCount;
  if (cartDrawerSubtotal) cartDrawerSubtotal.textContent = formatCurrencyBRL(totalPrice);

  if (cartBadge) {
    cartBadge.style.transform = 'scale(1.35)';
    setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
  }

  if (!cartDrawerItems || !cartDrawerEmpty) return;

  if (cart.length === 0) {
    cartDrawerEmpty.style.display = 'flex';
    cartDrawerItems.innerHTML = '';
  } else {
    cartDrawerEmpty.style.display = 'none';
    cartDrawerItems.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" />
        <div class="cart-item__info">
          <span class="cart-item__name">${item.name}</span>
          <span class="cart-item__price">${item.qty} × ${formatCurrencyBRL(item.price)}</span>
        </div>
        <button class="cart-item__remove" data-index="${idx}" aria-label="Remover produto">&times;</button>
      </div>
    `).join('');

    cartDrawerItems.querySelectorAll('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index, 10);
        cart.splice(index, 1);
        updateCartUI();
      });
    });
  }
}

function addToCart(name, price, img) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  updateCartUI();
}
window.addToCart = addToCart;

function openCartDrawer() {
  if (cartDrawer) cartDrawer.classList.add('open');
  if (cartDrawerOverlay) cartDrawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  if (cartDrawer) cartDrawer.classList.remove('open');
  if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;

btnCart?.addEventListener('click', openCartDrawer);
btnCloseCart?.addEventListener('click', closeCartDrawer);
cartDrawerOverlay?.addEventListener('click', closeCartDrawer);
updateCartUI();

// Add to cart buttons on product cards
document.querySelectorAll('.product-card').forEach(card => {
  const addBtn = card.querySelector('.product-card__add');
  if (!addBtn) return;

  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const name = card.querySelector('.product-card__name')?.textContent.trim() || 'Produto';
    const priceText = card.querySelector('.product-card__price')?.textContent || '0';
    // Parse Brazilian Real e.g. R$ 499,90 -> 499.90
    const cleanNum = priceText.replace(/[^0-9,]/g, '').replace(',', '.');
    const priceNum = parseFloat(cleanNum) || 99.90;
    const img = card.querySelector('.product-card__img')?.src || '';

    addToCart(name, priceNum, img);

    const orig = addBtn.textContent;
    addBtn.textContent = 'ADICIONADO ✓';
    addBtn.style.color = '#C8392B';
    setTimeout(() => {
      addBtn.textContent = orig;
      addBtn.style.color = '';
    }, 1400);
  });
});

// Hero buy now button
const heroBuyBtn = document.getElementById('btn-hero-buy');
if (heroBuyBtn) {
  heroBuyBtn.addEventListener('click', () => {
    const heroImg = document.querySelector('.hero__img')?.src || '';
    addToCart('Enfeites de Natal Decorativos', 149.90, heroImg);
    heroBuyBtn.textContent = 'ADICIONADO ✓';
    setTimeout(() => { heroBuyBtn.textContent = 'COMPRAR AGORA'; }, 1400);
  });
}

// --- Wishlist ---
document.querySelectorAll('[id^="wish-"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.classList.toggle('wishlisted');
  });
});

// --- Search Modal (Supro Style) ---
const searchModal = document.getElementById('search-modal');
const searchModalOverlay = document.getElementById('search-modal-overlay');
const btnSearch = document.getElementById('btn-search');
const btnCloseSearch = document.getElementById('btn-close-search');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const productsData = [
  { name: 'Cadeira suspensa Aerona', price: 'R$ 499,90', id: 'prod-1', img: 'product_1_aerona.png' },
  { name: 'Mesa deslizante Phoenix', price: 'R$ 139,90', id: 'prod-2', img: 'product_2_phoenix.png' },
  { name: 'Cadeira de jantar Silas', price: 'R$ 29,90', id: 'prod-3', img: 'product_3_silas.png' },
  { name: 'Mesa de cabeceira Lucas', price: 'R$ 219,00', id: 'prod-4', img: 'product_4_nightstand.png' },
  { name: 'Banco Mosaico Circular', price: 'R$ 189,00', id: 'prod-5', img: 'product_5_stool.png' },
  { name: 'Cesto Organizador Tecido', price: 'R$ 119,00', id: 'prod-6', img: 'product_6_basket.png' },
];

function openSearch() {
  searchModal.classList.add('open');
  searchModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput.focus(), 150);
}

function closeSearch() {
  searchModal.classList.remove('open');
  searchModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  searchInput.value = '';
  searchResults.innerHTML = '';
}

btnSearch?.addEventListener('click', openSearch);
btnCloseSearch?.addEventListener('click', closeSearch);
searchModalOverlay?.addEventListener('click', closeSearch);

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }
    const matched = productsData.filter(p => p.name.toLowerCase().includes(query));
    if (matched.length === 0) {
      searchResults.innerHTML = '<p style="color:#888; padding:12px; grid-column:1/-1;">Nenhum produto encontrado.</p>';
      return;
    }
    searchResults.innerHTML = matched.map(p => `
      <a href="index.html#${p.id}" class="search-result-item" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}" />
        <div>
          <p class="search-result-item__name">${p.name}</p>
          <p class="search-result-item__price">${p.price}</p>
        </div>
      </a>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', (ev) => {
        ev.preventDefault();
        const targetId = item.dataset.id;
        closeSearch();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `index.html#${targetId}`;
        }
      });
    });
  });
}

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearch();
    closeCartDrawer();
    closeNav();
  }
});

// --- Mobile Nav Drawer ---
const mobileNav = document.getElementById('mobile-nav');
const mobileOverlay = document.getElementById('mobile-nav-overlay');
const menuBtn = document.getElementById('btn-menu');

function openNav() {
  if (mobileNav) mobileNav.classList.add('open');
  if (mobileOverlay) mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  if (mobileNav) mobileNav.classList.remove('open');
  if (mobileOverlay) mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

menuBtn?.addEventListener('click', openNav);
mobileOverlay?.addEventListener('click', closeNav);
document.querySelectorAll('.mobile-nav__link').forEach(a => a.addEventListener('click', closeNav));

// --- Filter Tabs ---
const filterTabs = document.querySelectorAll('.filter-tab');
const productCards = document.querySelectorAll('.product-card');

function applyFilter(filter) {
  filterTabs.forEach(t => {
    if (t.dataset.filter === filter) {
      t.classList.add('filter-tab--active');
    } else {
      t.classList.remove('filter-tab--active');
    }
  });

  productCards.forEach((card, i) => {
    const cat = card.dataset.category;
    const show = filter === 'all' || filter === 'bestselling' || cat === filter;

    if (show) {
      card.classList.remove('hidden');
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 55);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(8px)';
      setTimeout(() => card.classList.add('hidden'), 280);
    }
  });
}

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    applyFilter(tab.dataset.filter);
  });
});

// --- Navigation Active Tab & Scrollspy Management ---
const navLinks = document.querySelectorAll('.header__nav .nav-link');
const dropdownLinks = document.querySelectorAll('.dropdown-link');
let isManualNavigation = false;
let manualNavTimeout = null;

function setActiveNavLink(targetLink) {
  if (!targetLink) return;
  navLinks.forEach(link => link.classList.remove('nav-link--active'));
  targetLink.classList.add('nav-link--active');
}

// Click on desktop nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    setActiveNavLink(link);
    isManualNavigation = true;
    clearTimeout(manualNavTimeout);
    manualNavTimeout = setTimeout(() => { isManualNavigation = false; }, 900);

    if (href && href.startsWith('#') && href.length > 1) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Click on dropdown links (activates the parent nav-link)
dropdownLinks.forEach(dropLink => {
  dropLink.addEventListener('click', (e) => {
    const parentNavItem = dropLink.closest('.nav-item');
    if (parentNavItem) {
      const parentNavLink = parentNavItem.querySelector('.nav-link');
      if (parentNavLink) {
        setActiveNavLink(parentNavLink);
        isManualNavigation = true;
        clearTimeout(manualNavTimeout);
        manualNavTimeout = setTimeout(() => { isManualNavigation = false; }, 900);
      }
    }
    const href = dropLink.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1 && !dropLink.hasAttribute('data-filter')) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Logo click resets to Início
const logo = document.querySelector('.header__logo');
if (logo) {
  logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const inicioLink = document.querySelector('.header__nav .nav-link[href="#hero"]');
    if (inicioLink) setActiveNavLink(inicioLink);
  });
}

// Scrollspy: updates active tab while scrolling
function updateScrollspy() {
  if (isManualNavigation) return;
  const scrollY = window.scrollY;

  if (scrollY < 300) {
    const inicio = document.querySelector('.header__nav .nav-link[href="#hero"]');
    if (inicio && !inicio.classList.contains('nav-link--active')) setActiveNavLink(inicio);
    return;
  }

  const sections = [
    { el: document.getElementById('products'), link: document.querySelector('.header__nav .nav-link[href="#products"]') },
    { el: document.getElementById('categories'), link: document.querySelector('.header__nav .nav-link[href="#categories"]') },
    { el: document.getElementById('info-bar'), link: document.querySelector('.header__nav .nav-link[href="#info-bar"]') },
  ].filter(s => s.el && s.link);

  let currentLink = null;
  const triggerPoint = window.innerHeight * 0.4;

  for (let i = sections.length - 1; i >= 0; i--) {
    const rect = sections[i].el.getBoundingClientRect();
    if (rect.top <= triggerPoint) {
      currentLink = sections[i].link;
      break;
    }
  }

  if (currentLink && !currentLink.classList.contains('nav-link--active')) {
    setActiveNavLink(currentLink);
  }
}

// Dropdown filter links
document.querySelectorAll('.dropdown-link[data-filter]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;
    applyFilter(filter);
    const prodSec = document.getElementById('products');
    if (prodSec) prodSec.scrollIntoView({ behavior: 'smooth' });
    const lojaLink = document.querySelector('.header__nav .nav-link[href="#products"]');
    if (lojaLink) setActiveNavLink(lojaLink);
  });
});

// --- Category click → scroll to filtered products ---
const catFilterMap = { living: 'furniture', decor: 'all', kitchen: 'tableware', bed: 'bed' };
document.querySelectorAll('.category').forEach(cat => {
  cat.addEventListener('click', () => {
    const key = cat.id.replace('cat-', '');
    const filter = catFilterMap[key] || 'all';
    applyFilter(filter);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    const lojaLink = document.querySelector('.header__nav .nav-link[href="#products"]');
    if (lojaLink) setActiveNavLink(lojaLink);
  });
});

// --- Intersection Observer (card fade-in) ---
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

productCards.forEach(c => obs.observe(c));

// --- Sticky Header Effect (Fixo com Tamanho Grande) ---
const header = document.getElementById('header');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Mantém o menu fixo e grande, apenas adicionando sombra suave ao rolar
  if (header) header.classList.toggle('scrolled', scrollY > 10);
  if (backToTop) backToTop.classList.toggle('visible', scrollY > 300);
  updateScrollspy();
});

// --- Back to Top ---
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const inicioLink = document.querySelector('.header__nav .nav-link[href="#hero"]');
  if (inicioLink) setActiveNavLink(inicioLink);
});

// --- Destaque Hero: Enfeites de Natal (Slide fixo único) ---
console.log('Cor Mista 3D — Aplicativo 100% em pt-BR e pronto');
