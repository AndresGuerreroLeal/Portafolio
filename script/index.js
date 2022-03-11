//Narbar Menu

const menu = document.getElementById("menu");
const navmenu = document.getElementById("navmenu");
const close = document.getElementById("close");

const navItem = document.querySelectorAll(".nav__item");

menu.addEventListener("click", () => {
  navmenu.classList.add("active");
});

close.addEventListener("click", () => {
  navmenu.classList.remove("active");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navmenu.classList.remove("active");
  });
});

//Form

const form = document.querySelector("#form");
const parrafo = document.querySelector("#parrafo");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const dataForm = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: dataForm,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    form.classList.add("disable");
    parrafo.innerHTML =
      "Gracias por contactarme, estaré dado respuesta muy pronto 👋";
  }
}
