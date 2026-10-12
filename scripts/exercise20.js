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
    if (this.bananas >= this.minBananas
      && this.gallonsOfWater >= this.minGallonsOfWater
      && this.cupsOfSugar >= this.minCupsOfSugar
      && this.emptyGlasses >= this.minEmptyGlasses) {
      this.bananas -= this.minBananas;
      this.gallonsOfWater -= this.minGallonsOfWater;
      this.cupsOfSugar -= this.minCupsOfSugar;
      this.emptyGlasses -= this.minEmptyGlasses;
      this.glassesOfBananaade += this.minEmptyGlasses;
      return this.minEmptyGlasses;
    }

    return 0;
  }

  sellBananaade() {
    if (this.glassesOfBananaade < 1) {
      this.makeBananaade();
    }

    if (this.glassesOfBananaade >= 1) {
      this.glassesOfBananaade--;
      this.income += this.price;
      return 1;
    }

    return 0;
  }

  showIngredients() {
    let newArticle = document.createElement('article');
    newArticle.id = 'ingredients';

    let newTable = document.createElement('table');
    let newCap = document.createElement("caption");
    let newText = document.createTextNode('Ingredients');
    newCap.appendChild(newText);
    newTable.appendChild(newCap);

    const addRow = (label, value) => {
      let newRow = document.createElement('tr');

      let labelData = document.createElement('td');
      labelData.appendChild(document.createTextNode(label));
      newRow.appendChild(labelData);

      let valueData = document.createElement('td');
      valueData.appendChild(document.createTextNode(value));
      newRow.appendChild(valueData);

      newTable.appendChild(newRow);
    };

    addRow("Bananas", this.bananas);
    addRow("Water", this.gallonsOfWater);
    addRow("Sugar", this.cupsOfSugar);
    addRow("Empty Glasses", this.emptyGlasses);

    newArticle.appendChild(newTable);
    document.body.appendChild(newArticle);
  }

  showAdmin() {
    let newArticle = document.createElement('article');
    newArticle.id = 'admin';

    let newH1 = document.createElement("h1");
    newH1.appendChild(document.createTextNode('Admin'));
    newArticle.appendChild(newH1);

    let newUl = document.createElement("ul");

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(
      `Price per Glass: $${this.price.toFixed(2)}`));
    newUl.appendChild(li);

    li = document.createElement("li");
    li.appendChild(document.createTextNode(
      `Glasses of Bananaade: ${this.glassesOfBananaade}`));
    newUl.appendChild(li);

    li = document.createElement("li");
    li.appendChild(document.createTextNode(
      `Income: $${this.income.toFixed(2)}`));
    newUl.appendChild(li);

    newArticle.appendChild(newUl);
    document.body.appendChild(newArticle);
  }

  sellMoreBananaade(glassesRequested) {
    if (glassesRequested > 8) glassesRequested = 8;

    if (this.glassesOfBananaade < glassesRequested) {
      this.makeBananaade();
    }

    if (this.glassesOfBananaade < glassesRequested) {
      this.income += this.price * this.glassesOfBananaade;
      let temp = this.glassesOfBananaade;
      this.glassesOfBananaade = 0;
      return temp;
    }

    this.glassesOfBananaade -= glassesRequested;
    this.income += this.price * glassesRequested;
    return glassesRequested;
  }

  addBananas(number) {
    this.bananas += Number(number);
  }

  addWater(number) {
    this.gallonsOfWater += Number(number);
  }

  addSugar(number) {
    this.cupsOfSugar += Number(number);
  }

  addEmptyGlasses(number) {
    this.emptyGlasses += Number(number);
  }
}

let ls = new BananaadeStand(20, 10, 10, 10, 2.0);

function hideAll() {
  let elements = document.getElementsByClassName('hide_me');
  for (let ele of elements) {
    ele.style.visibility = 'hidden';
  }
}

function showInput() {
  hideAll();
  this.style.visibility = 'visible';
  this.value = "";
  this.focus();
}

function refreshDisplay() {
  document.getElementById('admin')?.remove();
  document.getElementById('ingredients')?.remove();
  ls.showAdmin();
  ls.showIngredients();
}

function addIngredient(e) {
  if (e.key !== "Enter") {
    return;
  }

  let number = Number(e.target.value);
  if (!Number.isFinite(number) || number < 0) {
    e.target.value = "";
    return;
  }

  let item = e.target.id;
  if (item === "tbBananas") {
    ls.addBananas(number);
  } else if (item === "tbWater") {
    ls.addWater(number);
  } else if (item === "tbSugar") {
    ls.addSugar(number);
  } else if (item === "tbEmptyGlasses") {
    ls.addEmptyGlasses(number);
  }

  e.target.value = "";
  e.target.style.visibility = 'hidden';
  refreshDisplay();
}

function initEvents() {
  let inputs = document.querySelectorAll('.hide_me');
  for (let input of inputs) {
    input.onclick = showInput;
    input.onkeydown = addIngredient;
  }

  document.getElementById('btnMakeBananaade').onclick = () => {
    ls.makeBananaade();
    refreshDisplay();
  };

  document.getElementById('btnSellBananaade').onclick = () => {
    ls.sellBananaade();
    refreshDisplay();
  };
}

function init() {
  ls.showAdmin();
  ls.showIngredients();
  initEvents();
  hideAll();
}

init();
