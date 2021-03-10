$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {
        var totalDeath = 0;
        var totalCases = 0;
        
        document.write(data.length);
        for (var i = 0 ; i < data.length; i++) {
            totalDeath = totalDeath + data[i].death_count;
            document.write(totalDeath)
        }
    } 
});
