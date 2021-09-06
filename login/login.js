function myFunction() {
    var x = document.getElementById("userPassword").value;
       var y = document.getElementById("nameImputField").value;
      text = "név: " + y + "<br>" + "Paswword: " + x;
      
      /*document.getElementById("demo").innerHTML =text;*/
    
      
      /*új oldalon jeleníti meg a nevet és a jelszót */
      var w = window.open();
      w.document.open();
      w.document.write(text);
      w.document.close();
      
    }