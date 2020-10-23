window.addEventListener('beforeunload', save);

window.onload = function () {
  //  window.addEventListener('contextMenu', function (e) { e.preventDefault(); }) 

  AOS.init();




  // };








  // dan = new Date(document.forma.nDatRodj.value).getUTCDay();
  //   sat = new Date(document.forma.ntimeRodj.value).getUTCHours();
  //   min = new Date(document.forma.ntimeRodj.value).getUTCMinutes();
  //   sek = new Date(document.forma.ntimeRodj.value).getUTCSeconds();



  // var trening = {};
  // function popuniPodatke() {
  //   trening = {
  //     ime: document.forma.nIme.value,
  //     datum: document.forma.nDatRodj.value,
  //     vreme: document.forma.ntimeRodj.value
  //   };
  //   console.log(trening);
  //   console.log(trening.vreme);
  //   console.log(trening.datum);
  // }




  // function display() {
  //   var pr = document.getElementById('proba');
  //   const div = document.createElement("div", 'id="prikaz"');

  //   for (var i of trening) {
  //     if (trening[i] != "") {
  //       div.innerHTML += `<p> ${i} : ${trening[i]} </p>`;

  //     }

  //     pr.appendChild(div);
  //   }
  // }
  // var taster = document.getElementById("iPrikaz");
  // taster.addEventListener("click", display);


  // var taster = document.getElementById("iPrikaz");
  // taster.addEventListener("click", popuniPodatke);

  // var taster = document.getElementById("iPrikaz");
  // taster.addEventListener("click", display);

  // var saljiuKaunter = document.getElementById("submit");
  // saljiuKaunter.addEventListener("click", makeTimer());



  // EXTERNI KALENDAR




  // MANIPULACIJA SEKCIJAA


  var mS = document.querySelector('#mainContainer');
  mS.style.display = 'none';
  var allLinks = document.querySelectorAll('.nav-link');
  var section = document.getElementsByTagName('SECTION');
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', showView);
  }
  function showView(e) {
    e.preventDefault();
    mS.style.display = 'block';
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
  localStorage.treninzi = JSON.stringify(treninzi);
}




