function connect(){

    var searchTerm = document.getElementById("searchBox").value ; 
   
    var url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchTerm}` ;
    console.log (url);
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
   
   }