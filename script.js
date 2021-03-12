$.ajax({
    url: 'https://data.cityofnewyork.us/resource/25th-nujf.json',
    dataType: 'json',
    success: function(data) {
      
        var theirName = prompt("What is your name?");
        for (var i = 0; i < 1000; i++){
            if (theirName == data[i].nm){
                var count = data[i].cnt;
                console.log(count);
            }
        }
        var math = parseInt(count)
        document.write(math + " other people have your name! (In New York City)")
      
        
        function extension(){
        var babyName = prompt("Are you having a female baby and you need a name idea?"); 
        if(babyName =="yes"){
        var allNames = data.nm
        console.log(allNames)
        }else{
            console.log("Okay Thanks!")
        }
        extension(); 
    }
       
        
        
}

  
});





 // data set/api: https://data.cityofnewyork.us/resource/25th-nujf.json
 // search enginge: find out if your name is popular
 // for some reason..only females?
