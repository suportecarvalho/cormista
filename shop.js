// =========================================
// COR MISTA 3D — SHOP LOGIC (SUPRO 2 EXACT REPLICA)
// =========================================

// --- Database of all 27 Catalog Products (from Supro 2 Shop) ---
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Aerona Hanging Chair",
    category: "furniture",
    category_name: "Móveis",
    price: 499.90,
    old_price: null,
    rating: 4.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2018/06/1a-2-400x400.jpg",
    desc: "Cadeira suspensa de design minimalista escandinavo com estrutura reforçada e almofada premium para máximo conforto.",
    product_link: "product.html"
  },
  {
    id: 2,
    title: "Phoenix Slide Table",
    category: "furniture",
    category_name: "Móveis",
    price: 139.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2018/06/2a-1-400x400.jpg",
    desc: "Mesa lateral com encaixe deslizante para sofás e poltronas, unindo praticidade e estética orgânica em madeira maciça.",
    product_link: "product.html"
  },
  {
    id: 3,
    title: "Silas Dining Chair",
    category: "furniture",
    category_name: "Móveis",
    price: 29.90,
    old_price: 39.90,
    rating: 4.5,
    badge: "Sale",
    badge_type: "sale",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2018/06/3a-2-400x400.jpg",
    desc: "Cadeira de jantar com linhas limpas e encosto ergonômico, ideal para ambientes sofisticados e contemporâneos.",
    product_link: "product.html"
  },
  {
    id: 4,
    title: "Lucas Beside Table",
    category: "furniture",
    category_name: "Móveis",
    price: 49.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2018/06/4a-2-400x400.jpg",
    desc: "Mesa de cabeceira compacta com gaveta discreta e nicho inferior para livros, organização elegante para seu quarto.",
    product_link: "product.html"
  },
  {
    id: 5,
    title: "Berezi Stool",
    category: "furniture",
    category_name: "Móveis",
    price: 69.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2018/06/5a-1-400x400.jpg",
    desc: "Banqueta com tripé em formato geométrico esculpido e assento confortável, perfeita para bancadas e áreas gourmet.",
    product_link: "product.html"
  },
  {
    id: 6,
    title: "Indifera Storage Basket",
    category: "tableware",
    category_name: "Organização & Acessórios",
    price: 59.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2018/06/6a-1-400x400.jpg",
    desc: "Cesto organizador tramado à mão em fibras ecológicas com alças de apoio, trazendo aconchego e ordem aos ambientes.",
    product_link: "product.html"
  },
  {
    id: 7,
    title: "Korea Fabric Chair",
    category: "furniture",
    category_name: "Móveis",
    price: 269.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/3a-400x400.jpg",
    desc: "Poltrona estofada em tecido boucle suave com pés palito em metal anodizado preto, um ícone do design oriental moderno.",
    product_link: "product.html"
  },
  {
    id: 8,
    title: "Claure Austin Lover Round Chair",
    category: "furniture",
    category_name: "Móveis",
    price: 59.90,
    old_price: null,
    rating: 5.0,
    badge: "Hot",
    badge_type: "hot",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/8a-400x400.jpg",
    desc: "Poltrona circular envolvente com base giratória silenciosa e acabamento aveludado para cantos de leitura relaxantes.",
    product_link: "product.html"
  },
  {
    id: 9,
    title: "Simple Board Combine Book Shelf",
    category: "furniture",
    category_name: "Móveis",
    price: 149.90,
    old_price: 179.90,
    rating: 5.0,
    badge: "Sale",
    badge_type: "sale",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/9a-400x400.jpg",
    desc: "Estante modular suspensa de encaixe rápido personalizável, ideal para exibir coleções, livros e peças decorativas.",
    product_link: "product.html"
  },
  {
    id: 10,
    title: "Linear Stem Cushion",
    category: "decor",
    category_name: "Decoração",
    price: 29.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/1a-1-400x400.jpg",
    desc: "Almofada decorativa com estampa botânica linear em jacquard premium e zíper oculto lavável.",
    product_link: "product.html"
  },
  {
    id: 11,
    title: "Eve Asymmetric Planter",
    category: "decor",
    category_name: "Decoração",
    price: 59.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/3a-1-400x400.jpg",
    desc: "Vaso cerâmico assimétrico esculpido para plantas suculentas e folhagens, criando pontos de destaque em prateleiras.",
    product_link: "product.html"
  },
  {
    id: 12,
    title: "Flip Clock",
    category: "decor",
    category_name: "Decoração",
    price: 29.90,
    old_price: null,
    rating: 4.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/5a-1-400x400.jpg",
    desc: "Relógio de mesa mecânico estilo retro com display flip numérico automático de alta precisão.",
    product_link: "product.html"
  },
  {
    id: 13,
    title: "Spot Flower Plant Pot",
    category: "decor",
    category_name: "Decoração",
    price: 39.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/6a-1-400x400.jpg",
    desc: "Cachepot com textura pontilhada artesanal em tons terrosos quentes para salas, escritórios e halls.",
    product_link: "product.html"
  },
  {
    id: 14,
    title: "Painted Beech Songbird",
    category: "decor",
    category_name: "Decoração",
    price: 49.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/8a-1-400x400.jpg",
    desc: "Pássaro decorativo em madeira de faia polida pintada à mão, símbolo de harmonia e design clássico nórdico.",
    product_link: "product.html"
  },
  {
    id: 15,
    title: "Dancing Bear Cushion",
    category: "decor",
    category_name: "Decoração",
    price: 29.90,
    old_price: null,
    rating: 5.0,
    badge: "Hot",
    badge_type: "hot",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/2a_1-400x400.jpg",
    desc: "Almofada lúdica com bordado de urso em linho puro, ideal para quartos infantis e salas criativas.",
    product_link: "product.html"
  },
  {
    id: 16,
    title: "Bronze Pot Set",
    category: "decor",
    category_name: "Decoração",
    price: 55.00,
    old_price: 65.00,
    rating: 5.0,
    badge: "Sale",
    badge_type: "sale",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/3a_1-400x400.jpg",
    desc: "Conjunto com três potes em metal com banho bronze acetinado e tampa hermética para uso na cozinha ou toucador.",
    product_link: "product.html"
  },
  // --- Page 2 Products (Loaded via "DISCOVER MORE" or Page 2) ---
  {
    id: 17,
    title: "O-Tidy Desk Organiser",
    category: "tableware",
    category_name: "Organização & Acessórios",
    price: 39.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/1a-400x400.jpg",
    desc: "Organizador de mesa circular com compartimentos para canetas, clipes e celular em biopolímero fosco.",
    product_link: "product.html"
  },
  {
    id: 18,
    title: "Wooden Mortar Pestle",
    category: "tableware",
    category_name: "Organização & Acessórios",
    price: 45.00,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/2a-400x400.jpg",
    desc: "Pilão tradicional em madeira nobre torneada para moagem de temperos e especiarias com máxima durabilidade.",
    product_link: "product.html"
  },
  {
    id: 19,
    title: "Stoneware Vase",
    category: "decor",
    category_name: "Decoração",
    price: 62.00,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/4a-400x400.jpg",
    desc: "Vaso em grés rústico com acabamento fosco e curvas elegantes para arranjos secos e frescos.",
    product_link: "product.html"
  },
  {
    id: 20,
    title: "Artificial Lotus Plant",
    category: "decor",
    category_name: "Decoração",
    price: 34.90,
    old_price: null,
    rating: 4.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/5a-400x400.jpg",
    desc: "Planta lótus decorativa permanente com acabamento ultra realista e vaso cerâmico incluso.",
    product_link: "product.html"
  },
  {
    id: 21,
    title: "Woodrow Waste Bin",
    category: "tableware",
    category_name: "Organização & Acessórios",
    price: 49.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/6a-400x400.jpg",
    desc: "Cesto de lixo em madeira curvada natural com alça integrada, sofisticado para escritórios e dormitórios.",
    product_link: "product.html"
  },
  {
    id: 22,
    title: "Rabbit Chair",
    category: "furniture",
    category_name: "Móveis",
    price: 189.90,
    old_price: null,
    rating: 5.0,
    badge: "Hot",
    badge_type: "hot",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/7a-400x400.jpg",
    desc: "Cadeira escultural no formato de orelhas de coelho, assinada por designers contemporâneos para ambientes exclusivos.",
    product_link: "product.html"
  },
  {
    id: 23,
    title: "Torq Nutcracker",
    category: "lighting",
    category_name: "Utilidades",
    price: 29.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/8a-400x400.jpg",
    desc: "Quebra-nozes de precisão com mecanismo de rosca helicoidal em aço inox escovado.",
    product_link: "product.html"
  },
  {
    id: 24,
    title: "Ico Bottle Opener",
    category: "lighting",
    category_name: "Utilidades",
    price: 19.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/9a-1-400x400.jpg",
    desc: "Abridor de garrafas icosaedro em ferro fundido, uma joia geométrica para seu bar ou bancada.",
    product_link: "product.html"
  },
  {
    id: 25,
    title: "Ocaso Candle Snuffer",
    category: "lighting",
    category_name: "Utilidades",
    price: 24.90,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/1a-2-400x400.jpg",
    desc: "Abafador de velas elegante com haste longa em latão maciço, para apagar chamas com sutileza sem fumaça.",
    product_link: "product.html"
  },
  {
    id: 26,
    title: "Flora Vase",
    category: "decor",
    category_name: "Decoração",
    price: 79.90,
    old_price: 95.00,
    rating: 5.0,
    badge: "Sale",
    badge_type: "sale",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/2a-2-400x400.jpg",
    desc: "Vaso de vidro soprado artesanal com gradiente âmbar, refletindo a luz natural com beleza singular.",
    product_link: "product.html"
  },
  {
    id: 27,
    title: "Pill Mortar & Pestle",
    category: "tableware",
    category_name: "Organização & Acessórios",
    price: 38.00,
    old_price: null,
    rating: 5.0,
    badge: "",
    badge_type: "",
    image: "https://drfurithemes.com/supro2/wp-content/uploads/sites/13/2017/12/3a-2-400x400.jpg",
    desc: "Conjunto pilão ergonômico em cerâmica acetinada e pilão em carvalho maciço para trituração fina.",
    product_link: "product.html"
  }
];

