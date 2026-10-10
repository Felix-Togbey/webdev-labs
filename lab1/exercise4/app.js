// TODO 1
const title = document.querySelector("#title");
title.textContent = "JavaScript changed me!";

// TODO 2
const intro = document.querySelector(".intro");
intro.textContent = "This sentence was changed by app.js.";

// TODO 3
const link = document.querySelector("#link");
link.setAttribute("href", "https://developer.mozilla.org");
link.textContent = "Go to MDN";

// TODO 4
const box = document.querySelector(".box");
box.classList.add("highlight");
box.style.borderRadius = "12px";

// TODO 5
const fld = document.querySelector("#nameField");
const output = document.querySelector("#output");
output.textContent = "Hello, " + fld.value + "!";