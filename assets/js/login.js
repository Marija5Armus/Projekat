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
    var sveDozvole = document.querySelectorAll('.admin');
    for (let i = 0; i < sveDozvole.length; i++) {
      sveDozvole[i].style.visibility = 'visible';


    }
  }
izloguj.addEventListener('click', function () {
  var odgovor = window.confirm("Da li ste sigurni?");
  if (odgovor == false) { return; }
  var prazan = {};

  localStorage.setItem("ulogovan", JSON.stringify(prazan));
  var sveZabrane = document.querySelectorAll('.admin');
  for (let i = 0; i < sveZabrane.length; i++) {
    sveZabrane[i].style.visibility = "hidden";
  };
  window.location.reload();
});

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
            // var sveDozvole = document.querySelectorAll('.admin');
            // for (let i = 0; i < sveDozvole.length; i++) {
            //   sveDozvole[i].style.visibility='visible';

            // }


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

