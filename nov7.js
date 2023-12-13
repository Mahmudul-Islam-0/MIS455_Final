//Function
//Loop
//Array
//Object


function submit(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    add(num1,num2);
    multiply(num1,num2);

    function add(num1,num2){
        var sum = num1 +num2;
        console.log(sum);
        document.getElementById("content").innerText = sum;
    }

    function multiply(num1,num2){
        var mul = num1 *num2;
        console.log(mul);
        document.getElementById("content").innerHTML = mul;
    }
    for(var p =5; p<=20; p+=5){
        console.log(p);
    }

    //ARRAY

    var arr = [10, 4, 55, 23, 12, 70, 24];
    var arr2 = ["aa","bb","cc","dd"];
    console.log(arr[2]);

    //OBJECT

    var student = {name: "Khondkar", id: 345672, phn: 1987456321, bloodg: "O +ve", address: "30 banani" }

    console.log("Address: ", student.address)



}