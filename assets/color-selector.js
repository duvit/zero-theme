document.addEventListener("click", function (e) {
  const btn = e.target.closest(".color-button");
  if (!btn) return;

  const stockInfoEl = document.getElementById("stock-info");
  const priceBlockEl = document.getElementById("product-price-block");

  stockInfoEl.textContent = btn.dataset.stockText || "";
  stockInfoEl.style.color = btn.dataset.available === "true" ? "green" : "red";

  priceBlockEl.innerHTML = btn.dataset.priceHtml || "";
});
