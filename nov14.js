




    var numbers = [100, 121, 32, 124, 54, 236, 400];
    var count =0;

    for ( var a =0; a< numbers.length; a =a +1){
        if ( numbers[a]>200)
        {
            count++;
        }
    }
    console.log(count);


    //object

    var someone = {
        firstName: "Abv",
        lastName: "xyz",
        studentID: 12312313,
        quizMarks: [10,15,18],
        bloodgrp: "O+ve",
        address: "House 12, Road 11, somewhere,somecity"
    }
    console.table(someone)
    