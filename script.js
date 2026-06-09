const cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.boxShadow = "0 0 20px #00abf0";
});

card.addEventListener("mouseleave", () => {
card.style.boxShadow = "none";
});
});