window.addEventListener('beforeunload', save);

window.onload = function () {
  //  window.addEventListener('contextMenu', function (e) { e.preventDefault(); }) 

  AOS.init();



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




function save() {
  localStorage.games = JSON.stringify(games);
  localStorage.clanovi = JSON.stringify(clanovi);
  localStorage.deca = JSON.stringify(deca);
  localStorage.videos = JSON.stringify(videos);
  localStorage.treninzi = JSON.stringify(treninzi);
  // localStorage.data=JSON.stringify(data);
}




