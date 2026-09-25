class BananaadeStand {
  constructor(bananas, water, sugar, emptyGlasses, pricePerGlass) {
    this.bananas = bananas;
    this.water = water;
    this.sugar = sugar;
    this.emptyGlasses = emptyGlasses;
    this.pricePerGlass = pricePerGlass;
    this.glassesOfBananaade = 0;
    this.income = 0.0;
  }

  makeBananaade() {
    if (this.bananas >= 3 && this.water >= 1 && this.sugar >= 2 && this.emptyGlasses >= 1) {
      this.bananas -= 3;
      this.water -= 1;
      this.sugar -= 2;
      this.emptyGlasses -= 1;
      this.glassesOfBananaade += 1;
      return true;
    }
    return false;
  }

  sellBananaade() {
    if (this.glassesOfBananaade > 0) {
      this.glassesOfBananaade -= 1;
      this.income += this.pricePerGlass;
      return true;
    }
    return false;
  }

  sellMoreBananaade(requestedGlasses) {
    let soldCount = 0;
    for (let i = 0; i < requestedGlasses; i++) {
      if (this.sellBananaade()) {
        soldCount++;
      } else {
        break;
      }
    }
    return soldCount;
  }

  showAdmin(ele) {
    let html = "";
    html += "<h1>Admin</h1>\n";
    html += "<ul>\n";
    html += `  <li>Price per Glass: $${this.pricePerGlass.toFixed(2)}</li>\n`;
    html += `  <li>Glasses of Bananaade: ${this.glassesOfBananaade}</li>\n`;
    html += `  <li>Income: $${this.income.toFixed(2)}</li>\n`;
    html += "</ul>\n";

    ele.innerHTML = html;
  }

  showIngredients(ele) {
    let html = "";
    html += "<table>\n";
    html += "  <caption>Ingredients</caption>\n";
    html += "  <tr>\n";
    html += "    <td>Bananas</td>\n";
    html += `    <td>${this.bananas}</td>\n`;
    html += "  </tr>\n";
    html += "  <tr>\n";
    html += "    <td>Water</td>\n";
    html += `    <td>${this.water}</td>\n`;
    html += "  </tr>\n";
    html += "  <tr>\n";
    html += "    <td>Sugar</td>\n";
    html += `    <td>${this.sugar}</td>\n`;
    html += "  </tr>\n";
    html += "  <tr>\n";
    html += "    <td>Empty Glasses</td>\n";
    html += `    <td>${this.emptyGlasses}</td>\n`;
    html += "  </tr>\n";
    html += "</table>\n";

    ele.innerHTML = html;
  }
}

function test1() {
  let ls = new BananaadeStand(15, 3, 4, 20, 1.5);

  for (let i = 0; i < 10; i++) {
    ls.makeBananaade();
  }

  ls.sellMoreBananaade(8);

  let article1 = document.getElementById('admin');
  ls.showAdmin(article1);

  let article2 = document.getElementById('ingredients');
  ls.showIngredients(article2);
}

test1();