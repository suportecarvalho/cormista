// =========================================
// SUPRO. - LÓGICA DA PÁGINA DO PRODUTO (AERONA)
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Galeria de Fotos & Miniaturas
  const mainImg = document.getElementById('main-product-img');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const targetSrc = thumb.getAttribute('data-src');
      if (!targetSrc || !mainImg) return;

      thumbs.forEach(t => t.classList.remove('gallery-thumb--active'));
      thumb.classList.add('gallery-thumb--active');

      mainImg.style.opacity = '0.3';
      setTimeout(() => {
        mainImg.src = targetSrc;
        mainImg.style.opacity = '1';
      }, 150);
    });
  });

  // 2. Lightbox / Zoom da Imagem
  const btnZoom = document.getElementById('btn-zoom');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox() {
    if (!lightboxModal || !mainImg) return;
    lightboxImg.src = mainImg.src;
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnZoom) btnZoom.addEventListener('click', openLightbox);
  if (mainImg) mainImg.addEventListener('click', openLightbox);
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 3. Controle de Quantidade
  const qtyInput = document.getElementById('prod-quantity');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');

  if (qtyMinus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val > 1) {
        qtyInput.value = val - 1;
      }
    });
  }

  if (qtyPlus && qtyInput) {
    qtyPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val < 99) {
        qtyInput.value = val + 1;
      }
    });
  }

  // 4. Adicionar ao Carrinho & Comprar Agora
  const btnSingleAdd = document.getElementById('btn-single-add');
  const btnSingleBuyNow = document.getElementById('btn-single-buy-now');

  if (btnSingleAdd) {
    btnSingleAdd.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value, 10) || 1;
      for (let i = 0; i < qty; i++) {
        if (typeof window.addToCart === 'function') {
          window.addToCart('Cadeira suspensa Aerona', 499.90, 'aerona_gallery_1.jpg');
        }
      }
      btnSingleAdd.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        ADICIONADO (${qty}) ✓
      `;
      setTimeout(() => {
        btnSingleAdd.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          ADICIONAR AO CARRINHO
        `;
      }, 1600);
    });
  }

  if (btnSingleBuyNow) {
    btnSingleBuyNow.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value, 10) || 1;
      for (let i = 0; i < qty; i++) {
        if (typeof window.addToCart === 'function') {
          window.addToCart('Cadeira suspensa Aerona', 499.90, 'aerona_gallery_1.jpg');
        }
      }
      if (typeof window.openCartDrawer === 'function') {
        window.openCartDrawer();
      } else {
        const cartDrawer = document.getElementById('cart-drawer');
        const cartOverlay = document.getElementById('cart-drawer-overlay');
        if (cartDrawer && cartOverlay) {
          cartDrawer.classList.add('open');
          cartOverlay.classList.add('open');
        }
      }
    });
  }

  // 5. Lista de Desejos & Comparar
  const btnWishlistSingle = document.getElementById('btn-wishlist-single');
  const wishlistText = document.getElementById('wishlist-text');
  let isWishlisted = false;

  if (btnWishlistSingle) {
    btnWishlistSingle.addEventListener('click', () => {
      isWishlisted = !isWishlisted;
      btnWishlistSingle.classList.toggle('active', isWishlisted);
      if (isWishlisted) {
        wishlistText.textContent = 'Adicionado aos favoritos ♥';
        btnWishlistSingle.style.color = '#be363a';
        showToast('Cadeira suspensa Aerona foi adicionada à sua Lista de Desejos!');
      } else {
        wishlistText.textContent = 'Adicionar à lista de desejos';
        btnWishlistSingle.style.color = '';
        showToast('Removido da Lista de Desejos.');
      }
    });
  }

  const btnCompareSingle = document.getElementById('btn-compare-single');
  if (btnCompareSingle) {
    btnCompareSingle.addEventListener('click', () => {
      showToast('Cadeira suspensa Aerona adicionada à barra de comparação.');
    });
  }

  // 6. Abas: Descrição & Avaliações
  const descTabBtn = document.getElementById('desc-tab-btn');
  const reviewsTabBtn = document.getElementById('reviews-tab-btn');
  const tabPaneDesc = document.getElementById('tab-pane-desc');
  const tabPaneReviews = document.getElementById('tab-pane-reviews');
  const linkToReviews = document.getElementById('link-to-reviews');

  function switchTab(target) {
    if (target === 'desc') {
      descTabBtn.classList.add('tab-nav-btn--active');
      descTabBtn.setAttribute('aria-selected', 'true');
      reviewsTabBtn.classList.remove('tab-nav-btn--active');
      reviewsTabBtn.setAttribute('aria-selected', 'false');

      tabPaneDesc.classList.add('tab-pane--active');
      tabPaneReviews.classList.remove('tab-pane--active');
    } else {
      reviewsTabBtn.classList.add('tab-nav-btn--active');
      reviewsTabBtn.setAttribute('aria-selected', 'true');
      descTabBtn.classList.remove('tab-nav-btn--active');
      descTabBtn.setAttribute('aria-selected', 'false');

      tabPaneReviews.classList.add('tab-pane--active');
      tabPaneDesc.classList.remove('tab-pane--active');
    }
  }

  if (descTabBtn) descTabBtn.addEventListener('click', () => switchTab('desc'));
  if (reviewsTabBtn) reviewsTabBtn.addEventListener('click', () => switchTab('reviews'));
  if (linkToReviews) {
    linkToReviews.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('reviews');
      reviewsTabBtn.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 7. Seletor de Estrelas na Nova Avaliação
  const starPickers = document.querySelectorAll('.star-pick-btn');
  const selectedRatingInput = document.getElementById('selected-rating');

  function updateStars(val) {
    starPickers.forEach(btn => {
      const starVal = parseInt(btn.getAttribute('data-rating'), 10);
      btn.classList.toggle('selected', starVal <= val);
    });
    if (selectedRatingInput) selectedRatingInput.value = val;
  }
  updateStars(5);

  starPickers.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-rating'), 10);
      updateStars(val);
    });
  });

  // 8. Envio de Nova Avaliação
  const reviewForm = document.getElementById('new-review-form');
  const reviewsList = document.getElementById('reviews-list');
  const reviewCountBadge = document.getElementById('review-count-badge');
  const reviewsCountDisplay = document.getElementById('reviews-count-display');

  if (reviewForm && reviewsList) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('review-author')?.value.trim();
      const comment = document.getElementById('review-comment')?.value.trim();
      const rating = parseInt(selectedRatingInput?.value, 10) || 5;

      if (!author || !comment) return;

      // Monta as estrelas
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += `<span class="star-icon ${i <= rating ? 'star-icon--filled' : 'star-icon--empty'}">&#9733;</span>`;
      }

      // Iniciais para avatar
      const initials = author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'US';

      // Cria o item da avaliação
      const newReview = document.createElement('div');
      newReview.className = 'review-item';
      newReview.innerHTML = `
        <div class="review-item__avatar">
          <span>${initials}</span>
        </div>
        <div class="review-item__content">
          <div class="review-item__header">
            <div class="star-rating-box star-rating-box--sm" role="img" aria-label="Nota ${rating} de 5">
              ${starsHtml}
            </div>
            <strong class="review-item__author">${author}</strong>
            <span class="review-item__dash">&ndash;</span>
            <time class="review-item__date">Agora mesmo</time>
          </div>
          <p class="review-item__text">${comment}</p>
        </div>
      `;

      reviewsList.prepend(newReview);

      // Atualiza contadores
      const totalReviews = reviewsList.children.length;
      if (reviewCountBadge) reviewCountBadge.textContent = totalReviews;
      if (reviewsCountDisplay) reviewsCountDisplay.textContent = totalReviews;

      reviewForm.reset();
      updateStars(5);
      showToast('Obrigado! Sua avaliação foi publicada com sucesso.');
    });
  }

  // Toast Helper
  function showToast(msg) {
    const toast = document.getElementById('toast-notify');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
});
