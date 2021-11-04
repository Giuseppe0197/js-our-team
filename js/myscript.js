/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascrip */


/* creaimo le variabili nesessarie per stampare in pagina le varie immagini con i relativi nomi e ruoli */

let containerTeam = document.querySelector(".team-container");

/* creiamo un'array che contiene gli oggetti necessari per creare le varie sezioni */

var teams = [

    {
        "imgteam" : "img/angela-caroll-chief-editor.jpg",
        "nameTeam" : "Angela Caroll",
        "roleTeam" : "Chief Editor"
    },

    {
        "imgteam" : "img/angela-lopez-social-media-manager.jpg",
        "nameTeam" : "Angela Lopez",
        "roleTeam" : "Social Media Manager"
    },

    {
        "imgteam" : "img/barbara-ramos-graphic-designer.jpg",
        "nameTeam" : "Barbara Ramos",
        "roleTeam" : "Graphic Designer"
    },

    {
        "imgteam" : "img/scott-estrada-developer.jpg",
        "nameTeam" : "Scott Estrada",
        "roleTeam" : "Developer"
    },

    {
        "imgteam" : "img/walter-gordon-office-manager.jpg",
        "nameTeam" : "Walter Gordon",
        "roleTeam" : "Office Manager"
    },

    {
        "imgteam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder Ceo"
    },

];

/* creiamo una stringa vuota per inserire gli elementi */

let teamElements = "";

/* creiamo gli elementi nella pagina */

for (let i = 0; i < teams.length; i++){

    /* creaiamo le variabili per gli oggetti dell'array */

    let teamImg = "";

    let teamName = "";

    let teamRole = "";

    /* facciamo un ciclo for in per assegnare il valore corrispondente degll'oggetto che andrà preso per crearlo in html */

    for (let key in teams){

        /* console.log(key, objTeam[key]); */

        teamImg = teams[i].imgteam;

        teamName = teams[i].nameTeam;

        teamRole = teams[i].roleTeam;

    }

    teamElements += `

        <div class="team-card">

            <div class="card-image">

                <img src="${teamImg}"

                />

            </div>

            <div class="card-text">

                <h3>${teamName}</h3>

                <p>${teamRole}</p>
                
            </div>

        </div>
    `

}

/* stampiamo gli elementi sulla pagina */

containerTeam.innerHTML += teamElements;

/* permettiamo all'utente di inserire una propria immagine mediante il form già fornito */

/* creiamo una variabile per il bottone del form */

let buttonAdd = document.getElementById("addMemberButton");

/* creiamo una variabile che andrà a prendere i risultati inseriti dall'utente */

buttonAdd.addEventListener("click",

    function() {

        /* creiamo le variabili per far inserire all'utente i dati richiesti */

        let nameAdd = document.getElementById("name").value;

        let roleAdd = document.getElementById("role").value;

        let imageAdd = document.getElementById("image").value;

        let newTeamSubject = {

            "imgteam" : imageAdd,
            "nameTeam" : nameAdd,
            "roleTeam" : roleAdd
        
        };

        /* pushamo il nuovo oggetto */
        
        teams.push(newTeamSubject);

        console.log(teams);

    }

)