class BananaadeStand {
		//ADD a constructor, member fields, and methods
        
    //Build an Unordered List with the correct data in showAdmin.
    //I am showing you a table as an example of how to create
    //HTML as a string.  You must change the table to an unordered
    //list with the correct values (price, glassesOfBananaade, and
    //income).
    showAdmin(ele) {

      //Concatenate strings to table to build the 
      //HTML just like you might type it.
      let table = "";
      
      //You don't necessarily need the \n and spaces 
      //but it makes it look better if you select 
      //"view source" from the browser.
      table += "<table>\n"; 
      table += "  <tr>\n"; 
      table += "    <td>Red</td>\n"; 
      table += "    <td>Blue</td>\n"; 
      table += "  </tr>\n"; 
      table += "  <tr>\n"; 
      table += "    <td>Green</td>\n"; 
      table += "    <td>Yellow</td>\n"; 
      table += "  </tr>\n"; 
      table += "<table>\n"; 

      //You MUST use innerHTML.  If you use textContent
      //it will put all the tags on the web page.
      ele.innerHTML = table;
      
      //Of course, your show admin should build an
      //ordered list as per the exercise document instead
      //of a table.              
    }
    showIngredients(ele) {
      //Build a table with ingredients and add it to ele's innerHTML.
    }
    
}


function test1() {
  //The following code will execute when the JS file loads.  
  let ls = new BananaadeStand(15,3,4,20,1.5);            
  //ls.makeBananaade();
  //ls.sellBananaade();
  //ls.sellMoreBananaade(8);
  //Call showAdmin and showIngredients to add the HTML to the page.
  let article1 = document.getElementById('admin'); 
  ls.showAdmin(article1);
  let article2 = document.getElementById('ingredients'); 
  ls.showIngredients(article2);
  
}

test1(); //Run the test


