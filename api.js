// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data));

// // async wait, try catch, ....

fetch ("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => show(data)) ;l


function show (data){

   console.log (data);
//     console.log ("Total Items found:", data.length);
// for (var i=1; i<=data.length; i++){
//     console.log ("User Name:", data[i-1].username);

var oldContent = document.getElementById("container") ;

for (var a=1 ; a<data.length; a++){
 var newDiv = document.createElement("div");
 newDiv.innerHTML = `<b>User Name:</b> ${data[a-1].username} <br>
                     <b>Email: </b> ${data[a-1].email}<br>
                     <b>City: </b>${data[a-1].address.city}<br><br> <br>`  ;
 newDiv.classList.add("innerStyle")

    oldContent.appendChild(newDiv);

}


}