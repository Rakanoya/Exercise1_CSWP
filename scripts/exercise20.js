"use strict";

class BananaadeStand {
  constructor(bananas, gallonsOfWater, cupsOfSugar, emptyGlasses, price) {
    this.bananas = bananas;
    this.gallonsOfWater = gallonsOfWater;
    this.cupsOfSugar = cupsOfSugar;
    this.emptyGlasses = emptyGlasses;

    this.minBananas = 6;
    this.minGallonsOfWater = 1;
    this.minCupsOfSugar = 1;
    this.minEmptyGlasses = 8;

    this.price = price;
    this.glassesOfBananaade = 0;
    this.income = 0.0;
  }

  makeBananaade() {
    if (this.bananas < this.minBananas
      || this.gallonsOfWater < this.minGallonsOfWater
      || this.cupsOfSugar < this.minCupsOfSugar
      || this.emptyGlasses < this.minEmptyGlasses) {
      return 0;
    }

    this.bananas -= this.minBananas;
    this.gallonsOfWater -= this.minGallonsOfWater;
    this.cupsOfSugar -= this.minCupsOfSugar;
    this.emptyGlasses -= this.minEmptyGlasses;
    this.glassesOfBananaade += this.minEmptyGlasses;

    this.updateInventory("Bananas", this.bananas, this.minBananas);
    this.updateInventory("Water", this.gallonsOfWater, this.minGallonsOfWater);
    this.updateInventory("Sugar", this.cupsOfSugar, this.minCupsOfSugar);
    this.updateInventory("Empty Glasses", this.emptyGlasses, this.minEmptyGlasses);
    this.updateAdmin();

    return this.minEmptyGlasses;
  }

  sellBananaade() {
    if (this.glassesOfBananaade < 1) {
      return 0;
    }

    this.glassesOfBananaade -= 1;
    this.income += this.price;
    this.updateAdmin();
    return 1;
  }

  sellMoreBananaade(glassesRequested) {
    let sold = 0;
    for (let i = 0; i < glassesRequested; i++) {
      if (this.sellBananaade() === 1) {
        sold++;
      } else {
        break;
      }
    }

    return sold;
  }

  showIngredients() {
    let section = document.getElementById("ingredients");
    if (!section) {
      section = document.createElement("section");
      section.id = "ingredients";

      const h2 = document.createElement("h2");
      h2.textContent = "Inventory";
      section.appendChild(h2);

      const table = document.createElement("table");
      table.id = "inventoryTable";
      section.appendChild(table);
      document.body.appendChild(section);

      const addRow = (label) => {
        const tr = document.createElement("tr");
        const tdLabel = document.createElement("td");
        tdLabel.textContent = label;
        const tdVal = document.createElement("td");
        tr.appendChild(tdLabel);
        tr.appendChild(tdVal);
        table.appendChild(tr);
      };

      addRow("Bananas");
      addRow("Water");
      addRow("Sugar");
      addRow("Empty Glasses");
    }

    this.updateInventory("Bananas", this.bananas, this.minBananas);
    this.updateInventory("Water", this.gallonsOfWater, this.minGallonsOfWater);
    this.updateInventory("Sugar", this.cupsOfSugar, this.minCupsOfSugar);
    this.updateInventory("Empty Glasses", this.emptyGlasses, this.minEmptyGlasses);
  }

  showAdmin() {
    let section = document.getElementById("admin");
    if (!section) {
      section = document.createElement("section");
      section.id = "admin";

      const h2 = document.createElement("h2");
      h2.textContent = "Admin";
      section.appendChild(h2);

      const ul = document.createElement("ul");
      const liPrice = document.createElement("li");
      liPrice.id = "adminPrice";
      const liGlasses = document.createElement("li");
      liGlasses.id = "adminGlasses";
      const liIncome = document.createElement("li");
      liIncome.id = "adminIncome";

      ul.appendChild(liPrice);
      ul.appendChild(liGlasses);
      ul.appendChild(liIncome);
      section.appendChild(ul);
      document.body.appendChild(section);
    }

    this.updateAdmin();
  }

