
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
        <span><strong>Broj :</strong> ${igrac.Broj}</span><br>
        <span><strong>Pozicija :</strong> ${igrac.Pozicija}</span><br>
        <span><strong>Datum rođenja :</strong> ${igrac.Datum}</span><br>
        <span><strong>Golova u sezoni :</strong> ${igrac.Godine - 13} </span><br>
        <a class="btnPostava admin btn btn-p btn-sm btn-outline-success my-2 my-sm-0" href="#" data-id="${i}">DODAJ U POSTAVU</a>
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
      for (let i = 0; i < listaPrvaPostava.length; i++) {
        const element = listaPrvaPostava[i];

        k += `<div class="playerM">
        <img src=${element.Slika}  class="card-img-top " alt="...">
       <div class="cardPlayer"><p class="card-title">${element.Ime}</p>
        <p class="card-text">
      <span><strong>Broj :</strong> ${element.Broj}</span><br>
    
    </p></div>
    </div>`;
      }


     prvaPostava.innerHTML = k;


   
  }
} else { console.log("Ne postoji artikal sa definisanim id"); }
};

// var dugmeNazad = document.querySelectorAll('.btnVratiNazad');
// for (let i = 0; i < dugmeNazad.length; i++) {
//   dugmeNazad[i].style.color='red';
//    dugmeNazad[i].addEventListener('click', brisiPostavu)
  
// }
// function brisiPostavu(){
//   e.preventDefault();
//   let idObr = this.getAttribute('data-id');
//     listaPrvaPostava.splice(idObr, 1);
    
// }



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

// imeIgraca.addEventListener('input', filterImenaIgraca);
// sortiraj.addEventListener("click", sortirajBrojeveAZ);
// sortirajZA.addEventListener("click", sortirajBrojeveZA);
// pozicijaIgraca.addEventListener('input', filterPozicijeIgraca);
// btnGodine.addEventListener('click', filterPoGod);
// prikaziInputGod.addEventListener('input', menjajGodine);




// var ime = document.querySelector('player_name');
// var prezime = document.querySelector('player_surname');
// var datumRodj = document.querySelector('player_date');
// var pozicija = document.querySelector('player_position');



// function previewFiles() {

//   var preview = document.querySelector('#previewImg');
//   var files = document.querySelector('input[type=file]').files;

//   function readAndPreview(file) {

//     // Make sure `file.name` matches our extensions criteria
//     if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
//       var reader = new FileReader();

//       reader.addEventListener("input", function () {

//         var image = new Image();
//         image.height = 100;
//         image.width = 100;
//         image.title = file.name;
//         image.src = this.result;

//         preview.appendChild(image);
//       }, false);

//       reader.readAsDataURL(file);

//     }

//   }

//   if (files) {
//     [].forEach.call(files, readAndPreview);
//   }
//   var slIgracaSrc = image.src;
//   return slIgracaSrc;

// }

// document.getElementById('browse').addEventListener('change', previewFiles);


// var t = 1;
// document.getElementById('savePlayer').addEventListener('click', sacuvajIgraca);
// function dodeliId() {
//   t = t + 2;
//   return t;
// }


// function vratiGodine() {
//   return a = (new Date().getFullYear) - parseInt(datumRodj.value.trim().split('-')[2]);
// }

// function sacuvajIgraca() {

//   e.preventDefault();






//   const player = {
//     Id: dodeliId(),
//     Slika: previewFiles(),
//     Ime: ime.value + " " + prezime.value,
//     Broj: broj.value,
//     Pozicija: pozicija.value,
//     Datum: datumRodj.value,
//     Godine: vratiGodine()
//   };

//   data.push(player);
// };

  //console.log(games);