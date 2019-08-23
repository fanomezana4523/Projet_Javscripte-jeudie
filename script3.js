
function pyramid(n)
 { 
   for (let i = 1; i <= n; i++)
    {
     let s = " ";
     for (let j = 1; j <=  n ; j++) 
       {
     	(j >= n + 1 - i ) ? 
        s += "*":s += " "; 
       }
       console.log(s);
      }

}
console.log("Salut, bienvenue dans ma super pyramide !");
pyramid(44);
