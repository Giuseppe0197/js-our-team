/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascrip */


/* creaimo le variabili nesessarie per stampare in pagina le varie immagini con i relativi nomi e ruoli */

let containerTeam = document.getElementById("team-container");

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

let teamElements = ""

/* creiamo gli elementi nella pagina */

for (let i = 0; i < teams.length; i++){

    let objTeam = teams[i];

    for (let key in objTeam){
        console.log(key, objTeam[key]);
    }

    teamElements += `
        <div class"team-card">
            <div class="card-image">
                <img src=""
                />
            </div>
            <div class="card-text">
                <h3></h3>
                <p></p>
            </div>
        </div>
    `

}

/* stampiamo gli elementi sulla pagina */

containerTeam.innerHTML = teamElements;

/* permettiamo all'utente di inserire una propria immagine mediante il form già fornito */