// --- State Management ---
let currentCategory = 'all';
let currentSort = 'date';
let currentView = 'grid'; // 'grid' | 'list'
let currentPage = 1;
const ITEMS_PER_PAGE = 16;
let isAllLoaded = false;
let wishlist = new Set();

// Load Wishlist from LocalStorage
try {
  const savedWl = localStorage.getItem('cormista_wishlist');
  if (savedWl) wishlist = new Set(JSON.parse(savedWl));
} catch (e) {}

// --- Currency Formatter ---
function formatPriceBRL(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// --- Star Rating Generator ---
function renderStarRating(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    const isFilled = i < fullStars;
    stars += `
      <svg viewBox="0 0 24 24" fill="${isFilled ? '#f5a623' : '#e0e0e0'}">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    `;
  }
  return `<div class="star-rating" title="Avaliação: ${rating.toFixed(1)} de 5">${stars}</div>`;
}

// --- Toast Feedback ---
function showShopToast(message) {
  let toast = document.getElementById('shop-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'shop-toast';
    toast.className = 'toast-notify';
    document.body.appendChild(toast);
  }
  toast.innerHTML = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// --- Filter & Sort Processor ---
function getProcessedProducts() {
  let list = [...PRODUCTS_DATA];

  // Category Filter
  if (currentCategory !== 'all') {
    list = list.filter(p => p.category === currentCategory);
  }

  // Sorting Logic
  switch (currentSort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'popularity':
      list.sort((a, b) => (b.badge === 'Hot' ? 1 : 0) - (a.badge === 'Hot' ? 1 : 0));
      break;
    case 'date':
    case 'default':
    default:
      list.sort((a, b) => b.id - a.id);
      break;
  }

  return list;
}

// --- Render Product Cards ---
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('product-count');
  const discoverBtn = document.getElementById('btn-discover-more');
  const page1Btn = document.getElementById('page-1-btn');
  const page2Btn = document.getElementById('page-2-btn');

  if (!grid) return;

  const processed = getProcessedProducts();
  if (countEl) countEl.textContent = processed.length;

  // Determine how many items to display
  let displayCount;
  if (isAllLoaded) {
    displayCount = processed.length;
  } else {
    displayCount = currentPage === 1 ? Math.min(ITEMS_PER_PAGE, processed.length) : processed.length;
  }

  const visibleItems = processed.slice(0, displayCount);

  if (visibleItems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #777;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 style="font-size: 18px; color: #333; margin-bottom: 6px;">Nenhum produto encontrado</h3>
        <p style="font-size: 14px;">Tente selecionar outra categoria ou filtro.</p>
      </div>
    `;
    if (discoverBtn) discoverBtn.style.display = 'none';
    return;
  }

  grid.innerHTML = visibleItems.map(p => {
    const isWished = wishlist.has(p.id);
    const badgeHtml = p.badge ? `
      <div class="ribbons">
        <span class="ribbon ${p.badge_type}">${p.badge}</span>
      </div>
    ` : '';

    const priceHtml = p.old_price ? `
      <span class="price">
        <del>${formatPriceBRL(p.old_price)}</del>
        <ins>${formatPriceBRL(p.price)}</ins>
      </span>
    ` : `
      <span class="price">${formatPriceBRL(p.price)}</span>
    `;

    return `
      <li class="supro-product-card" data-id="${p.id}" data-category="${p.category}">
        <div class="un-product-thumbnail">
          ${badgeHtml}
          <a href="${p.product_link}" aria-label="${p.title}">
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
          </a>

          <!-- Hover Quick Action Buttons (Heart Wishlist & Quick View) -->
          <div class="actions-button">
            <button class="action-icon-btn btn-wishlist ${isWished ? 'active' : ''}" data-id="${p.id}" aria-label="Favoritar produto" title="${isWished ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button class="action-icon-btn btn-quick-view" data-id="${p.id}" aria-label="Visualização rápida" title="Visualização rápida">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>

          <!-- Bottom Add to Cart Overlay for Desktop Grid -->
          <button class="product-add-overlay btn-card-add" data-id="${p.id}">
            Adicionar ao Carrinho
          </button>
        </div>

        <div class="un-product-details">
          <div class="product-category-tag">${p.category_name}</div>
          <h3 class="product-card-title">
            <a href="${p.product_link}">${p.title}</a>
          </h3>
          ${renderStarRating(p.rating)}
          ${priceHtml}

          <!-- List View Extra Content -->
          <p class="product-list-desc">${p.desc}</p>
          <div class="product-list-actions">
            <button class="list-add-btn btn-card-add" data-id="${p.id}">
              Adicionar ao Carrinho
            </button>
            <button class="list-icon-btn btn-wishlist ${isWished ? 'active' : ''}" data-id="${p.id}" aria-label="Favoritar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button class="list-icon-btn btn-quick-view" data-id="${p.id}" aria-label="Visualização rápida">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;
  }).join('');

  // Discover More Button State
  if (discoverBtn) {
    if (visibleItems.length >= processed.length || processed.length <= ITEMS_PER_PAGE) {
      discoverBtn.style.display = 'none';
    } else {
      discoverBtn.style.display = 'inline-flex';
      discoverBtn.innerHTML = `
        <span class="btn-text">DISCOVER MORE</span>
        <span class="spinner-icon"></span>
      `;
    }
  }

  // Update Page Number Buttons
  if (page1Btn && page2Btn) {
    if (processed.length <= ITEMS_PER_PAGE) {
      page2Btn.style.display = 'none';
    } else {
      page2Btn.style.display = 'flex';
    }
    page1Btn.classList.toggle('active', currentPage === 1 && !isAllLoaded);
    page2Btn.classList.toggle('active', currentPage === 2 || isAllLoaded);
  }

  // Attach Card Event Listeners
  attachCardEvents();
}

