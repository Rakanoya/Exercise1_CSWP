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

  showAdmin() {
    // Create section container
    let section = document.createElement("section");
    section.setAttribute("id", "admin");

    // Create H1 header
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("Admin");
    h1.appendChild(h1Text);
    section.appendChild(h1);

    // Create Unordered List
    let ul = document.createElement("ul");

    // List Item 1: Price per Glass
    let li1 = document.createElement("li");
    let text1 = document.createTextNode(`Price per Glass: $${this.pricePerGlass.toFixed(2)}`);
    li1.appendChild(text1);
    ul.appendChild(li1);

    // List Item 2: Glasses of Bananaade
    let li2 = document.createElement("li");
    let text2 = document.createTextNode(`Glasses of Bananaade: ${this.glassesOfBananaade}`);
    li2.appendChild(text2);
    ul.appendChild(li2);

    // List Item 3: Income
    let li3 = document.createElement("li");
    let text3 = document.createTextNode(`Income: $${this.income.toFixed(2)}`);
    li3.appendChild(text3);
    ul.appendChild(li3);

    section.appendChild(ul);

    // Append completed section to the body
    document.body.appendChild(section);
  }

  showIngredients() {
    // Create section container
    let section = document.createElement("section");
    section.setAttribute("id", "ingredients");

    // Create H1 header
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("Inventory");
    h1.appendChild(h1Text);
    section.appendChild(h1);

    // Create Table
    let table = document.createElement("table");

    // Helper function to build table rows with text nodes
    const createRow = (label, value) => {
      let tr = document.createElement("tr");

      let tdLabel = document.createElement("td");
      let labelText = document.createTextNode(label);
      tdLabel.appendChild(labelText);

      let tdVal = document.createElement("td");
      let valText = document.createTextNode(value);
      tdVal.appendChild(valText);

      tr.appendChild(tdLabel);
      tr.appendChild(tdVal);
      return tr;
    };

    table.appendChild(createRow("Bananas", this.bananas));
    table.appendChild(createRow("Water", this.water));
    table.appendChild(createRow("Sugar", this.sugar));
    table.appendChild(createRow("Empty Glasses", this.emptyGlasses));

    section.appendChild(table);

    // Append completed section to the body
    document.body.appendChild(section);
  }
}

function test1() {
  // Add main page title heading to body
  let mainHeader = document.createElement("h1");
  let headerText = document.createTextNode("The Worlds Best Bananaade");
  mainHeader.appendChild(headerText);
  document.body.appendChild(mainHeader);

  // Initialize stand
  let ls = new BananaadeStand(15, 3, 4, 20, 1.5);

  ls.makeBananaade();
  ls.sellBananaade();
  ls.sellMoreBananaade(8);

  // Call display methods (no arguments needed now)
  ls.showAdmin();
  ls.showIngredients();
}

test1();
