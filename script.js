$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {
      var userOption = prompt("Do wish to view the overal data? (Input 1). Or view a specific date? (Input 2, please only enter 1 or 2)")
      
      if (userOption == 1) {
        var tdeathCount = 0;
        var tcaseCount = 0;
        for(i = 0; i < data.length; i++){
          var deathCount = parseInt(data[i].death_count);
          tdeathCount = tdeathCount + deathCount
          var caseCount = parseInt(data[i].case_count);
          tcaseCount = tcaseCount + caseCount
        }
        document.write("The death count in total is " + tdeathCount + ".</br>");
        document.write("The case count in total is " + tcaseCount + ".");
      }
      
      else if (userOption == 2) {
        var userDate = prompt("What date you want to go? (Please enter in this in form of YYYY-MM-DD");
        for(i = 0; i < data.length; i++){
          var deathCount = data[i].death_count;
          var caseCount = data[i].case_count;
          var date = data[i].date_of_interest;
          var checkPoint = 0;
          if (date.substring(0,10) == userDate){
            document.write("The death count of " + userDate + " is " + deathCount + ".</br>");
            document.write("The case count of " + userDate + " is " + caseCount + ".");
            checkPoint ++;
          }
        }
        if (checkPoint == 0) {
          document.write("Invaild input or date is out of bounds/undocumented, please refresh the page and try again.")
        }
      }
      
      else {
        document.write("Invaild input, please refresh the page and try again.")
      }
    }
});
