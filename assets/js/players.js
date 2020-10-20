
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
        <a class="korpaText btn btn-p btn-sm btn-outline-success my-2 my-sm-0" href="#" data-id="${i}">DODAJ U POSTAVU</a>
      </p></div>
      </div>`;


    }
    // if (row==igraci)
    igraci.innerHTML = info;


    // else if(row)
  }

  var korpa = document.getElementById('korpa');

  var KlasaT = document.getElementsByClassName("korpaText");
  for (let i = 0; i < KlasaT.length; i++) {
    KlasaT[i].addEventListener("click", dohvatiArtikal);
  }

  var tbMOdel = document.getElementById("tbDeoModel");

  var sortiraj = document.getElementById("sortMarka");

  var sortirajAZ = document.getElementById("sortMarkaAZ");

  var tbMOdelPoz = document.getElementById("tbDeoModelPoz");

  var btnCena = document.getElementById('btnCena');

  var prikaziCenu = document.getElementById("rnCena");


  var cena = document.getElementById("rnCena").value;


  function izmeniCenu() {
    // var cena = document.getElementById("rnCena").value;
    document.getElementById("cenaIzbor").textContent = cena;
  }


  function filterCena() {
    //ovde smo sami stavljali filter


    var noviFIlterPoCeni = data.filter(function (el) {
      if (el.Godine <= cena) return el;
    });
    podaciIgraca(noviFIlterPoCeni);
  }
  var newn = [];
  function dohvatiArtikal(e) {
    if (e instanceof Event) {
      e.preventDefault();
      //evo je ovde fja prevent po default
      // var korpaLink = this; //ovde smo dodeli objektu
      var idArtikla = this.getAttribute('data-id');
      var pronadjeniArtikal = data.find(function (el) {
        if ((el.Id == idArtikla)) {


          return el;

        } else return false;
      });
      if (pronadjeniArtikal) {

        newn.push(pronadjeniArtikal);
        //  console.log(pronadjeniArtikal);
        var k = '';

        newn.forEach(function (element) {
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
        }); korpa.innerHTML = k;
      }
    } else { console.log("Ne postoji artikal sa definisanim id"); }
  };

  function sortirajMarke(e) {

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

  function sortirajMarkeAZ(e) {

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

  function filterModela(e) {
    if (e instanceof Event) {
      e.preventDefault();
      var modelUnosa = this.value;
      var noviNIz = data.filter(function (el) {
        if (
          data.Ime.toUpperCase().indexOf(modelUnosa.trim().toUpperCase() != -1)
        ) {
          return el;
        }
      });
      podaciIgraca(noviNIz);
    }
  }

  function filterModelaPozicije(e) {

    // if (e instanceof Event) {
    //   e.preventDefault();
    var modelPozicije = tbMOdelPoz.value;
    var noviNIzP = data.filter(function (el) {
      if (
        data.Pozicija.toUpperCase().indexOf(modelPozicije.trim().toUpperCase() != -1)
      ) {
        return el;
      }
    });
    podaciIgraca(noviNIzP);
    // }


  }

  tbMOdel.addEventListener('input', filterModela);
  sortiraj.addEventListener("click", sortirajMarke);
  sortirajAZ.addEventListener("click", sortirajMarkeAZ);
  tbMOdelPoz.addEventListener('input', filterModelaPozicije);
  btnCena.addEventListener('click', filterCena);
  prikaziCenu.addEventListener('input', izmeniCenu);




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