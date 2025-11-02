/* ===============================
   渡辺農園 LP main.js
   =============================== */

// 1. DOM読み込み後の初期化
document.addEventListener("DOMContentLoaded", () => {
  console.log("Watanabe Farm LP loaded!");

  initScrollAnimation();
  initSmoothScroll();
  initMobileMenu();
});

/* -------------------------------
   2. スクロールアニメーション
   （セクションが見えたらふわっと表示）
-------------------------------- */
function initScrollAnimation() {
  const fadeTargets = document.querySelectorAll("section, .item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeTargets.forEach((target) => observer.observe(target));
}

/* -------------------------------
   3. モバイルメニュー開閉（任意）
-------------------------------- */
function initMobileMenu() {
  const nav = document.querySelector("header nav");
  const button = document.createElement("button");
  button.textContent = "☰";
  button.className = "menu-toggle";
  document.querySelector("header").appendChild(button);

  button.addEventListener("click", () => {
    nav.classList.toggle("open");
    button.classList.toggle("active");
  });
}

/* -------------------------------
   4. スムーススクロール
-------------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });
}
