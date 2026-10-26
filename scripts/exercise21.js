"use strict";
let uList;
let addText;
let addButton;
let clearButton;
let savedItems = [];

function save() {
  localStorage.setItem('myList', JSON.stringify(savedItems));
}

function init() {
  uList = document.getElementById("uList");
  addText = document.getElementById("addText");
  addButton = document.getElementById("addButton");
  clearButton = document.getElementById("clearButton");

  addButton.addEventListener("click", () => addItem(addText.value.trim()));
  addText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addItem(addText.value.trim());
  });
  clearButton.addEventListener("click", () => {
    uList.innerHTML = "";
    savedItems = [];
    save();
  });
  initList();
}

function initList() {
  savedItems = JSON.parse(localStorage.getItem('myList')) || [];
  const items = [...savedItems];
  items.forEach((text) => addItem(text));
}

function addItem(t) {
  if (t === "") return;
  // prevent duplicates (also in the DOM, since initList re-adds saved items)
  const exists = [...uList.children].some(
    (li) => li.firstChild.textContent.trim() === t
  );
  if (exists) {
    addText.value = "";
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = t;
  li.appendChild(span);

  span.addEventListener("click", () => editItem(li, span));

  const b = document.createElement("button");
  b.textContent = "Remove";
  b.classList.add("removeButton");
  b.addEventListener("click", () => removeItem(li));
  li.appendChild(b);

  li.classList.add("entering");
  li.addEventListener("animationend", () => li.classList.remove("entering"), { once: true });

  addText.value = "";
  uList.appendChild(li);

  if (!savedItems.includes(t)) {
    savedItems.push(t);
    save();
  }
}

function removeItem(item) {
  const text = item.firstChild.textContent.trim();
  const index = savedItems.indexOf(text);
  if (index > -1) {
    savedItems.splice(index, 1);
    save();
  }
  item.classList.remove("entering");
  item.classList.add("exiting");
  item.addEventListener("animationend", () => item.remove(), { once: true });
}

function editItem(li, span) {
  const old = span.textContent.trim();
  const input = document.createElement("input");
  input.type = "text";
  input.value = old;
  li.replaceChild(input, span);
  input.focus();

  let done = false;
  const finish = (commit) => {
    if (done) return;
    done = true;
    const val = input.value.trim();
    const dup = savedItems.includes(val) && val !== old;
    if (commit && val !== "" && !dup) {
      const i = savedItems.indexOf(old);
      if (i > -1) savedItems[i] = val;
      save();
      span.textContent = val;
    }
    li.replaceChild(span, input);
  };
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") finish(true);
    if (e.key === "Escape") finish(false);
  });
  input.addEventListener("blur", () => finish(true));
}

init();
