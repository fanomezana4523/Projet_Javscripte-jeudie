const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  Tab = [];
   for(index in books)
   {
    Tab[index]= books[index].rented;
    console.log(Array.isArray(Tab));
   }


 console.log("Quel est livre le plus emprunté ?");
 Tabb = [];
  for (k in books)
  {
   Tabb[k] = books[k].rented;
  }
  {
   const Numerique = (a, b) => {return a - b;}
   a = Tabb.sort(Numerique); }
   let  max = Tabb.reduce(function(a,b) {return Math.max(a, b);});
   let Tableau = [];
   for(let h in books ){
      Tableau=[books[h].title ,books[h].rented];
      if(Tableau[1] == max){
      console.log(books[h].title);
      }
     } 
  console.log("Quel est livre le moins emprunté ?");
  Tabbb = [];
  for (k in books)
  {
   Tabbb[k] = books[k].rented;
  }
  {
   const Numerique = (a, b) => {return a - b;}
   a = Tabbb.sort(Numerique); }
   let  min = Tabbb.reduce(function(a,b) {return Math.min(a, b);});
   let Tableaux = [];
   for(let hh in books ){
    Tableaux=[books[hh].title ,books[hh].rented];
    if(Tableaux[1] == min){
    console.log(books[hh].title);
      }
   } 

     console.log("Trouve le livre avec l'ID: 873495");

      let Tableauxx = [];
      for(let hx in books ){
      Tableauxx=[books[hx].title ,books[hx].id,books[hx].rented];
       if ( Tableauxx[1] == 873495)
        {
         console.log(books[hx].title);
        }
      }

      console.log("Supprime le livre avec l'ID: 133712");
      var Tableauxxx = [];
      for(let hxx in books )
      {
      Tableauxxx=[books[hxx].title+"  "+books[hxx].rented ,books[hxx].id];
      if(Tableauxxx[1] == 133712)
      { delete Tableauxxx[hxx];} 
       console.log(Tableauxxx);
     }
   console.log(Tableauxxx.sort());

      
    


