$.ajax({
    url: 'https://api.publicapis.org/entries',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});

// data set/api: https://data.cityofnewyork.us/resource/25th-nujf.json
// search enginge: find out if your name is popular
// for some reason..only females?
