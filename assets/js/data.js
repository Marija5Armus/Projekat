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
            Ime: "Sanja Sofronić",
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
            Ime: "Nikolina Batinic",
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
            Slika: "assets/img/kaca.jpeg",
            Ime: "Katarina Andrić",
            Broj: 16,
            Pozicija: "krilo desno",
            Datum: '24.08.1999.',
            Godine: 21
        },
        {
            Id: 8,
            Slika: "assets/img/kaja.jpeg",
            Ime: "Katarina Antešić",
            Broj: 1,
            Pozicija: "Golman ",
            Datum: '16.11.2000.',
            Godine: 20
        },
        {
            Id: 9,
            Slika: "assets/img/draga.jpeg",
            Ime: "Draga Kljajic",
            Broj: 4,
            Pozicija: "prednji veyni",
            Datum: '26.04.1998.',
            Godine: 22
        },
        {
            Id: 10,
            Slika: "assets/img/brusin.jpeg",
            Ime: "Jovana Brusin",
            Broj: 9,
            Pozicija: "Krilo levo",
            Datum: '14.06.1996.',
            Godine: 24
        },
        {
            Id: 11,
            Slika: "assets/img/zeljana.jpeg",
            Ime: "Željana Maksimović",
            Broj: 17,
            Pozicija: "Centarfor",
            Datum: '04.04.1996.',
            Godine: 24
        }

    ];



    var turniri=[
        {
            godina: 2020,
            tur: {
                prvi: 'IV Međunarodni turnir “Trofej Levač Rekovac”'
               
            }
        }, 
        {
            godina: 2019,
            tur: {
                prvi: " III Međunarodni turnir “Trofej Levač Rekovac” ",
                drugi:" VI Međunarodni turnir prijateljstva “Pljevlja 2018” (Crna Gora) ",
                treci: "Međunarodni turnir Cupa Laura Rus (Rumunija)",
                cetvrti: 'Međunarodni turnir “Majdanpek 2019”',

            }
        }, 
         {
            godina: 2018,
            tur: {
                prvi: " Memorijalni turnir “Deda Mlađa Mitrović” Beograd ",
                drugi:" Međunarodni turnir 'Puldin Cup' - Plovdiv (Bugarska)",
                treci: ' Međunarodni turnir prijateljstva “Pljevlja 2018” (Crna Gora)',
                cetvrti: 'Međunarodni turnir “Levač” Rekovac',
                peti:'Memorijalni turnir posvećen žrtvama bombardovanja Batajnica' , 
                sesti: 'Međunarodni turnir "Cupa Laura Rus” (Rumunija)'
            }
        }, 
        {
            godina: 2017,
            tur: {
                prvi: "Božićni turnir (ŽFK Jedinstvo) Dubovac ",
                drugi:" Međunarodni turnir za devojčice 'Požega' (Crna Gora)",
                treci: "Međunarodni turnir Fragaria Cup - Prešov (Slovačka)",
                cetvrti:'Međunarodni turnir prijateljstva "Pljevlja 2017” (Crna Gora)'
            }
        },
        {
            godina: 2016,
            tur: {
                prvi: " VIII međunarodni turnir “Deda Mlađa Mitrović” Beograd ",
                drugi:" Međunarodni turnir prijateljstva “Pljevlja 2016” (Crna Gora)",
                treci: "Međunarodni turnir “Prijedor 2016” (BIH)"
            }
        }];

var games = [];
var clanovi=[];
var deca=[];
var videos=[];
var allVideos=[];
var treninzi=[];



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

if(localStorage.treninzi){
    treninzi=JSON.parse(localStorage.treninzi);
}
// if(localStorage.data){
//     data=JSON.parse(localStorage.data);
// }
