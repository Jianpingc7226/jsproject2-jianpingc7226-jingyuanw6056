$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {

      var userDate = prompt("What date you want to go?(please enter in this form YYYY-MM-DD");

      for(i=0;i<data.length;i++){
        var deathCount = data[i].death_count;
        var caseCount = data[i].case_count;
        var date = data[i].date_of_interest;
        if(date.substring(0,10) == userDate){
          document.write("the death count of that day is " + deathCount + ".</br>");
          document.write("the case count of that day is " + caseCount + ".");
          return
          };
      }
    }
});