$.ajax({
    url: 'https://data.cityofnewyork.us/resource/25th-nujf.json',
    dataType: 'json',
    success: function(data) {
        function everything(){
        var theirName = prompt("What is your name?");
        for (var i = 0; i < 1000; i++){
            if (theirName == data[i].nm){
                var count = data[i].cnt;
            }
        }
        var math = parseInt(count)
        document.write(math + " other people have your name! (In New York City)")
        }
        everything();
        function extension(){
            alert("Please write 'yes' or 'no' for the following question.");//Specification on answers in the loop.
            var userAnswer = prompt("Are you having a female baby and you need a name idea?");
            if (userAnswer == 'yes'){
                for (var i = 0; i < data.length; i++){
                var allNames = [data[i].nm + " " ]
                //     var oneName = allNames[Math.floor(Math.random(allNames))];
                // console.log(allNames)
                //     console.log(oneName);
                document.write(allNames)
                // }
                // FAILED EXTENSION FOR 4 HOURS! ^
                var namesArray = [""]
                }
            }
        }
        extension();
    }

});





 // data set/api: https://data.cityofnewyork.us/resource/25th-nujf.json
 // search enginge: find out if your name is popular
 // for some reason..only females?
