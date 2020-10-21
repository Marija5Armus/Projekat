window.addEventListener('beforeunload', save);
window.onload = function () {
  //  window.addEventListener('contextMenu', function (e) { e.preventDefault(); }) 

  AOS.init();

 


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

  function makeTimer() {
    //var tajm=document.getElementById('itimeRodj').value;
    var endTime = new Date("October 10, 2020 17:00:00 PDT");
    var endTime = new Date(document.forma.ntimeRodj.value);
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");

  }

  setInterval(function () { makeTimer(); }, 1000);


  // MANIPULACIJA SEKCIJAA
  // let mainCont=document.getElementById('mainContainer');

  var mS = document.querySelector('#mainContainer');
  mS.style.display='none';
  var allLinks = document.querySelectorAll('.nav-link');
  var section = document.getElementsByTagName('SECTION');
  // var prvaSekcija = document.getElementById('prvaSekcija');
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', showView);
  }
  function showView(e) { 
    e.preventDefault();
mS.style.display='block';
    for (let j = 0; j < section.length; j++) {
      section[j].style.display = 'none';
    }
    var idSekcije = `#${this.getAttribute("href")}`;
    document.querySelector(idSekcije).style.display = 'block';
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




