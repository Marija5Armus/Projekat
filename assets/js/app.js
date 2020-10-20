window.addEventListener('beforeunload', save);
window.onload = function () {
  //  window.addEventListener('contextMenu', function (e) { e.preventDefault(); }) 

  AOS.init();

  var mmenu = document.querySelector('.bars');
  mmenu.addEventListener('click', dajMeni);
  function dajMeni() {
    document.querySelector('#mobile_menu').classList.toggle('hide');
  }



  var korisnik = {};
  var korisnici = [];
  var ulogovan_kor = {};
  var ulogovan_korisnik = JSON.parse(localStorage.getItem("ulogovan"));
  var registruj = document.getElementById("reg");
  var uloguj = document.getElementById("log");
  var ulogovan = document.getElementById("ulog");
  var izloguj = document.getElementById("izlog");


  if (ulogovan_korisnik != null)
    if (ulogovan_korisnik.kor_ime != null) {
      registruj.setAttribute('class', "obrisi");
      uloguj.setAttribute('class', "obrisi");
      ulogovan.setAttribute('class', "dugme");
      ulogovan.textContent = ulogovan_korisnik.kor_ime;
      izloguj.setAttribute('class', "dugme");
    }
  izloguj.addEventListener('click', function () {
    var odgovor = window.confirm("Da li ste sigurni?");
    if (odgovor == false) { return; }
    var prazan = {};
    localStorage.setItem("ulogovan", JSON.stringify(prazan));
    window.location.reload();
  })

  uloguj.addEventListener('click', function () {
    var x = dohvati();
    if (x == null) { window.alert("Nema registrovanih korisnika!"); }
    else {
      document.getElementById('admin_reg').setAttribute('class', "obrisi");
      var f = document.getElementById('admin_log');
      if (f.getAttribute('class') == "form-group") {
        f.setAttribute('class', "obrisi");
      }
      else if (f.getAttribute('class') == "obrisi") {
        f.setAttribute('class', "form-group");
      }
      f.onsubmit = function () {
        var greska = document.querySelector("#greska");
        var kor_ime = document.querySelector("#admin_log_id").value.trim();
        var pass = document.querySelector("#admin_log_pass").value.trim();
        for (i = 0; i < x.length; i++)
          if (x[i].kor_ime == kor_ime) {
            if (x[i].kor_ime == kor_ime && x[i].password == pass) {
              ulogovan_kor.kor_ime = kor_ime;
              ulogovan_kor.password = pass;
              localStorage.setItem("ulogovan", JSON.stringify(ulogovan_kor));
              return;
            }
            else if (x[i].kor_ime == kor_ime && x[i].password != pass) {
              greska.textContent = "Neispravna lozinka!";
              return false;
            }
          }
        greska.textContent = "Nepostojeće korisničko ime!";
        return false;
      }
      f.onreset = function () {
        var odgovor = window.confirm("Da li zelite da odustanete?");
        if (odgovor == false) {
          return false;
        }
        window.location.reload();
      }
    }
  });

  registruj.addEventListener('click', function () {
    document.getElementById('admin_log').setAttribute('class', "obrisi");
    var f = document.getElementById('admin_reg');
    if (f.getAttribute('class') == "form-group") {
      f.setAttribute('class', "obrisi");
    }
    else if (f.getAttribute('class') == "obrisi") {
      f.setAttribute('class', "form-group");
    }
    f.onsubmit = function () {
      var greska = document.querySelector("#greska1");

      // KORISNIČKO IME
      var kor_ime = document.querySelector("#admin_reg_id").value.trim();
      var kor_ime1 = kor_ime.split("");
      if (kor_ime == "") {
        greska.textContent = "Niste uneli korisničko ime!";
        return false;
      }
      if (kor_ime.length < 3) {
        greska.textContent = "Korisničko ime mora sadržati bar 3 karaktera";
        return false;
      }
      for (i = 0; i < kor_ime1.length; i++)
        if (kor_ime1[i].toUpperCase() == kor_ime1[i].toLowerCase() && (kor_ime1[i] < "0" || kor_ime1[i] > "9")) {
          greska.textContent = "Neispravna vrednost! Korisničko ime može saržati samo slova i brojeve!";
          return false;
        }
      var k = dohvati();
      if (k != null) {
        for (i = 0; i < k.length; i++) {
          if (k[i].kor_ime == kor_ime) {
            greska.textContent = "Korisničko ime je zauzeto! Izaberite neko drugo!";
            return false;
          }
        }
      }
      var pass = document.querySelector("#admin_reg_pass").value.trim();
      var pass1 = pass.split("");
      if (pass == "") {
        greska.textContent = "Niste uneli lozinku!";
        return false;
      }
      if (pass.includes(" ")) {
        greska.textContent = "Neispravna vrednost! Lozinka ne sme sadržati razmak!";
        return false;
      }
      if (pass.length < 8) {
        greska.textContent = "Lozinka mora sadržati bar 8 karaktera!";
        return false;
      }
      var broj = 0;
      var velika = 0;
      var mala = 0;
      for (i = 0; i < pass1.length; i++) {
        if (pass1[i] >= "0" && pass1[i] <= "9") { broj++; }
        else if (pass1[i].toUpperCase() == pass1[i] && pass1[i].toLowerCase() != pass1[i]) { velika++; }
        else if (pass1[i].toUpperCase() != pass1[i] && pass1[i].toLowerCase() == pass1[i]) { mala++; }
      }
      if (velika == 0 || mala == 0 || (broj == 0)) {
        greska.textContent = "Neispravna vrednost! Lozinka mora sadržati bar po jedno: veliko slovo, malo slovo i broj!";
        return false;
      }

      // SMESTANJE KORISNIKA

      korisnik.kor_ime = kor_ime;
      korisnik.password = pass;
      if (k != null) {
        console.log(k);
        k.push(korisnik);
        smesti = JSON.stringify(k);
      } else {
        korisnici.push(korisnik);
        smesti = JSON.stringify(korisnici);
      }
      localStorage.setItem("korisnici", smesti);
    }

    f.onreset = function () {
      var odgovor = window.confirm("Da li zelite da odustanete?");
      if (odgovor == false) {
        return false;
      }
      window.location.reload();
    }
  });


  function dohvati() {
    var dohvati = localStorage.getItem("korisnici");
    var k = JSON.parse(dohvati);
    return k;
  }


  /* TAJMER ZA TREE*/

  function validacija() {

    if (document.forma.nIme.value == "") {
      alert("Popunite polje ");

      return false;
    }
    dat = new Date(document.forma.nDatRodj.value).getFullYear();

    // dan = new Date(document.forma.nDatRodj.value).getUTCDay();
    // sat = new Date(document.forma.ntimeRodj.value).getUTCHours();
    // min = new Date(document.forma.ntimeRodj.value).getUTCMinutes();
    // sek = new Date(document.forma.ntimeRodj.value).getUTCSeconds();
    sdat = new Date().getFullYear();


    if (sdat - dat < 10) {
      alert("Korisnik mora biti stariji od 10 godina");
      return false;
    }
    return true;
  }

  var trening = {};
  function popuniPodatke() {
    trening = {
      ime: document.forma.nIme.value,
      datum: document.forma.nDatRodj.value,
      vreme: document.forma.ntimeRodj.value
    };
    console.log(trening);
    console.log(trening.vreme);
    console.log(trening.datum);
  }


  function display() {
    var pr = document.getElementById('proba');
    const div = document.createElement("div", 'id="prikaz"');

    for (var i in trening) {
      if (trening[i] != "") {
        div.innerHTML += `<p> ${i} : ${trening[i]} </p>`;

      }

      pr.appendChild(div);
    }
  }
  // var taster = document.getElementById("iPrikaz");
  // taster.addEventListener("click", display);


  var taster = document.getElementById("iPrikaz");
  taster.addEventListener("click", popuniPodatke);

  var taster = document.getElementById("iPrikaz");
  taster.addEventListener("click", display);

  // var saljiuKaunter = document.getElementById("submit");
  // saljiuKaunter.addEventListener("click", makeTimer());



  // EXTERNI KALENDAR

  mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
  };

  var monthInst,
    dayInst,
    popupInst,
    dateInst,
    preventSet,
    allDaySwitch = document.getElementById('allDay'),
    eventTextInput = document.getElementById('eventText'),
    eventDescInput = document.getElementById('eventDesc'),
    now = new Date(),
    btn = '<button class="mbsc-btn mbsc-btn-outline mbsc-btn-danger md-delete-btn mbsc-ios">Obriši</button>',
    myData = [{
      start: new Date(now.getFullYear(), now.getMonth(), 8, 13),
      end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
      text: 'Lunch @ Butcher\'s' + btn,
      color: '#26c57d'
    }, {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
      text: 'General orientation' + btn,
      color: '#fd966a'
    }, {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 18),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22),
      text: 'Dexter BD' + btn,
      color: '#37bbe4'
    }, {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 30),
      text: 'Stakeholder mtg.' + btn,
      color: '#d00f0f'
    }];

  function navigate(inst, val) {
    if (inst) {
      inst.navigate(val);
    }
  }

  dateInst = mobiscroll.range('#eventDate', {
    controls: ['date', 'time'],
    dateWheels: '|D M d|',
    endInput: '#endInput',
    tabs: false,
    responsive: {
      large: {
        touchUi: false
      }
    },
    cssClass: 'md-add-event-range'
  });

  dayInst = mobiscroll.eventcalendar('#demo-add-event-day', {
    display: 'inline',
    view: {
      eventList: { type: 'day' }
    },
    data: myData,
    onPageChange: function (event, inst) {
      var day = event.firstDay;
      preventSet = true;
      navigate(monthInst, day);
      dateInst.setVal([day, new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours() + 2)], true);
    },
    onEventSelect: function (event, inst) {
      if (event.domEvent.target.classList.contains('md-delete-btn')) {
        mobiscroll.confirm({
          title: 'Brisanje treninga',
          message: 'Da li ste sigurni da brišete trening?',
          okText: 'Potvrdi brisanje',
          callback: function (res) {
            if (res) {
              inst.removeEvent([event.event._id]);
              monthInst.removeEvent([event.event._id]);
              mobiscroll.toast({
                message: 'Deleted'
              });
            }
          }
        });
      }
    }
  });

  monthInst = mobiscroll.eventcalendar('#demo-add-event-month', {
    display: 'inline',
    view: {
      calendar: { type: 'month' }
    },
    data: myData,
    onSetDate: function (event, inst) {
      if (!preventSet) {
        var day = event.date;
        navigate(dayInst, day);
        dateInst.setVal([day, new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours() + 2)], true);
      }
      preventSet = false;
    }
  });

  document.getElementById('allDay').addEventListener('change', function () {
    var allDay = this.checked;
    dateInst.option({
      controls: allDay ? ['date'] : ['date', 'time'],
      dateWheels: (allDay ? 'MM dd yy' : '|D M d|')
    });
  });

  popupInst = mobiscroll.popup('#demo-add-event-popup', {
    display: 'center',
    maxWidth: '50vw',
    cssClass: 'mbsc-no-padding',
    buttons: [{
      text: 'Dodaj trening',
      handler: 'set'
    },
      'cancel'
    ],
    headerText: 'Upišite novi trening',
    onSet: function (event, inst) {
      var eventDates = dateInst.getVal(),
        events = {
          start: eventDates[0],
          end: eventDates[1],
          text: (eventTextInput.value || 'Trening') + btn,
          title: eventTextInput.value || 'Trening',
          description: eventDescInput.value,
          allDay: allDaySwitch.checked,
          free: document.querySelector('input[name="free"]:checked').value == 'true'
        };
      monthInst.addEvent(events);
      dayInst.addEvent(events);
      eventTextInput.value = '';
      eventDescInput.value = '';
      // Navigate the calendar to the new event's start date
      monthInst.navigate(eventDates[0], true);
    },
  });
  document.getElementById('showAddEventPopup').addEventListener('click', function () { popupInst.show(); }, false);


  // MOJ TAJMER ZA TRE RUCNI

  // function makeTimer() {
  //   //var tajm=document.getElementById('itimeRodj').value;
  //   // var endTime = new Date("October 10, 2020 17:00:00 PDT");
  //   var endTime = new Date(document.forma.ntimeRodj.value);
  //   var endTime = (Date.parse(endTime)) / 1000;

  //   var now = new Date();
  //   var now = (Date.parse(now) / 1000);

  //   var timeLeft = endTime - now;

  //   var days = Math.floor(timeLeft / 86400);
  //   var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  //   var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  //   var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  //   if (hours < "10") { hours = "0" + hours; }
  //   if (minutes < "10") { minutes = "0" + minutes; }
  //   if (seconds < "10") { seconds = "0" + seconds; }

  //   $("#days").html(days + "<span>Days</span>");
  //   $("#hours").html(hours + "<span>Hours</span>");
  //   $("#minutes").html(minutes + "<span>Minutes</span>");
  //   $("#seconds").html(seconds + "<span>Seconds</span>");

  // }

  // setInterval(function () { makeTimer(); }, 1000);


  // MANIPULACIJA SEKCIJAA
  // let mainCont=document.getElementById('mainContainer');

  var allLinks = document.querySelectorAll('.nav-link');

  var section = document.getElementsByTagName('SECTION');
  var prvaSekcija = document.getElementById('prvaSekcija');

  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', showView);

  }

  function showView(e) {
    prvaSekcija.style.display = 'none';
    e.preventDefault();

    for (let j = 0; j < section.length; j++) {
      section[j].style.display = 'none';

    }
    var idSekcije = `#${this.getAttribute("href")}`;
    document.querySelector(idSekcije).style.display = 'block';
    if (idSekcije == 'prvaSekcija') {
      // prvaSekcija.style.display='block';
    }

  }






}







// document.querySelector('.btnMember2').addEventListener('click', oslobodiListuClanova);
// function oslobodiListuClanova() {

//   clanovi.splice(0, clanovi.length);




// }



function save() {
  localStorage.games = JSON.stringify(games);
  localStorage.clanovi = JSON.stringify(clanovi);
  localStorage.deca = JSON.stringify(deca);
  localStorage.videos = JSON.stringify(videos);
}




