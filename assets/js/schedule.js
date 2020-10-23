
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
//Fri Oct 23 2020 02:00:00 GMT+0200




  /* TAJMER ZA TRENINGE*/


  if (treninzi.length > 5) {
    treninzi.pop();
  }
  spisakTreninga(treninzi);


  document.getElementById('iPrikaz').addEventListener('click', dajMIVremeTre);
  function dajMIVremeTre() {
    var x = document.getElementById("iDatRodj");
    var y = document.getElementById("itimeRodj");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;

    var isecenGod = currentVal.split("-")[0];
    var isecenMes = currentVal.split('-')[1];
    var isecenDan = currentVal.split('-')[2];
    var defaultValTime = y.defaultValue;
    var currentValTime = y.value;

    var isecenSat = currentValTime.split(':')[0];
    var isecenMin = currentValTime.split(":")[1];
    var isecenSek = "00";



    var month = new Array();
    month[1] = "January";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";


    var n = month[isecenMes];


    console.log(currentVal);
    console.log(isecenGod);
    console.log(isecenMes);
    console.log(isecenDan);
    console.log(currentVal);
    console.log(defaultValTime);
    console.log(currentValTime);
    console.log(isecenSat);
    console.log(isecenMin);
    console.log(isecenSek);
    console.log(n);

    var pravoKrajnjeVreme = `"${n} ${isecenDan}, ${isecenGod} ${isecenSat}:${isecenMin}:${isecenSek} UTC"`;
    console.log(pravoKrajnjeVreme);

    document.getElementById("proba").innerHTML = pravoKrajnjeVreme;


    ubaciTre(pravoKrajnjeVreme);
  }

  
  tajmer();





  function tajmer() {
  
    var nV = document.getElementById('proba');

    novoVreme = nV.innerHTML;

    var endTime = new Date(novoVreme);
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));


    document.getElementById("timer").innerHTML =
      `Ostalo je još <span id="dani">${days} dana,</span>
   <span id="sati">${hours} sati,</span>
  <span id="minuti">${minutes} minuta, </span>
   <span id="sekunde">${seconds} sekundi do sledećeg treninga ! </span>`;


  } setInterval(function () { tajmer(); }, 1000);
  // if(razlika<0) {clearInterval(x)};

  function ubaciTre(abc) {


     abc=this.abc;
    
    var mestoTreninga = document.getElementById('iIme');
    var mestoTreningaV = mestoTreninga.value;
    const noviTr = {
      mesto: mestoTreningaV,
      tr: abc
    };
    treninzi.unshift(noviTr);

    spisakTreninga(treninzi);
  };

  document.getElementById('spisakTreBtn').addEventListener('click', spisakTreninga);
  function spisakTreninga(treninzi) {
    var list = '';
    for (let i = 0; i < treninzi.length; i++) {
      //const element = treninzi[i];
      list += `<div class="my-1"> <ul> <li><input class="form-control" type="text" placeholder="${treninzi[i].mesto} || ${treninzi[i].tr}" readonly>
     </li></ul> </div>`;



    } document.getElementById('spisakTre').innerHTML = list;

  } spisakTreninga(treninzi);










