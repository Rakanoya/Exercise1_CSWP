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
      && this.cupsOfSugar >= 1 && this.emptyGlasses >= 8)    {
      this.bananas -= 6;
      this.gallonsOfWater--;
      this.cupsOfSugar--;
      this.emptyGlasses -= 8;
      this.glassesOfBananaade += 8;
      return 8;
    } else {
      return 0;
    }
  }
  
  sellBananaade() {
    if (this.glassesOfBananaade >= 1) {
      this.glassesOfBananaade--;
      this.income += this.price;
      return 1;
    } else {
      this.makeBananaade();
      if (this.glassesOfBananaade >=1) {
        this.glassesOfBananaade--;
        this.income += this.price;
        return 1;
      } else {
        return 0;
      }
    }
  }
  
  showIngredients()
  {
    
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
    newText=document.createTextNode(this.bananas);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Water");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.gallonsOfWater);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Sugar");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.cupsOfSugar);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Empty Glasses");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.emptyGlasses);
    newData.appendChild(newText);

    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newArticle.appendChild(newTable);
    let body = document.getElementsByTagName('body')[0]; 
    body.appendChild(newArticle);    
  }
  showAdmin()
  {   
  
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
    
    //Can only sell 8 at a time.
    if (glassesRequested > 8) glassesRequested = 8;
    
    //If we don't have enough, make some more.
    if (this.glassesOfBananaade < glassesRequested) 
      this.makeBananaade();
    
    if (this.glassesOfBananaade < glassesRequested) {
      //We dont have enough and we have tried to make more so
      //there must not be enough ingredients. 
      //Sell the glasses we have
      this.income += this.price * this.glassesOfBananaade;
      let temp = this.glassesOfBananaade;
      this.glassesOfBananaade = 0;
      return temp;
      
    } else { 
      //We do have enough.  Sell the requested amount.
      this.glassesOfBananaade -= glassesRequested;
      this.income += this.price * glassesRequested;
      return glassesRequested;
    }    
  }
  
  
}

function test() {
  let ls = new BananaadeStand(20,10,10,10, 2.0);
  ls.showAdmin();  
  ls.showIngredients();
}
test();








  
