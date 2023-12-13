function calculate() {

    var userName = document.getElementById("nameBox").value;
    var userCourse = parseInt(document.getElementById("courseBox").value);

    //var courseCount = parseInt(userCourse);

    var fees = userCourse * 10000;


    document.getElementById("content").innerText = "Total tuition fees: " + fees;
    document.getElementById("content").innerHTML =
        `Student Name <b><span class="red">${userName}</span> </b> <br><br>
    Courses taken: <b>${userCourse}</b> <br><br> 
    <h4> Total fees: <b>${fees}</b>`;

}


