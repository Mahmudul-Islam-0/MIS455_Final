
// //Question 1
// var basic = parseInt(document.getElementById("salary").value);
// var hra;
// var da;

// if (basic <= 10000) {
//     hra = basic * 0.2;
//     da = basic * 0.8;
// }
// else if (basic <= 20000) {
//     hra = basic * 0.25;
//     da = basic * 0.9;
// }
// else {
//     hra = basic * 0.35;
//     da = basic * 0.95;
// }


// var gross_salary = basic + hra + da;
// console.log(gross_salary);


// //Question 8
// var student1 = { name: "Rafsan Khan", age: 34, address: "House 432, Banani, Rd-11", marks: [40, 33, 80, 93, 12, 46] };
// var avg = 0;
// var sum = 0;

// for (var i = 0; i < student1.marks.length; i++) {
//     sum += student1.marks[i];
// }
// avg = sum / student1.marks.length;
// console.log(avg);



//Question 1
// var marks = parseInt(document.getElementById("marksBox").value);


// var msg;

// if (marks >= 90) {

//     msg = `<h4>You have recieved "A" in this course.<h4> `

// }
// else if (marks >= 85) {
//     msg = `<h4>You have recieved "A-" in this course.<h4> `
// }
// else if (marks >= 80) {
//     msg = `<h4>You have recieved "B+" in this course.<h4> `
// }
// else if (marks >= 75) {
//     msg = `<h4>You have recieved "B" in this course.<h4> `
// }
// else if (marks >= 70) {
//     msg = `<h4>You have recieved "B-" in this course.<h4> `
// }
// else if (marks >= 65) {
//     msg = `<h4>You have recieved "C+" in this course.<h4> `
// }
// else if (marks >= 60) {
//     msg = `<h4>You have recieved "C" in this course.<h4> `
// }
// else if (marks >= 55) {
//     msg = `<h4>You have recieved "C-" in this course.<h4> `
// }
// else if (marks >= 50) {
//     msg = `<h4>You have recieved "D+" in this course.<h4> `
// }
// else if (marks >= 45) {
//     msg = `<h4>You have recieved "D" in this course.<h4> `
// }
// else {

//     msg = `<h4>You have recieved "F" in this course.<h4> `

// }
// document.getElementById("content").innerHTML = msg;



// //Question 4 
// var newSum =0;
// for (var i = 400; i<=450;i++){
//     newSum += i;
// }
// console.log(newSum);

//Question 2
// var unit = parseInt(document.getElementById("unit").value);
// var amt = 0;
// if (unit <= 50) {
//     amt = unit * 0.50;
// }
// else if (unit <= 150) {
//     amt = 25 + ((unit - 50) * 0.75);
// }
// else if (unit <= 250) {
//     amt = 100 + ((unit - 150) * 1.20);
// }
// else {
//     amt = 220 + ((unit - 250) * 1.50);
// }
// surcharge = amt * 0.20;
// total_amt = amt + surcharge;

// console.log(total_amt);

//Question 5

// var avg =0;
// var sum =0;
// var count = 0;
// for (var i = 500; i<=565; i++){
//     if(i%2==0){
//         sum += i;
//         count ++;
//     }
// }
// avg = sum/count;
// console.log(avg);

// Question 6

// var arr = [43, 654, 34, 60, 532, 46, 300] ;
// var avg =0;
// var sum =0;
// for (var i = 0; i<arr.length; i++){
//     sum += arr[i];
// }
// avg = sum/arr.length;
// console.log(avg);

//question 7
var arr = [434, 545, 231, 7675, 543, 678]  ;
var count =0;
for (var i = 0; i<arr.length; i++){
    if(arr[i]>600){
        count++;
    }
}
console.log(count);