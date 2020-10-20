
  var tableGames = document.querySelector('#table-games');
  var pregledTabele = document.querySelector('.pregled-tabele');
  var dodajUTabele = document.querySelector('.dodaj-u-tabelu');
  var izmeniIzTabele = document.querySelector('.izmeni-iz-tabele');
  var rez = document.querySelectorAll('.rez');
  var pregledi = document.querySelectorAll('.pregled');


  for (let i = 0; i < rez.length; i++) {
    rez[i].addEventListener('click', prikazi);

  }

  function prikazi(e) {
    for (let i = 0; i < pregledi.length; i++) {
      pregledi[i].style.display = 'none';


    }

    if (e instanceof Event) {
      e.preventDefault();

      let id = `#${this.getAttribute("href")}`;
      document.querySelector(id).style.display = 'block';
    } else {

      document.querySelector(e).style.display = 'block';
    }

  }


  IspisiSvaKola();

  function IspisiSvaKola() {

    var table = ``;

    for (let i = 0; i < games.length; i++) {
      const game = games[i];
      table += `
    <tr>
     <td>${game.kolo}</td>
    <td>${game.datum}</td>
    <td>${game.domacin}</td>
    <td>${game.golD}</td>
    <td>:</td>
    <td>${game.golG}</td>
    <td>${game.gost}</td>
    <td> <button data-id="${i}" class="upisiRezBtn form-control btn btn-sm btn-succes">Upiši rezultat </button></td>
    <td> <button data-id="${i}" class="obrisiRezBtn form-control btn btn-sm btn-warning"> Obriši utakmicu </button></td>
    </tr>`;

    } tableGames.innerHTML = table;
    var UpisiRezSvi = document.querySelectorAll('.upisiRezBtn');
    var ObrisiRezSvi = document.querySelectorAll('.obrisiRezBtn');

    for (var i = 0; i < ObrisiRezSvi.length; i++) {
      UpisiRezSvi[i].addEventListener('click', MenjajRezultat);
      ObrisiRezSvi[i].addEventListener('click', ObrisiUtakmicu);


    }
  }

  function ObrisiUtakmicu() {
    let id = this.getAttribute('data-id');

    games.splice(id, 1);
    IspisiSvaKola();
    prikazi('#pregled-tabele')
  }

  function MenjajRezultat() {

    id = this.getAttribute('data-id');
    let selectedGame = games[id];

    eKolo.value = selectedGame.kolo;
    egolD.value = selectedGame.golD;
    egolG.value = selectedGame.golG;
    eDatum.value = selectedGame.datum;
    eDom.value = selectedGame.domacin;
    eGost.value = selectedGame.gost;
    // IspisiSvaKola();
    prikazi('#izmeni-iz-tabele');
  }


  var sacuvajUtakmicuBtn = document.querySelector('#sacuvajUtakmicu');
  var MenjajUtakmicuBtn = document.querySelector('#izmeniUtakmicu');
  sacuvajUtakmicuBtn.addEventListener('click', sacuvajUtakmicu);
  MenjajUtakmicuBtn.addEventListener('click', MenjajUtakmicu);

  var koloinput = document.querySelector('[placeholder="kolo"]');
  var domacinINput = document.querySelector('[placeholder="domacin"]');
  var golDinput = document.querySelector('[placeholder="golD"]');
  var golGinput = document.querySelector('[placeholder="golG"]');
  var gostINput = document.querySelector('[placeholder="gost"]');
  var datumINput = document.querySelector('[placeholder="datum"]');


  var eKolo = document.querySelector('.eKolo');
  var eDatum = document.querySelector('.eDatum');
  var eDom = document.querySelector('.eDom');
  var egolD = document.querySelector('.egolD');
  var egolG = document.querySelector('.egolG');
  var eGost = document.querySelector('.eGost');



  function MenjajUtakmicu() {
    const izmenjenaTekma = {
      kolo: eKolo.value,
      datum: eDatum.value,
      domacin: eDom.value,
      golD: egolD.value,
      golG: egolG.value,
      gost: eGost.value
    }
    games[id] = izmenjenaTekma;
    IspisiSvaKola();
    prikazi('#pregled-tabele')
  }

  function sacuvajUtakmicu() {
    const novaTekma = {
      kolo: koloinput.value,
      datum: datumINput.value,
      domacin: domacinINput.value,
      golD: golDinput.value,
      golG: golGinput.value,
      gost: gostINput.value
    }
    games.push(novaTekma);
    koloinput.value = '';
    datumINput.value = '';
    domacinINput.value = '';
    gostINput.value = '';
    golGinput.value = '';
    golDinput.value = '';


    IspisiSvaKola();
    prikazi("#pregled-tabele");
  }

