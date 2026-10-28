"use strict";
let activeList;
let completedList;
let activeSection;
let completedSection;
let addText;
let addButton;
let clearButton;
let clearCompletedButton;
let itemsLeft;
let savedItems = [];
let currentFilter = "all";

function save() {
  localStorage.setItem('myList', JSON.stringify(savedItems));
}

function init() {
  activeList = document.getElementById("activeList");
  completedList = document.getElementById("completedList");
  activeSection = document.getElementById("activeSection");
  completedSection = document.getElementById("completedSection");
  addText = document.getElementById("addText");
  addButton = document.getElementById("addButton");
  clearButton = document.getElementById("clearButton");
  clearCompletedButton = document.getElementById("clearCompletedButton");
  itemsLeft = document.getElementById("itemsLeft");

  addButton.addEventListener("click", () => addItem(addText.value.trim()));
  addText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addItem(addText.value.trim());
  });
  clearButton.addEventListener("click", () => {
    savedItems = [];
    save();
    renderList();
  });
  clearCompletedButton.addEventListener("click", clearCompleted);
  document.querySelectorAll(".filterButton").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });
  initList();
}

function initList() {
  const storedItems = JSON.parse(localStorage.getItem('myList')) || [];
  savedItems = storedItems.map((item) => {
    if (typeof item === "string") {
      return { text: item, completed: false };
    }
    return {
      text: item.text,
      completed: item.completed === true
    };
  });
  renderList();
}

function addItem(t) {
  if (t === "") return;
  if (savedItems.some((item) => item.text === t)) {
    addText.value = "";
    return;
  }
  const item = { text: t, completed: false };
  savedItems.push(item);
  addText.value = "";
  save();
  renderList(item);
}

function renderList(newItem = null) {
  activeList.replaceChildren();
  completedList.replaceChildren();
  savedItems.forEach((item) => {
    const li = document.createElement("li");
    if (item.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.setAttribute("aria-label", `Mark "${item.text}" as completed`);
    checkbox.addEventListener("change", () => {
      item.completed = checkbox.checked;
      save();
      renderList();
    });
    li.appendChild(checkbox);

    const span = document.createElement("span");
    span.textContent = item.text;
    span.addEventListener("click", () => editItem(item, li, span));
    li.appendChild(span);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("removeButton");
    removeButton.type = "button";
    removeButton.addEventListener("click", () => removeItem(item, li));
    li.appendChild(removeButton);

    if (item === newItem) {
      li.classList.add("entering");
      li.addEventListener("animationend", () => li.classList.remove("entering"), { once: true });
    }
    (item.completed ? completedList : activeList).appendChild(li);
  });

  activeSection.hidden = currentFilter === "completed";
  completedSection.hidden = currentFilter === "active";
  const remaining = savedItems.filter((item) => !item.completed).length;
  itemsLeft.textContent = `${remaining} ${remaining === 1 ? "item" : "items"} left`;
  document.querySelectorAll(".filterButton").forEach((button) => {
    const isActive = button.dataset.filter === currentFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setFilter(filter) {
  currentFilter = filter;
  renderList();
}

function clearCompleted() {
  savedItems = savedItems.filter((item) => !item.completed);
  save();
  renderList();
}

function removeItem(item, li) {
  const index = savedItems.indexOf(item);
  if (index > -1) {
    savedItems.splice(index, 1);
    save();
  }
  li.classList.add("exiting");
  li.addEventListener("animationend", () => li.remove(), { once: true });
  const remaining = savedItems.filter((task) => !task.completed).length;
  itemsLeft.textContent = `${remaining} ${remaining === 1 ? "item" : "items"} left`;
}

function editItem(item, li, span) {
  const old = item.text;
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
    const dup = savedItems.some((savedItem) => savedItem !== item && savedItem.text === val);
    if (commit && val !== "" && !dup) {
      item.text = val;
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
