$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {

        $.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {

      var userDate = prompt("What date you want to go?(please enter in this form YYYY-MM-DD");

      for(i=0;i<data.length;i++){

        var date = data[i].date_of_interest
        if(date.substring(0,10) == userDate){
          console.log("good")
          return
          } else {
            console.log("bad")
            return
          };       
      }
    }
});
        
        
    } 
});
