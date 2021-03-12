$.ajax({
    url: 'https://data.cityofnewyork.us/resource/25th-nujf.json',// API linkage
    dataType: 'json',
    success: function(data) {
        // "Everything" prints out how many other females have the same name as the user input in New York City.
        function everything(){
            var theirName = prompt("What is your name?");
            for (var i = 0; i < 1000; i++){
                if (theirName == data[i].nm){
                    var count = data[i].cnt;
                }
            }
            var math = parseInt(count);
            document.write(math + " other people have your name! (In New York City)"); // Concatenation 
        }
        everything();
        
        
        //Extention: Asks user if they want a female baby name suggestion. Takes user input of yes or no and applies it.
        function extension(){
            alert("Please write 'yes' or 'no' for the following question.");//Specification on answers in the loop.
            var userAnswer = prompt("Are you having a female baby and you need a name idea?");
            // If statement assigns each object in the API to a number and the number the user picked is the one we show.
            if (userAnswer == 'yes'){
                var userNum = prompt("Pick a number from 1 to 1000:");
                for (var i = 0; i < data.length; i++){
                    var allNames = [data[i].nm + " " ];
                }
                
                // Randomly generates a name from the listed API due to the input of a number" from the user.
                var oneName = data[Math.floor(Math.random() * userNum)];
                console.log(oneName);
                document.write("<br>" + oneName.nm + " is your recommended name!"); // Concatenation
            }
        }
        extension();
    }

});
