const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const open = document.getElementById("open");
const close = document.getElementById("close");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("h-[90vh]");
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
});
