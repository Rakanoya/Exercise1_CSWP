"use strict";

class BananaadeStand {
  constructor(bananas, gallonsOfWater, cupsOfSugar, emptyGlasses, price) {
    this.bananas = bananas;
    this.gallonsOfWater = gallonsOfWater;
    this.cupsOfSugar = cupsOfSugar;
    this.emptyGlasses = emptyGlasses;
    this.price = price;    
    this.glassesOfBananaade = 0;
    this.income = 0.0;
  }
  
  makeBananaade() {
    if (this.bananas >= 6 && this.gallonsOfWater >= 1 
      && this.cupsOfSugar >= 1 && this.emptyGlasses >= 8) {
      this.bananas -= 6;
      this.gallonsOfWater--;
      this.cupsOfSugar--;
      this.emptyGlasses -= 8;
      this.glassesOfBananaade += 8;
      return 8;
    } 
    else {
      return 0;
    }
  }
  
  sellBananaade() {
    if (this.glassesOfBananaade >= 1) {
      this.glassesOfBananaade--;
      this.income += this.price;
      return 1;
    } 
    else {
      this.makeBananaade();
      if (this.glassesOfBananaade >= 1) {
        this.glassesOfBananaade--;
        this.income += this.price;
        return 1;
      } 
      else {
        return 0;
      }
    }
  }
  
  showIngredients() {
    let newArticle = document.createElement('article');
    let newTable = document.createElement('table');   
    let newRow = document.createElement('tr');
    let newData = document.createElement('td'); 

    let newCap = document.createElement("caption");
    let newText = document.createTextNode('Ingredients');
    newCap.appendChild(newText);
    newTable.appendChild(newCap);    

    newText = document.createTextNode("Bananas");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.bananas);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow);

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Water");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.gallonsOfWater);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow);

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Sugar");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.cupsOfSugar);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow);

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Empty Glasses");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.emptyGlasses);
    newData.appendChild(newText);

    newRow.appendChild(newData);
    newTable.appendChild(newRow);

    newArticle.appendChild(newTable);
    let body = document.getElementsByTagName('body')[0]; 
    body.appendChild(newArticle);    
  }

  showAdmin() {   
    let newArticle = document.createElement('article');
    let newH1 = document.createElement("h1");
    let newText = document.createTextNode('Admin');
    newH1.appendChild(newText);
    newArticle.appendChild(newH1);    
    
    let newUl = document.createElement("ul");
    
    let li = document.createElement("li");
    newText = document.createTextNode(
      `Price per Glass: $${this.price.toFixed(2)}`);
    li.appendChild(newText);
    newUl.appendChild(li);
    
    li = document.createElement("li");
    newText = document.createTextNode(
      `Glasses of Bananaade: ${this.glassesOfBananaade}`);
    li.appendChild(newText);
    newUl.appendChild(li);
    
    li = document.createElement("li");
    newText = document.createTextNode(
      `Income: $${this.income.toFixed(2)}`);
    li.appendChild(newText);
    newUl.appendChild(li);
    
    newArticle.appendChild(newUl);
    
    let body = document.getElementsByTagName('body')[0]; 
    body.appendChild(newArticle);
  }  

  sellMoreBananaade(glassesRequested) {
    if (glassesRequested > 8) glassesRequested = 8;
    
    if (this.glassesOfBananaade < glassesRequested) 
      this.makeBananaade();
    
    if (this.glassesOfBananaade < glassesRequested) {
      this.income += this.price * this.glassesOfBananaade;
      let temp = this.glassesOfBananaade;
      this.glassesOfBananaade = 0;
      return temp;
    } 
    else { 
      this.glassesOfBananaade -= glassesRequested;
      this.income += this.price * glassesRequested;
      return glassesRequested;
    }    
  }

  addBananas(number) {
    alert(`Adding ${number} banana(s)`);
  }

  addWater(number) {
    alert(`Adding ${number} gallons of water`);
  }

  addSugar(number) {
    alert(`Adding ${number} cups of sugar`);
  }

  addEmptyGlasses(number) {
    alert(`Adding ${number} empty glasses`);
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

function addIngredient(e) {
  if (e.key === "Enter") {
    let item = e.target.id;
    let number = e.target.value;

    if (item === "tbBananas") {
      ls.addBananas(number);
    } 
    else if (item === "tbWater") {
      ls.addWater(number);
    } 
    else if (item === "tbSugar") {
      ls.addSugar(number);
    } 
    else if (item === "tbEmptyGlasses") {
      ls.addEmptyGlasses(number);
    }
  }
}

function initEvents() {
  let inputs = document.querySelectorAll('.hide_me');
  for (let input of inputs) {
    input.onclick = showInput;
    input.onkeydown = addIngredient;
  }
}

function init() {
  ls.showAdmin();
  ls.showIngredients();
  initEvents();
  hideAll();
}

init();
