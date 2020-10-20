window.addEventListener('beforeunload', save);



    AOS.init();



    var clanskiBroj = 1;
    var listaNovihClanova = document.querySelector('#listaClanova');


    ispisiSveGreskeMem();

    function ispisiSveGreskeMem() {
        let ispisGresakaMem = document.getElementsByClassName("ispisGreskeMem");
        for (let i = 0; i < ispisGresakaMem.length; i++) {
            ispisGresakaMem[i].classList.add("hide");
        };


    }
    document.getElementById('member_regBtn').addEventListener('click', proveriUnos_memReg);

  

    function proveriUnos_memReg(e) {
        if (e instanceof Event) {

            e.preventDefault();

            var nizGresakaMem = [];
            var nizPodatakaMem = [];
            var memberName = document.getElementById('member_name');
            var memberNameV = memberName.value.trim();
            var memberSurName = document.getElementById('member_surname');
            var memberSurNameV = memberSurName.value.trim();
            var memberDate = document.getElementById('member_date');
            var memberD = memberDate.value.trim();
            var memberID = document.getElementById('member_ID');
            var mID = memberID.value.trim();
            var memberAdress = document.getElementById('member_address');
            var memberA = memberAdress.value.trim();
            var memberCity = document.getElementById('member_city');
            var memberC = memberCity.value.trim();
            var memberMobile = document.getElementById('member_mobile');
            var memberM = memberMobile.value.trim();
            var memberEmail = document.getElementById('member_email');
            var memberE = memberEmail.value.trim();

            var paternName = new RegExp(/^[a-zA-Z ]+$/);
            var paternSName = new RegExp(/^[a-zA-Z ]+$/);
            var paternDatum = new RegExp(/^(19[\d]{2}|20[01][\d])\-(0[1-9]|1[012])\-(0[1-9]|[12][\d]|3[01])$/);
            var paternID = new RegExp(/^[\d]{13}$/);
            var paternAddress = new RegExp(/^[A-Z]{1}[a-z]{2,20}(\s[a-z]{1,20})+/);
            var paternCity = new RegExp(/^[A-Z]{1}[a-z]{2,20}/);
            var paternMob = new RegExp(/^06[0123456789]\/[\d]{3}\-[\d]{3,4}$/);
            var paternEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

            if (paternName.test(memberNameV)) {
                nizPodatakaMem.push("Ime a: " + memberNameV);
                memberName.classList.remove("red");
                memberName.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Ime  nije u dobrom formatu!");
                memberName.classList.add("red");
                memberName.nextElementSibling.classList.remove("hide");
            }
            if (paternSName.test(memberSurNameV)) {
                nizPodatakaMem.push("Vaše Prezime: " + memberSurNameV);
                memberSurName.classList.remove("red");
                memberSurName.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Vaše Prezime nije u dobrom formatu!");
                memberSurName.classList.add("red");
                memberSurName.nextElementSibling.classList.remove("hide");
            }

            let paternTest = paternDatum.test(memberD);
            if (paternTest) {
                nizPodatakaMem.push("Vaš datum rođenja : " + memberD);
                memberDate.classList.remove("red");
                memberDate.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Vaš datum rođenja nije u dobrom formatu!");
                memberDate.classList.add("red");
                memberDate.nextElementSibling.classList.remove("hide");
            }

            if (paternID.test(mID)) {
                nizPodatakaMem.push("Vaš JMBG: " + mID);
                memberID.classList.remove("red");
                memberID.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Vaš JMBG nije u dobrom formatu!");
                memberID.classList.add("red");
                memberID.nextElementSibling.classList.remove("hide");
            }


            if (paternAddress.test(memberA)) {
                nizPodatakaMem.push("Vaša adresa: " + memberA);
                memberAdress.classList.remove("red");
                memberAdress.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Vaša adresa nije u dobrom formatu!");
                memberAdress.classList.add("red");
                memberAdress.nextElementSibling.classList.remove("hide");
            }
            if (paternCity.test(memberC)) {
                nizPodatakaMem.push("Vaš Grad: " + memberC);
                memberCity.classList.remove("red");
                memberCity.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Vaš Grad nije u dobrom formatu!");
                memberCity.classList.add("red");
                memberCity.nextElementSibling.classList.remove("hide");
            }
            if (paternMob.test(memberM)) {
                nizPodatakaMem.push("Vaš kontakt telefon: " + memberM);
                memberMobile.classList.remove("red");
                memberMobile.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Vaš kontakt telefon nije u dobrom formatu!");
                memberMobile.classList.add("red");
                memberMobile.nextElementSibling.classList.remove("hide");
            }
            if (paternEmail.test(memberE)) {
                nizPodatakaMem.push("Vaša E-mail adresa: " + memberE);
                memberEmail.classList.remove("red");
                memberEmail.nextElementSibling.classList.add("hide");
            } else {
                nizGresakaMem.push("Vaša E-mail adresa nije u dobrom formatu!");
                memberEmail.classList.add("red");
                memberEmail.nextElementSibling.classList.remove("hide");
            }






            if (nizGresakaMem.length > 0) {
                var listaMem = "<ol>";
                for (let i = 0; i < nizGresakaMem.length; i++) {
                    listaMem += `<li>${nizGresakaMem[i]}</li>`;
                }
                listaMem += "<ol>";
                document.getElementById("ispisGreskeMem").innerHTML = listaMem;
            }

            if (nizPodatakaMem.length > 0) {

                let listaMem = "<ol>";


                for (let i = 0; i < nizPodatakaMem.length; i++) {
                    listaMem += `<li>${nizPodatakaMem[i]}</li>`;
                }
                listaMem += "<ol>";
                document.getElementById("ispisPodaciMem").innerHTML = listaMem;


            }
            if (nizGresakaMem.length == 0) {
                clanskiBroj + 2;
                SacuvajnovogClana();


            }
            document.querySelector('#member_clanskiBroj').innerHTML = clanskiBroj;




            function SacuvajnovogClana() {

                const Clan = {
                    clanID: clanskiBroj,
                    Ime: memberNameV,
                    Prezime: memberSurNameV,
                    Jmbg: mID,
                    DatRodj: memberD,
                    Adresa: memberA,
                    Grad: memberC,
                    Tel: memberM,
                    Email: memberE
                }
                clanovi.push(Clan);
        
                // mID = '';
                // memberNameV = '';
                // memberSurNameV = '';
                // memberD = '';
                // memberA = '';
                // memberC = '';
                // memberE = '';
                // memberM = '';
        
            }


          

             // function popuniJMBG() {

  //   let dR = document.querySelector("#member_date");
  //   let dRodj = dR.value;
  //   let patern = /^(19[\d]{2}|20[01][\d])\-(0[1-9]|1[012])\-(0[1-9]|[12][\d]|3[01])$/;

  //   if (patern.test(dRodj)) {
  //     let nizDatum = dRodj.split("-");
  //     let jmbg = nizDatum[2] + nizDatum[1] + nizDatum[0].substr(1, 3);
  //     var id = document.querySelector('#member_ID');
  //     id.value = jmbg;

  //   }
  //   else {
  //     id.value = "Proverite unos datuma rođenja";
  //   }

  // }
  //  document.querySelector('#member_date').addEventListener('blur', popuniJMBG);
  






            function ispisiCLanaAdminu(clanovi) {
                var listaClanova = ``;

                for (let i = 0; i < clanovi.length; i++) {
                    const clan = clanovi[i];
                    listaClanova += `<tr>
                <td>${clan.clanID}</td>
                <td>${clan.Ime}</td>
                <td>${clan.Prezime}</td>
                 <td>${clan.Jmbg}</td>
                <td>${clan.DatRodj}</td>
                <td>${clan.Adresa}</td>
                <td>${clan.Grad}</td>
                <td>${clan.Tel}</td>
                <td>${clan.Email}</td>
   
                  </tr>`;

                } listaNovihClanova.innerHTML = listaClanova;



            }
            ispisiCLanaAdminu(clanovi);


        }


     
}


function save() {
    localStorage.clanovi = JSON.stringify(clanovi);
}
