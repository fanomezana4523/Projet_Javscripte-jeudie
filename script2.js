
n = prompt("antrer un nombre positif  ou >o ");
function factorielle(n)
{
if (n<0) 
{
return "erreur";
}
else {
if (n == 0)
{
return 1;
}
else {
return n * factorielle (n-1);
}
}
} 
console.log(factorielle(n));