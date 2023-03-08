/*
// Exo 3

var MavaribleObjet = window;
alert(MavaribleObjet.innerHeight + " " + MavaribleObjet.innerWidth);
*/

/*
// Exo 4
var maVarString = "test";
var maVarNumerique = prompt("Entrez un nombre", 100);

if (maVarString == "test" && maVarNumerique != 200 || maVarNumerique <= 100)
{
    alert("je suis le cas 1");
}
else
{
    alert("je suis le cas 2");
}
*/


/*
// Exo 5

var MavaribleObjet = window;

if (MavaribleObjet.innerWidth < 800)
{
    alert("C petit");
}
else
{
    alert("C grand");
}
*/

/*
// Exo 6
var maVarNumerique = prompt("Entrez un chiffre(N)", 0);

    f = 1;

    for(var i = 1; i <= maVarNumerique; i++)  
    {
      f *= i;   // ou f = f * i;
    }  

alert("Resultat : " + f);
*/

/*
// Exo 7

function addition(nbr1, nbr2)
{
    var result = 1;
    result = nbr1 + nbr2;
    return result;
}

var chiffre1 = prompt("Entrez un chiffre 1(N)", 0);
var chiffre2 = prompt("Entrez un chiffre 2 (N)", 0);

var num1 = parseInt(chiffre1);
var num2 = parseInt(chiffre2);

alert("Resultat : " + addition(num1, num2));
*/

// Exo 8
function modifDiv(text,  idDiv) {
    alert("are u ready ?");
    
    var element = document.getElementById(idDiv);
    element.textContent = text;
}

var textReplace = prompt("Entrez du texte");

if (textReplace != "")
{
    modifDiv(textReplace, "DIV1");
}
else
{
    alert("T'a rien saisi !");
}