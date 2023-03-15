
/*
// Exo 3
function maFunction()
{
  //pour appeler une API on utilise la méthode fetch()
  fetch('Api.php').then((resp) => resp.json()).then(
    function(data) 
  {
    // data est la réponse http de notre API.
    console.log(data);
    UpdateDiv("arenne",data[0]);
  })
  .catch(function(error) {
    // This is where you run code if the server returns any errors
    console.log(error);
  });
}

function UpdateDiv(id,text){
  document.getElementById(id).innerHTML = text;
}
*/

/*
// Exo 4
const intervalID = setInterval(maFunction, 2000);

function maFunction()
{
  //pour appeler une API on utilise la méthode fetch()
  fetch('Api.php').then((resp) => resp.json()).then(
    function(data) 
  {
    // data est la réponse http de notre API.
    console.log(data);
    UpdateDiv("arenneExo4",data[0]);
  })
  .catch(function(error) {
    // This is where you run code if the server returns any errors
    console.log(error);
  });
}

function UpdateDiv(id,text){
  document.getElementById(id).innerHTML = text;
}
*/

// Exo 5

// Créer un objet JSON avec les données à envoyer
const data = {name: "John"};

// Envoyer la requête POST
fetch("Api.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    // Récupérer les données de la réponse et les afficher dans une div
    const div = document.getElementById("maDiv");
    div.innerHTML = JSON.stringify(data);
  })
  .catch(error => console.error(error));