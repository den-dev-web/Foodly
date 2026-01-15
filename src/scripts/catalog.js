import { createProductCard } from "./product-card.js";

export const PAGE_SIZE = 12;

// Плавное ожидание анимации выхода
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function renderCatalog(list, cart, options = {}) {
  const { category = "all", limit = PAGE_SIZE } = options;

  const grid = document.querySelector("[data-catalog-grid]");
  const skeleton = document.querySelector("[data-catalog-skeleton]");
  const showMore = document.querySelector("[data-show-more]");

  if (!grid || !skeleton || !showMore) return;

  // === НЕТ ТОВАРОВ → показываем skeleton ===
  if (!list || list.length === 0) {
    grid.hidden = true;
    skeleton.hidden = false;
    showMore.hidden = true;
    return;
  }

  // === ЕСТЬ ТОВАРЫ → скрываем skeleton ===
  skeleton.hidden = true;
  grid.hidden = false;

  // === Fade-out старых карточек ===
  if (grid.children.length > 0) {
    Array.from(grid.children).forEach((child) =>
      child.classList.add("card-exit")
    );
    await wait(200); // время fade-out
  }

  // === Ограничиваем список ===
  const visibleItems = list.slice(0, limit);

  // === Рендер новых карточек ===
  grid.innerHTML = "";

  visibleItems.forEach((product, index) => {
    const card = createProductCard(product, cart);
    card.style.setProperty("--i", index); // Stagger
    grid.append(card);
  });

  // === Остаток товаров ===
  const remaining = list.length - visibleItems.length;

  if (remaining > 0) {
    showMore.hidden = false;
    showMore.textContent = `Показать ещё (${remaining})`;
  } else {
    showMore.hidden = true;
  }
}

// === ДОГРУЗКА НОВЫХ КАРТОЧЕК (Показать ещё) ===
export function renderMoreItems(list, cart, limit) {
  const grid = document.querySelector("[data-catalog-grid]");

  const totalItems = list.slice(0, limit);
  const currentCount = grid.children.length;

  const newItems = totalItems.slice(currentCount);

  newItems.forEach((product, index) => {
    const card = createProductCard(product, cart);
    card.classList.add("card-new"); // spring
    card.style.setProperty("--i", index);
    grid.append(card);
  });
}
