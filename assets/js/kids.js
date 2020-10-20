window.addEventListener('beforeunload', save);
AOS.init();



var listaNoveDece = document.querySelector('#listaDece');
ispisiSveGreske();


function ispisiSveGreske() {
    let ispisGresaka = document.getElementsByClassName("ispisGreske");
    for (let i = 0; i < ispisGresaka.length; i++) {
        ispisGresaka[i].classList.add("hide");
    };
}

document.getElementById('kid_regBtn').addEventListener('click', proveriUnos_kidReg);


function proveriUnos_kidReg(e) {

    e.preventDefault();

    var nizGresaka = [];
    var nizPodataka = [];
    var kidName = document.getElementById('kid_name');
    var kidNameV = kidName.value.trim();
    var kidParName = document.getElementById('kid_parent_name');
    var kidPNameV = kidParName.value.trim();
    var kidDate = document.getElementById('kid_date');
    var kidD = kidDate.value.trim();
    var kidAdress = document.getElementById('kid_address');
    var kidA = kidAdress.value.trim();
    var kidCity = document.getElementById('kid_city');
    var kidC = kidCity.value.trim();
    var kidMobile = document.getElementById('kid_mobile');
    var kidM = kidMobile.value.trim();
    var kidEmail = document.getElementById('kid_email');
    var kidE = kidEmail.value.trim();



    var paternName = new RegExp(/^[A-Z]{1}[a-z]{2,20}(\s[A-Z]{1}[a-z]{2,20})+/);
    var paternDatum = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    var paternAddress = new RegExp(/^[A-Z]{1}[a-z]{2,20}(\s[a-z]{1,20})+/);
    var paternCity = new RegExp(/^[A-Z]{1}[a-z]{2,20}/);
    var paternMob = new RegExp(/^06[01234569]\/[\d]{3}\-[\d]{3,4}$/);
    var paternEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    if (paternName.test(kidNameV)) {
        nizPodataka.push("Ime i Prezime vašeg deteta: " + kidNameV);
        kidName.classList.remove("red");
        kidName.nextElementSibling.classList.add("hide");
    } else {
        nizGresaka.push("Ime i Prezime vašeg deteta nije u dobrom formatu!");
        kidName.classList.add("red");
        kidName.nextElementSibling.classList.remove("hide");
    }
    if (paternName.test(kidPNameV)) {
        nizPodataka.push("Vaše Ime i Prezime: " + kidPNameV);
        kidParName.classList.remove("red");
        kidParName.nextElementSibling.classList.add("hide");
    } else {
        nizGresaka.push("Vaše Ime i Prezime nije u dobrom formatu!");
        kidParName.classList.add("red");
        kidParName.nextElementSibling.classList.remove("hide");
    }

    let paternTest = paternDatum.test(kidD);
    if (paternTest) {
        nizPodataka.push("Vaš datum rođenja deteta: " + kidD);
        kidDate.classList.remove("red");
        kidDate.nextElementSibling.classList.add("hide");
    } else {
        nizGresaka.push("Vaš datum rođenja deteta nije u dobrom formatu!");
        kidDate.classList.add("red");
        kidDate.nextElementSibling.classList.remove("hide");
    }
    if (paternAddress.test(kidA)) {
        nizPodataka.push("Vaša adresa: " + kidA);
        kidAdress.classList.remove("red");
        kidAdress.nextElementSibling.classList.add("hide");
    } else {
        nizGresaka.push("Vaša adresa nije u dobrom formatu!");
        kidAdress.classList.add("red");
        kidAdress.nextElementSibling.classList.remove("hide");
    }
    if (paternCity.test(kidC)) {
        nizPodataka.push("Vaš Grad: " + kidC);
        kidCity.classList.remove("red");
        kidCity.nextElementSibling.classList.add("hide");
    } else {
        nizGresaka.push("Vaš Grad nije u dobrom formatu!");
        kidCity.classList.add("red");
        kidCity.nextElementSibling.classList.remove("hide");
    }
    if (paternMob.test(kidM)) {
        nizPodataka.push("Vaš kontakt telefon: " + kidM);
        kidMobile.classList.remove("red");
        kidMobile.nextElementSibling.classList.add("hide");
    } else {
        nizGresaka.push("Vaš kontakt telefon nije u dobrom formatu!");
        kidMobile.classList.add("red");
        kidMobile.nextElementSibling.classList.remove("hide");
    }
    if (paternEmail.test(kidE)) {
        nizPodataka.push("Vaša E-mail adresa: " + kidE);
        kidEmail.classList.remove("red");
        kidEmail.nextElementSibling.classList.add("hide");
    } else {
        nizGresaka.push("Vaša E-mail adresa nije u dobrom formatu!");
        kidEmail.classList.add("red");
        kidEmail.nextElementSibling.classList.remove("hide");
    }

    let size = document.getElementById("kid_size").value;
    if (size == "0") {
        nizGresaka.push("Nije izabrana veličina!");
    } else {
        nizPodataka.push("Konfekcijska veličina opreme: " + size);
    }


    if (nizGresaka.length > 0) {
        var lista = "<ol>";
        for (let i = 0; i < nizGresaka.length; i++) {
            lista += `<li>${nizGresaka[i]}</li>`;
        }
        lista += "<ol>";
        document.getElementById("ispisGreske").innerHTML = lista;
    }

    if (nizPodataka.length > 0) {
        let lista = "<ol>";


        for (let i = 0; i < nizPodataka.length; i++) {
            lista += `<li>${nizPodataka[i]}</li>`;
        }
        lista += "<ol>";
        document.getElementById("ispisPodaci").innerHTML = lista;
    }
    if (nizGresaka.length == 0) {
        
        sacuvajNovoDete();


    }


    function sacuvajNovoDete() {

        const Dete = {
            ImeDeteta: kidNameV,
            ImeRoditelja: kidPNameV,
            DatRodj: kidD,
            Adresa: kidA,
            Grad: kidC,
            Tel: kidM,
            Email: kidE
        }
        deca.push(Dete);

        // mID = '';
        // memberNameV = '';
        // memberSurNameV = '';
        // memberD = '';
        // memberA = '';
        // memberC = '';
        // memberE = '';
        // memberM = '';

    }


    function ispisiDecuAdminu(deca) {
        var listaDece = ``;

        for (let i = 0; i < deca.length; i++) {
            const dete = deca[i];
            listaDece += `<tr>
        
       
        <td>${dete.ImeDeteta}</td>
         <td>${dete.ImeRoditelja}</td>
        <td>${dete.DatRodj}</td>
        <td>${dete.Adresa}</td>
        <td>${dete.Grad}</td>
        <td>${dete.Tel}</td>
        <td>${dete.Email}</td>

          </tr>`;

        } listaNoveDece.innerHTML = listaDece;



    }
    ispisiDecuAdminu(deca);


    // }
}
// function save() {
//     localStorage.deca = JSON.stringify(deca);
// }
