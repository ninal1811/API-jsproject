$.ajax({
    url: 'https://data.cityofnewyork.us/resource/25th-nujf.json',
    dataType: 'json',//Takes the user input of their (female name) and starts to go through the API finding the same name and it's amount of how many people have the same name as the user on the API
    success: function(data) {
        function everything(){
            var theirName = prompt("What is your name?");
            for (var i = 0; i < 1000; i++){
                if (theirName == data[i].nm){
                    var count = data[i].cnt;
                }
            }// Prints out how many people have the same as user input.
            var math = parseInt(count);
            document.write(math + " other people have your name! (In New York City)");
        }
        everything();
            //Asks user if they want a female baby name suggestion. Takes user input of yes or no and applies it.
        function extension(){
            alert("Please write 'yes' or 'no' for the following question.");//Specification on answers in the loop.
            var userAnswer = prompt("Are you having a female baby and you need a name idea?");
            if (userAnswer == 'yes'){
                var userNum = prompt("Pick a number from 1 to 1000:");
                for (var i = 0; i < data.length; i++){
                    var allNames = [data[i].nm + " " ];
                }
                // Randomly generates a name from the listed API due to the input of "Yes" from the user. 
                var oneName = data[Math.floor(Math.random() * userNum)];
                console.log(oneName);
                document.write("<br>" + oneName.nm + " is your recommended name!");
            }
            
            //var oneName = data[Math.floor(Math.random() * userNum)];
            //console.log(oneName);
            //document.write("<br>" + oneName.nm + " is your recommended name!");
            //document.write(data[Math.floor(Math.random() * userNum)]);

            //var oneName = allNames[Math.floor(Math.random() * allNames.length)];
            //console.log(allNames)
            //console.log(oneName);
            //document.write(oneName);
            // }
            // FAILED EXTENSION FOR 4 HOURS! ^
            //var namesArray = [""]
        }
        extension();
    }

});





 // data set/api: https://data.cityofnewyork.us/resource/25th-nujf.json
 // search enginge: find out if your name is popular
 // for some reason..only females?