  addBananas(number) {
    this.bananas += number;
    this.updateInventory("Bananas", this.bananas, this.minBananas);
  }

  addWater(number) {
    this.gallonsOfWater += number;
    this.updateInventory("Water", this.gallonsOfWater, this.minGallonsOfWater);
  }

  addSugar(number) {
    this.cupsOfSugar += number;
    this.updateInventory("Sugar", this.cupsOfSugar, this.minCupsOfSugar);
  }

  addEmptyGlasses(number) {
    this.emptyGlasses += number;
    this.updateInventory("Empty Glasses", this.emptyGlasses, this.minEmptyGlasses);
  }

  updateAdmin() {
    const liPrice = document.getElementById("adminPrice");
    const liGlasses = document.getElementById("adminGlasses");
    const liIncome = document.getElementById("adminIncome");

    if (liPrice && liGlasses && liIncome) {
      liPrice.textContent = `Price per Glass: $${this.price.toFixed(2)}`;
      liGlasses.textContent = `Glasses of Bananaade: ${this.glassesOfBananaade}`;
      liIncome.textContent = `Income: $${this.income.toFixed(2)}`;
    }
  }

  updateInventory(labelText, value, minimum) {
    const table = document.getElementById("inventoryTable");
    if (!table) {
      return;
    }

    const cells = table.querySelectorAll("td");
    for (const cell of cells) {
      if (cell.textContent.trim() === labelText) {
        const valueCell = cell.nextElementSibling;
        if (!valueCell) {
          return;
        }

        valueCell.textContent = value;
        if (value < minimum) {
          cell.style.backgroundColor = "pink";
          valueCell.style.backgroundColor = "pink";
        } else {
          cell.style.backgroundColor = "";
          valueCell.style.backgroundColor = "";
        }

        return;
      }
    }
  }
}

let ls = new BananaadeStand(20, 10, 10, 10, 2.0);

function hideAll() {
  let elements = document.getElementsByClassName("hide_me");
  for (let ele of elements) {
    ele.style.visibility = "hidden";
  }
}

function showInput(input) {
  hideAll();
  input.style.visibility = "visible";
  input.value = "";
  input.style.backgroundColor = "";
  input.focus();
}

function addIngredient(e) {
  if (e.key !== "Enter") {
    return;
  }

  const re = /^[0-9]+$/;
  if (!re.test(e.target.value)) {
    e.target.style.backgroundColor = "#FFAAAA";
    return;
  }

  const amount = +e.target.value;

  if (e.target.id === "tbBananas") {
    ls.addBananas(amount);
  } else if (e.target.id === "tbWater") {
    ls.addWater(amount);
  } else if (e.target.id === "tbSugar") {
    ls.addSugar(amount);
  } else if (e.target.id === "tbEmptyGlasses") {
    ls.addEmptyGlasses(amount);
  }

  e.target.style.backgroundColor = "";
  hideAll();
}

function initEvents() {
  const inputs = document.querySelectorAll(".hide_me");
  for (const input of inputs) {
    input.addEventListener("click", () => {
      showInput(input);
    });
    input.addEventListener("keydown", addIngredient);
  }

  const spans = document.querySelectorAll(".clickable");
  for (const span of spans) {
    span.addEventListener("click", () => {
      const input = span.parentElement.querySelector(".hide_me");
      if (input) {
        showInput(input);
      }
    });
  }

  document.getElementById("btnMakeBananaade").addEventListener("click", () => {
    ls.makeBananaade();
    ls.showAdmin();
    ls.showIngredients();
  });

  document.getElementById("btnSellBananaade").addEventListener("click", () => {
    ls.sellBananaade();
    ls.showAdmin();
    ls.showIngredients();
  });
}

function init() {
  ls.showAdmin();
  ls.showIngredients();
  initEvents();
  hideAll();
}

init();
