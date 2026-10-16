"use strict";

class BananaadeStand {
  constructor(bananas, gallonsOfWater, cupsOfSugar, emptyGlasses, price) {
    this.bananas = bananas;
    this.gallonsOfWater = gallonsOfWater;
    this.cupsOfSugar = cupsOfSugar;
    this.emptyGlasses = emptyGlasses;
    this.price = price;

    this.minBananas = 6;
    this.minGallonsOfWater = 1;
    this.minCupsOfSugar = 1;
    this.minEmptyGlasses = 8;

    this.glassesOfBananaade = 0;
    this.income = 0;
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

    this.updateAllInventory();
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
    let soldCount = 0;
    for (let i = 0; i < glassesRequested; i++) {
      if (this.sellBananaade()) {
        soldCount += 1;
      } else {
        break;
      }
    }
    return soldCount;
  }

  showAdmin() {
    let section = document.getElementById("admin");
    if (!section) {
      section = document.createElement("section");
      section.id = "admin";

      let h2 = document.createElement("h2");
      h2.appendChild(document.createTextNode("Admin"));
      section.appendChild(h2);

      let ul = document.createElement("ul");

      let liPrice = document.createElement("li");
      liPrice.id = "adminPrice";
      ul.appendChild(liPrice);

      let liGlasses = document.createElement("li");
      liGlasses.id = "adminGlasses";
      ul.appendChild(liGlasses);

      let liIncome = document.createElement("li");
      liIncome.id = "adminIncome";
      ul.appendChild(liIncome);

      section.appendChild(ul);
      document.body.appendChild(section);
    }

    this.updateAdmin();
  }

  showIngredients() {
    let section = document.getElementById("ingredients");
    if (!section) {
      section = document.createElement("section");
      section.id = "ingredients";

      let h2 = document.createElement("h2");
      h2.appendChild(document.createTextNode("Inventory"));
      section.appendChild(h2);

      let table = document.createElement("table");
      table.id = "inventoryTable";

      const addRow = (label, value) => {
        let tr = document.createElement("tr");

        let labelTd = document.createElement("td");
        labelTd.appendChild(document.createTextNode(label));
        tr.appendChild(labelTd);

        let valueTd = document.createElement("td");
        valueTd.appendChild(document.createTextNode(value));
        tr.appendChild(valueTd);

        table.appendChild(tr);
      };

      addRow("Bananas", this.bananas);
      addRow("Water", this.gallonsOfWater);
      addRow("Sugar", this.cupsOfSugar);
      addRow("Empty Glasses", this.emptyGlasses);

      section.appendChild(table);
      document.body.appendChild(section);
    }

    this.updateAllInventory();
  }

  addBananas(number) {
    this.bananas += number;
    this.updateAllInventory();
  }

  addWater(number) {
    this.gallonsOfWater += number;
    this.updateAllInventory();
  }

  addSugar(number) {
    this.cupsOfSugar += number;
    this.updateAllInventory();
  }

  addEmptyGlasses(number) {
    this.emptyGlasses += number;
    this.updateAllInventory();
  }

  updateAdmin() {
    let priceLi = document.getElementById("adminPrice");
    let glassesLi = document.getElementById("adminGlasses");
    let incomeLi = document.getElementById("adminIncome");

    if (priceLi && glassesLi && incomeLi) {
      priceLi.textContent = `Price per Glass: $${this.price.toFixed(2)}`;
      glassesLi.textContent = `Glasses of Bananaade: ${this.glassesOfBananaade}`;
      incomeLi.textContent = `Income: $${this.income.toFixed(2)}`;
    }
  }

  updateInventory(label, value, minimum) {
    let table = document.querySelector("#ingredients table");
    if (!table) {
      return;
    }

    let cells = table.querySelectorAll("td");
    for (let cell of cells) {
      if (cell.textContent === label) {
        let valueCell = cell.nextElementSibling;
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

  updateAllInventory() {
    this.updateInventory("Bananas", this.bananas, this.minBananas);
    this.updateInventory("Water", this.gallonsOfWater, this.minGallonsOfWater);
    this.updateInventory("Sugar", this.cupsOfSugar, this.minCupsOfSugar);
    this.updateInventory("Empty Glasses", this.emptyGlasses, this.minEmptyGlasses);
  }
}

let ls = new BananaadeStand(20, 10, 10, 10, 2.0);

function hideAll() {
  let elements = document.getElementsByClassName("hide_me");
  for (let ele of elements) {
    ele.style.visibility = "hidden";
    ele.style.backgroundColor = "";
  }
}

function showInput() {
  hideAll();
  this.style.visibility = "visible";
  this.value = "";
  this.focus();
}

function refreshDisplay() {
  ls.showAdmin();
  ls.showIngredients();
}

function addIngredient(e) {
  if (e.key !== "Enter") {
    return;
  }

  let re = /^[0-9]+$/;
  if (!re.test(e.target.value)) {
    e.target.style.backgroundColor = "#FFAAAA";
    return;
  }

  let amount = +e.target.value;
  e.target.style.backgroundColor = "";

  if (e.target.id === "tbBananas") {
    ls.addBananas(amount);
  } else if (e.target.id === "tbWater") {
    ls.addWater(amount);
  } else if (e.target.id === "tbSugar") {
    ls.addSugar(amount);
  } else if (e.target.id === "tbEmptyGlasses") {
    ls.addEmptyGlasses(amount);
  }

  hideAll();
  refreshDisplay();
}

function initEvents() {
  let inputs = document.querySelectorAll(".hide_me");
  for (let input of inputs) {
    input.addEventListener("click", showInput);
    input.addEventListener("keydown", addIngredient);
  }

  document.getElementById("btnMakeBananaade").addEventListener("click", () => {
    ls.makeBananaade();
    refreshDisplay();
  });

  document.getElementById("btnSellBananaade").addEventListener("click", () => {
    ls.sellBananaade();
    refreshDisplay();
  });
}

function init() {
  ls.showAdmin();
  ls.showIngredients();
  initEvents();
  hideAll();
}

init();
