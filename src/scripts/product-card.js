export function createProductCard(product, cart) {
  const el = document.createElement("article");
  el.className = "product-card";
  el.dataset.productId = product.id;

  const imageSources = product.images || {
    avif: product.imageAvif || product.image,
    webp: product.imageWebp || product.image,
    jpg: product.image,
  };

  const hasVariants = Array.isArray(product.variants) && product.variants.length;
  const initialVariant = hasVariants ? product.variants[0] : null;
  const currentPrice = initialVariant?.price ?? product.price;

  const variantsMarkup = hasVariants
    ? `
      <div class="product-card__variants is-hidden" role="group" aria-label="Выбор размера" aria-hidden="true" data-variants>
        ${product.variants
          .map(
            (variant, index) => `
              <button
                class="product-card__variant ${
                  index === 0 ? "is-active" : ""
                }"
                type="button"
                data-variant-id="${variant.id}"
                aria-pressed="${index === 0}"
              >
                ${variant.label} — ${variant.price} ₴
              </button>
            `
          )
          .join("")}
      </div>
    `
    : "";

  el.innerHTML = `
    <picture class="product-card__image-wrapper">
      <source srcset="${imageSources.avif}" type="image/avif" />
      <source srcset="${imageSources.webp}" type="image/webp" />
      <img
        src="${imageSources.jpg}"
        alt="${product.name}"
        class="product-card__image"
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 220px"
      />
    </picture>

    <h3 class="product-card__title">${product.name}</h3>
    <p class="product-card__description">${product.description}</p>
    ${variantsMarkup}

    <div class="product-card__bottom">
      <div class="product-card__price" data-product-price>${currentPrice} ₴</div>

      <div class="product-card__actions">

        <button class="product-card__add" data-product-add>Добавить</button>

        <div class="product-card__counter" hidden>
          <button data-product-decrease class="product-card__counter-btn">-</button>
          <span data-product-qty class="product-card__counter-value">1</span>
          <button data-product-increase class="product-card__counter-btn">+</button>
        </div>

      </div>
    </div>
  `;

  initProductCardEvents(el, cart, product, hasVariants);
  return el;
}

function initProductCardEvents(card, cart, product, hasVariants) {
  const addBtn = card.querySelector("[data-product-add]");
  const counter = card.querySelector(".product-card__counter");
  const qtyValue = card.querySelector("[data-product-qty]");
  const plus = card.querySelector("[data-product-increase]");
  const minus = card.querySelector("[data-product-decrease]");
  const variantButtons = Array.from(
    card.querySelectorAll("[data-variant-id]")
  );
  const priceEl = card.querySelector("[data-product-price]");
  const variantsWrap = card.querySelector("[data-variants]");

  const id = card.dataset.productId;
  let currentVariantId = variantButtons[0]?.dataset.variantId || "";

  const updatePrice = () => {
    const variant = product?.variants?.find((v) => v.id === currentVariantId);
    const price = variant?.price ?? product?.price ?? 0;
    if (priceEl) priceEl.textContent = `${price} ₴`;
  };

  const updateState = () => {
    const qty = cart.getQty(id, currentVariantId);

    if (qty === 0) {
      addBtn.hidden = false;
      counter.hidden = true;
    } else {
      addBtn.hidden = true;
      counter.hidden = false;
      qtyValue.textContent = qty;
    }
  };

  updateState();

  addBtn.addEventListener("click", () => {
    if (hasVariants && variantsWrap?.classList.contains("is-hidden")) {
      variantsWrap.classList.remove("is-hidden");
      variantsWrap.setAttribute("aria-hidden", "false");
      return;
    }

    cart.add(id, currentVariantId);
    updateState();
  });

  plus.addEventListener("click", () => {
    cart.add(id, currentVariantId);
    updateState();
  });

  minus.addEventListener("click", () => {
    cart.remove(id, currentVariantId);
    updateState();
  });

  variantButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentVariantId = btn.dataset.variantId || "";

      variantButtons.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      updatePrice();
      updateState();

      if (hasVariants && variantsWrap && !variantsWrap.classList.contains("is-hidden")) {
        cart.add(id, currentVariantId);
        updateState();
      }
    });
  });

  updatePrice();
  cart.subscribe(() => updateState());
}
