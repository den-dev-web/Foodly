export function initReviewsSlider() {
  const slider = document.querySelector("[data-reviews-slider]");
  if (!slider) return;

  const track = slider.querySelector("[data-reviews-track]");
  const slides = Array.from(track?.querySelectorAll(".reviews__item") ?? []);
  const dotsContainer = slider.querySelector("[data-reviews-dots]");

  if (!track || !slides.length || !dotsContainer) return;

  const getPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  let perView = getPerView();
  let pages = Math.ceil(slides.length / perView);
  let currentPage = 0;
  let dots = [];

  const rebuildDots = () => {
    dotsContainer.innerHTML = "";
    dots = Array.from({ length: pages }, (_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "reviews__dot";
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.append(dot);
      return dot;
    });
  };

  const updateVisibility = (startIndex) => {
    const endIndex = startIndex + perView;
    slides.forEach((slide, i) => {
      const isVisible = i >= startIndex && i < endIndex;
      slide.classList.toggle("is-active", isVisible);
      slide.setAttribute("aria-hidden", isVisible ? "false" : "true");
    });
  };

  const goTo = (pageIndex) => {
    const maxPage = Math.max(0, pages - 1);
    currentPage = Math.min(Math.max(pageIndex, 0), maxPage);

    const slideWidth = slides[0].getBoundingClientRect().width;
    const computed = getComputedStyle(track);
    const gap = parseFloat(computed.columnGap || computed.gap || "0") || 0;

    const offset = (slideWidth + gap) * currentPage * perView;
    track.style.transform = `translateX(-${offset}px)`;

    updateVisibility(currentPage * perView);

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === currentPage);
    });
  };

  const handleResize = () => {
    const nextPerView = getPerView();
    if (nextPerView !== perView) {
      perView = nextPerView;
      pages = Math.ceil(slides.length / perView);
      rebuildDots();
      goTo(0);
      return;
    }

    goTo(currentPage);
  };

  const goNext = () => goTo(currentPage + 1);
  const goPrev = () => goTo(currentPage - 1);

  rebuildDots();

  // свайп
  let startX = 0;
  let isDown = false;

  track.addEventListener("pointerdown", (e) => {
    isDown = true;
    startX = e.clientX;
  });

  track.addEventListener("pointerup", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    isDown = false;
  });

  track.addEventListener("pointerleave", () => {
    isDown = false;
  });

  window.addEventListener("resize", handleResize);

  // стартовое состояние
  goTo(0);
}
