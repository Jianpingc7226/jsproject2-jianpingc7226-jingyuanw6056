$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {
      var userOption = prompt("Do wish to view the overal data? (Input 1). Or view a specific date? (Input 2)", "Put only 1 or 2") //gives the user some options to choose from
      
      if (userOption == 1) {
        var tdeathCount = 0;
        var tcaseCount = 0; //starting values
        for(i = 0; i < data.length; i++){
          var deathCount = parseInt(data[i].death_count); //converts string into int where it can be added up
          tdeathCount = tdeathCount + deathCount
          var caseCount = parseInt(data[i].case_count); //converts string into int where it can be added up
          tcaseCount = tcaseCount + caseCount
        }
        document.write("The death count in total is " + tdeathCount + ".</br>");
        document.write("The case count in total is " + tcaseCount + ".");
      }
      
      else if (userOption == 2) {
        var userDate = prompt("What date you want to go? (Please enter in this in form of YYYY-MM-DD", "Example 2020-06-01");
        for(i = 0; i < data.length; i++){
          var deathCount = data[i].death_count;
          var caseCount = data[i].case_count; //we use this to simplify things up
          var date = data[i].date_of_interest;
          if (date.substring(0,10) == userDate){ //Jian Ping did a very good job at this part :D
            document.write("The death count of " + userDate + " is " + deathCount + ".</br>");
            document.write("The case count of " + userDate + " is " + caseCount + ".");
            return; //vaild input will end the entire function, so the error message will not show up
          }
        }
        document.write("Invaild input or date is out of bounds/undocumented, please refresh the page and try again.") //User will get a friendly message if non-vaild input is given. 
      }
      
      else {
        document.write("Invaild input, please refresh the page and try again.") //Incase the user put something wrong, here is a notice message, again
      }
    }
});
