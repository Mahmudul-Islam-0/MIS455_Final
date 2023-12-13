/*
function submit(){
    var price = parseInt(document.getElementById("price").value);
    var quantity = parseInt(document.getElementById("quantity").value);
    var totalPrice = price * quantity;
    
    var msg;
    var discount;

    if (totalPrice>20000 && quantity>20){
        totalPrice = totalPrice-(totalPrice*10/100);
        discount = totalPrice*10/100;
        msg = `The total discount amount is: '${discount}' and the total payable amount is: '${totalPrice}'`;
    }
    else if(totalPrice>10000 && quantity>10){
        totalPrice = totalPrice - (totalPrice*5/100);
        discount = totalPrice*5/100;
        msg = `The total discount amount is: '${discount}' and the total payable amount is: '${totalPrice}'`;
    }
    else if(totalPrice>5000 && quantity>6){
        totalPrice = totalPrice - (totalPrice*3/100);
        totalPrice = totalPrice*3/100;
        msg = `The total discount amount is: '${discount}' and the total payable amount is: '${totalPrice}'`;
    }
    else{
        totalPrice =totalPrice;
        discount =0;
        msg = `The total discount amount is: '${discount}' and the total payable amount is: '${totalPrice}'`;
    }

    document.getElementById("content").innerHTML = msg;
}
*/
/*
function submit(){

    var age = document.getElementById("age").value;
    var courses = document.getElementById("courses").value;

    var msg;

    if(age > 25 || courses>35){
        msg = `You have recieved TK.20000 scholarship`;
    }
    else if(age > 20 || courses>25){
        msg =`You have recieved TK.15000 scholarship`;
    }
    else{
        msg = `You have recieved Tk.3500 scholarship`;
    }
    document.getElementById("content").innerHTML = msg;

}
*/

function submit(){

    var fees = parseInt(document.getElementById("fees").value);
    var courses = parseInt(document.getElementById("courses").value);
    var totalFees = fees*courses;

    var msg;

    if(totalFees > 50000 && courses>5){
        totalFees = totalFees - (totalFees*10/100) + 5000;
        msg = `Total Payable: ${totalFees}`;
    }
    else if(totalFees > 40000 && courses>4){
        totalFees = totalFees - (totalFees*5/100) + 4000;
        msg = `Total Payable: ${totalFees}`;
    }
    else{
        totalFees = totalFees - (totalFees*2/100) + 2000;
        msg = `Total Payable: ${totalFees}`;
    }
    var content = document.getElementById("content");
    var newDiv =document.createElement("div");
    var np =document.createElement("p");
    var sp =document.createElement("p");
    newDiv.innerHTML = msg;
    np.innerHTML = `Very cool`;
    sp.innerHTML = `Not so cool`;
    content.appendChild(newDiv);
    content.appendChild(np);
    content.appendChild(sp);

}
