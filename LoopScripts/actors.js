let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   
   // Who is the Academy Member whose ID is 187?
   var  member187 = [];

   for (let i=0; i < academyMembers.length; i++) { 
         if (academyMembers[i].memID == 187) {
              member187 = academyMembers[i]; break;
            
         }
   }
        console.log(member187.name);


   //if (member187) {
    //console.log("Academy Member with ID 187 is: " + member187.name);
//} //else {
    //console.log("Academy Member with ID 187 not found");
//}


   // Who has have been in at least 3 films?
   var threeFilms = [];

   for (let i=0; i < academyMembers.length; i++) {
       if (academyMembers[i].films.length < 4) {
           threeFilms.push(academyMembers[i]);
       }
   }




   // Who has a name that starts with "Bob"?

    var bobName = [];
    for (let i=0; i < academyMembers.length; i++) {
        if (academyMembers[i].name.includes("Bob")) {
            bobName.push(academyMembers[i]);
        }
    }
    console.log(bobName);


   // HARDER: Which Academy Members have been in a film
   // that starts with "A"
   

   

    var aFilm = [];
    for (let i=0; i < academyMembers.length; i++) {
        if (academyMembers[i].films.includes("A")) {
            aFilm.push(academyMembers[i]);
        }
    }

    console.log(aFilm);    // didnt get this one