// --- Attach Card Action Events ---
function attachCardEvents() {
  // Add to cart buttons
  document.querySelectorAll('.btn-card-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id, 10);
      const product = PRODUCTS_DATA.find(p => p.id === id);
      if (!product) return;

      if (typeof window.addToCart === 'function') {
        window.addToCart(product.title, product.price, product.image);
      }
      showShopToast(`<strong>${product.title}</strong> adicionado ao carrinho!`);
    });
  });

  // Wishlist buttons
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id, 10);
      const product = PRODUCTS_DATA.find(p => p.id === id);
      if (!product) return;

      if (wishlist.has(id)) {
        wishlist.delete(id);
        showShopToast(`<strong>${product.title}</strong> removido dos favoritos.`);
      } else {
        wishlist.add(id);
        showShopToast(`<strong>${product.title}</strong> salvo nos seus favoritos! ❤️`);
      }

      try {
        localStorage.setItem('cormista_wishlist', JSON.stringify([...wishlist]));
      } catch (err) {}

      renderProducts();
    });
  });

  // Quick View buttons
  document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id, 10);
      openQuickViewModal(id);
    });
  });
}

// --- Quick View Modal Management ---
function openQuickViewModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const imgEl = document.getElementById('qv-img');
  const titleEl = document.getElementById('qv-title');
  const ratingEl = document.getElementById('qv-rating');
  const priceEl = document.getElementById('qv-price');
  const descEl = document.getElementById('qv-desc');
  const addBtn = document.getElementById('qv-add-btn');
  const qtyInput = document.getElementById('qv-qty');

  if (!modal) return;

  if (imgEl) imgEl.src = product.image;
  if (titleEl) titleEl.textContent = product.title;
  if (ratingEl) ratingEl.innerHTML = renderStarRating(product.rating);

  if (priceEl) {
    if (product.old_price) {
      priceEl.innerHTML = `<del>${formatPriceBRL(product.old_price)}</del> <ins>${formatPriceBRL(product.price)}</ins>`;
    } else {
      priceEl.innerHTML = formatPriceBRL(product.price);
    }
  }

  if (descEl) descEl.textContent = product.desc;
  if (qtyInput) qtyInput.value = 1;

  if (addBtn) {
    addBtn.onclick = () => {
      const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
      for (let i = 0; i < qty; i++) {
        if (typeof window.addToCart === 'function') {
          window.addToCart(product.title, product.price, product.image);
        }
      }
      showShopToast(`Adicionado: <strong>${qty}× ${product.title}</strong> ao carrinho!`);
      closeQuickViewModal();
    };
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// --- Initialize Interactive Events ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Render
  renderProducts();

  // 2. Sorting Dropdown Toggle & Selection
  const sortBtn = document.getElementById('sort-btn');
  const sortMenu = document.getElementById('sort-menu');
  const sortByText = document.querySelector('.sort-by-text');

  if (sortBtn && sortMenu) {
    sortBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sortMenu.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      sortMenu.classList.remove('open');
    });

    sortMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sortType = link.dataset.sort;
        currentSort = sortType;
        if (sortByText) sortByText.textContent = link.textContent;

        sortMenu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        sortMenu.classList.remove('open');

        renderProducts();
      });
    });
  }

  // 3. Grid vs List View Switcher
  const viewBtns = document.querySelectorAll('.shop-view .view-btn');
  const productsGrid = document.getElementById('products-grid');

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      currentView = view;
      viewBtns.forEach(b => b.classList.remove('current'));
      btn.classList.add('current');

      if (productsGrid) {
        if (view === 'list') {
          productsGrid.classList.add('shop-view-list');
        } else {
          productsGrid.classList.remove('shop-view-list');
        }
      }
    });
  });

  // 4. Category Tabs Filter
  const catBtns = document.querySelectorAll('.shop-category-tabs .shop-cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.dataset.category;
      currentPage = 1;
      isAllLoaded = false;
      renderProducts();
    });
  });

  // 5. Discover More Button (Infinite scroll loader simulation)
  const discoverBtn = document.getElementById('btn-discover-more');
  if (discoverBtn) {
    discoverBtn.addEventListener('click', () => {
      discoverBtn.classList.add('loading');
      setTimeout(() => {
        discoverBtn.classList.remove('loading');
        isAllLoaded = true;
        renderProducts();
        showShopToast('Todos os produtos do catálogo foram carregados!');
      }, 400);
    });
  }

  // 6. Pagination Number Buttons
  const page1Btn = document.getElementById('page-1-btn');
  const page2Btn = document.getElementById('page-2-btn');

  if (page1Btn) {
    page1Btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = 1;
      isAllLoaded = false;
      renderProducts();
      window.scrollTo({ top: 120, behavior: 'smooth' });
    });
  }

  if (page2Btn) {
    page2Btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = 2;
      isAllLoaded = true;
      renderProducts();
      window.scrollTo({ top: 120, behavior: 'smooth' });
    });
  }

  // 7. Quick View Modal Close & Quantity Controls
  const qvClose = document.getElementById('quick-view-close');
  const qvOverlay = document.getElementById('quick-view-overlay');
  const qvQtyMinus = document.getElementById('qv-qty-minus');
  const qvQtyPlus = document.getElementById('qv-qty-plus');
  const qvQtyInput = document.getElementById('qv-qty');

  if (qvClose) qvClose.addEventListener('click', closeQuickViewModal);
  if (qvOverlay) qvOverlay.addEventListener('click', closeQuickViewModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeQuickViewModal();
  });

  if (qvQtyMinus && qvQtyInput) {
    qvQtyMinus.addEventListener('click', () => {
      let val = parseInt(qvQtyInput.value, 10) || 1;
      if (val > 1) qvQtyInput.value = val - 1;
    });
  }

  if (qvQtyPlus && qvQtyInput) {
    qvQtyPlus.addEventListener('click', () => {
      let val = parseInt(qvQtyInput.value, 10) || 1;
      if (val < 99) qvQtyInput.value = val + 1;
    });
  }

  // 8. Support query param ?orderby=date or category filter from URL
  const urlParams = new URLSearchParams(window.location.search);
  const orderbyParam = urlParams.get('orderby');
  const catParam = urlParams.get('category');

  if (orderbyParam) {
    const link = document.querySelector(`.sort-dropdown-menu a[data-sort="${orderbyParam}"]`);
    if (link) {
      link.click();
    }
  }

  if (catParam) {
    const catBtn = document.querySelector(`.shop-cat-btn[data-category="${catParam}"]`);
    if (catBtn) {
      catBtn.click();
    }
  }
});
