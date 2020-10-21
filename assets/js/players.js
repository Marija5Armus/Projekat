
// SORT, FILTER IGRACA I STAMPANJE POSTAVE ZA UTAKMICU
var igraci = document.querySelector('.igraci');
podaciIgraca(data);
function podaciIgraca(data) {
  let info = "";
  for (let i = 0; i < data.length; i++) {
    let igrac = data[i];
    info += `<div class=" player d-flex flex-wrap">
      <img src=${igrac.Slika} class="card-img-top" alt="...">
      <div class="cardPlayer"><p class="card-title">${igrac.Ime}</p>
      <p class="card-text">
        <span><strong>Broj :</strong> ${igrac.Broj}</span>
        <span><strong>Pozicija :</strong> ${igrac.Pozicija}</span>
        <span><strong>Datum rođenja :</strong> ${igrac.Datum}</span>
        <span><strong>Nastupi za Rezentaciju : </strong> U-15, U-17, U-19, Futsal A </span>
        <span><strong>Golova u sezoni :</strong> 9 </span>
        <a class="btnPostava btn btn-p btn-sm btn-outline-success my-2 my-sm-0" href="#" data-id="${i}">DODAJ U POSTAVU</a>
      </p></div>
      </div>`;
  }
  igraci.innerHTML = info;
}


var prvaPostava = document.getElementById('prvaPostava');

var igraciZaSledeceKolo = document.getElementsByClassName("btnPostava");
for (let i = 0; i < igraciZaSledeceKolo.length; i++) {
  igraciZaSledeceKolo[i].addEventListener("click", uzmiIgraca);
}

var imeIgraca = document.getElementById("imeIgraca");

var sortiraj = document.getElementById("sortBrojevaAZ");

var sortirajZA = document.getElementById("sortBrojevaZA");

var pozicijaIgraca = document.getElementById("pozIgraca");
var pozIgracaVr = pozicijaIgraca.value;
var btnGodine = document.getElementById('btnGodine');

var prikaziInputGod = document.getElementById("inputGod");

var godIgraca = document.getElementById("inputGod").value;


function menjajGodine() {
  var godIgraca = document.getElementById("inputGod").value;
  document.getElementById("godIzbor").textContent = godIgraca;
}


function filterPoGod() {
  var godIgraca = document.getElementById("inputGod").value;
  var noviFilterPoGod = data.filter(function (el) {
    if (el.Godine <= godIgraca) return el;
  });
  podaciIgraca(noviFilterPoGod);
}


var listaPrvaPostava = [];
function uzmiIgraca(e) {
  if (e instanceof Event) {
    e.preventDefault();

    var idIgraca = this.getAttribute('data-id');
    var uzetiIgraci = data.find(function (el) {
      if ((el.Id == idIgraca)) {


        return el;

      } else return false;
    });
    if (uzetiIgraci) {

      listaPrvaPostava.push(uzetiIgraci);
      //  console.log(uzetiIgraci);
      var k = '';

      listaPrvaPostava.forEach(function (element) {
        k += `<div class=" player d-flex flex-wrap">
        <img src=${element.Slika} class="card-img-top" alt="...">
       <div class="cardPlayer"><p class="card-title">${element.Ime}</p>
        <p class="card-text">
      <span><strong>Broj :</strong> ${element.Broj}</span>
      <span><strong>Pozicija :</strong> ${element.Pozicija}</span>
      <span><strong>Datum rođenja :</strong> ${element.Datum}</span>
      <span><strong>Nastupi za Rezentaciju : </strong> U-15, U-17, U-19, Futsal A </span>
      <span><strong>Golova u sezoni :</strong> 9 </span>
    </p></div>
    </div>`;
      }); prvaPostava.innerHTML = k;
    }
  } else { console.log("Ne postoji artikal sa definisanim id"); }
};

function sortirajBrojeveAZ(e) {
  e.preventDefault();
  var d = data.sort(function (el1, el2) {

    if (el1.Broj < el2.Broj) {
      return -1;
    }
    if (el1.Broj > el2.Broj) {
      return 1;
    }
    if (el1.Broj == el2.Broj) {
      return 0;
    }
  });
  podaciIgraca(d);
}

function sortirajBrojeveZA(e) {
  e.preventDefault();
  var dZ = data.sort(function (el1, el2) {
    if (el1.Broj > el2.Broj) {
      return -1;
    }
    if (el1.Broj < el2.Broj) {
      return 1;
    }
    if (el1.Broj == el2.Broj) {
      return 0;
    }
  });
  podaciIgraca(dZ);
}

function filterImenaIgraca(e) {
  if (e instanceof Event) {
    e.preventDefault();
    var imeIgracaVr = this.value;
    var newNizIgracaIme = data.filter(function (el) {
      if (
        el.Ime.toUpperCase().indexOf(imeIgracaVr.trim().toUpperCase() != -1)
      ) {
        return el;
      }
    });
    podaciIgraca(newNizIgracaIme);
  }
}

function filterPozicijeIgraca(e) {
  e.preventDefault();
  var pozIgracaVr = this.value;
  var newNizIgracaPoz = data.filter(function (el) {
    if (
      el.Pozicija.toUpperCase().indexOf(pozIgracaVr.trim().toUpperCase() != -1)
    ) {
      return el;
    }
  });
  podaciIgraca(newNizIgracaPoz);

}

imeIgraca.addEventListener('input', filterImenaIgraca);
sortiraj.addEventListener("click", sortirajBrojeveAZ);
sortirajZA.addEventListener("click", sortirajBrojeveZA);
pozicijaIgraca.addEventListener('input', filterPozicijeIgraca);
btnGodine.addEventListener('click', filterPoGod);
prikaziInputGod.addEventListener('input', menjajGodine);




  // var ime=document.querySelector('player_name');
  // var prezime=document.querySelector('player_surname');
  // var datumRodj=document.querySelector('player_date');
  // var pozicija=document.querySelector('player_position');


  // function loadFile() {
  //   var input, file, fr;

  //   if (typeof window.FileReader !== "function") {
  //     alert("Api nije podrzan od strane pretrazivaca");
  //     return;
  //   }
  //   input = document.getElementById("file");
  //   if (!input) {
  //     alert("ne mogu da nadjem file input element");
  //   } else if (!input.files) {
  //     alert("Ne podrzavam svojstva ovog file inputa");
  //   } else if (!input.files[0]) {
  //     alert("niste izabrali file");
  //   }

  //   file = input.files[0];
  //   fr = new FileReader();
  //   fr.onload = prihvatamTekst;
  //   fr.readAsText(file);

  //   function prihvatamTekst(e) {
  //     let linije = e.target.result;
  //     var niz = JSON.parse(linije);
  // // document.getElementById('cont').innerHTML=niz;
  //     console.log(niz);
  //   }
  // };

  // document.getElementById('savePlayer').addEventListener('click', sacuvajIgraca);
  // function dodeliId(){
  //  return   t=2;
  // }


  // function vratiGodine(){
  //   return a= (new Date().getFullYear) - (datumRodj.value);
  // }

  // function sacuvajIgraca(){

  //   const  player={
  //     // Id:  dodeliId,
  //     Slika: "",
  //     Ime: ime.value+" "+prezime.value,
  //      Broj:broj.value,
  //     Pozicija: pozicija.value,
  //    Datum:datumRodj.value.toDateString()
  // // Godine: vratiGodine
  //   };
  // };

  //console.log(games);