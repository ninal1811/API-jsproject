$.ajax({
    url: 'https://data.cityofnewyork.us/resource/25th-nujf.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});
// Later: HTML/CSS introduce topic
var theirName = prompt("What is your name?")
for (var i = 1; i < theirName; i++) {
    if (theirName == "nm"){
        document.write("There are other people with that name!") // ignore for now pls and ty
}
            
var i = 0
    for (let i in "nm") {
          console.log(i + theirName[i])
    }
}
 
 
//Extension: 
//var babyname = prompt("Are you having a female baby and you need a name idea?") 
    




 // data set/api: https://data.cityofnewyork.us/resource/25th-nujf.json
 // search enginge: find out if your name is popular
 // for some reason..only females?
