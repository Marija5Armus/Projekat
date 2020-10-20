var data =
    [
        {
            Id: 0,
            Slika: "assets/img/lanaprof.jpeg",
            Ime: "Lana Colic",
            Broj: 10,
            Pozicija: "Prednji vezni",
            Datum: '12.10.2001.',
            Godine: 19
        },
        {
            Id: 1,
            Slika: "assets/img/sara.jpeg",
            Ime: "Sara Stokic",
            Broj: 19,
            Pozicija: "Krilo desno",
            Datum: '20.03.2001.',
            Godine: 19
        },
        {
            Id: 2,
            Slika: "assets/img/sebek.jpeg",
            Ime: "Sara Sebek",
            Broj: 16,
            Pozicija: "Zadnji vezni",
            Datum: '12.11.2002.',
            Godine: 18
        },
        {
            Id: 3,
            Slika: "assets/img/sanjica.jpeg",
            Ime: "SANJA SOFRONIC",
            Broj: 8,
            Pozicija: "Zadnji vezni",
            Datum: '22.02.2003.',
            Godine: 17
        },
        {
            Id: 4,
            Slika: "assets/img/nina.jpeg",
            Ime: "Nina Jovanovic",
            Broj: 6,
            Pozicija: "Bek desni",
            Datum: '09.06.1999.',
            Godine: 21
        },
        {
            Id: 5,
            Slika: "assets/img/nidzge.jpeg",
            Ime: "Nikolina BAtinic",
            Broj: 11,
            Pozicija: "Zadnji vezni",
            Datum: '05.12.2001.',
            Godine: 19
        },
        {
            Id: 6,
            Slika: "assets/img/zeljka.jpeg",
            Ime: "Zeljka Belovan",
            Broj: 24,
            Pozicija: "Krilo desno",
            Datum: '24.04.1996.',
            Godine: 24
        },
        {
            Id: 7,
            Slika: "assets/img/sebek.jpeg",
            Ime: "SARA SEBEK",
            Broj: 16,
            Pozicija: "Zadnji vezni",
            Datum: '12.11.2002.',
            Godine: 18
        },

    ];


var games = [];
var clanovi=[];
var deca=[];

var videos=[];
var allVideos=[];

if(localStorage.games){
    games=JSON.parse(localStorage.games);
}
if(localStorage.clanovi){
    clanovi=JSON.parse(localStorage.clanovi);
}

if(localStorage.deca){
    deca=JSON.parse(localStorage.deca);
}
if(localStorage.videos){
    videos=JSON.parse(localStorage.videos);
}
