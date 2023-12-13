function process() {
    var person = document.getElementById("nameBox").value;
    var marks = parseInt(document.getElementById("marksBox").value);


    var msg;

    if (marks >= 90) {

        msg = `<h4>Hello ${person}, you have recieved "A" in this course.<h4> `

    }
    else if (marks >= 85) {
        msg = `<h4>Hello ${person}, you have recieved "A-" in this course.<h4> `
    }
    else if (marks >= 80) {
        msg = `<h4>Hello ${person}, you have recieved "B+" in this course.<h4> `
    }
    else if (marks >= 75) {
        msg = `<h4>Hello ${person}, you have recieved "B" in this course.<h4> `
    }
    else if (marks >= 70) {
        msg = `<h4>Hello ${person}, you have recieved "B-" in this course.<h4> `
    }
    else if (marks >= 65) {
        msg = `<h4>Hello ${person}, you have recieved "C+" in this course.<h4> `
    }
    else if (marks >= 60) {
        msg = `<h4>Hello ${person}, you have recieved "C" in this course.<h4> `
    }
    else if (marks >= 55) {
        msg = `<h4>Hello ${person}, you have recieved "C-" in this course.<h4> `
    }
    else if (marks >= 50) {
        msg = `<h4>Hello ${person}, you have recieved "D+" in this course.<h4> `
    }
    else if (marks >= 45) {
        msg = `<h4>Hello ${person}, you have recieved "D" in this course.<h4> `
    }
    else {

        msg = `<h4>Hello ${person}, you have recieved "F" in this course.<h4> `

    }
    document.getElementById("content").innerHTML = msg;
}