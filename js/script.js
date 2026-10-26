"use strict";

const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
    navLinks.classList.toggle("is-open", !isExpanded);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      navLinks.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const promoDialog = document.querySelector("#promo-dialog");
const promoCloseButton = document.querySelector(".promo-close");

if (promoDialog instanceof HTMLDialogElement && promoCloseButton) {
  promoCloseButton.addEventListener("click", () => promoDialog.close());
  promoDialog.addEventListener("click", (event) => {
    if (event.target === promoDialog) {
      promoDialog.close();
    }
  });
  promoDialog.showModal();
}
