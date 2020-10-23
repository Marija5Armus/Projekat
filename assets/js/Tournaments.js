

var tabelaTurnira=document.getElementById('accordionT');
prikazRez(turniri);
  function prikazRez(turniri){
    Tturniri='';

      Tturniri= `  <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-lg btn-link" data-toggle="collapse" data-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            
            ${turniri[0].godina}
          </button>
        </h5>
      </div>

      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionT">
        <div class="card-body">
        ${turniri[0].tur.prvi} -<span class="plasman">I</span> mesto <br>
        
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            ${turniri[1].godina}
          </button>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionT">
        <div class="card-body">
        ${turniri[1].tur.prvi} - <span class="plasman">I</span> mesto <br>
        ${turniri[1].tur.drugi}   - <span class="plasman">I</span> mesto <br>
        ${turniri[1].tur.treci}   - <span class="plasman">III</span> mesto <br>
        ${turniri[1].tur.cetvrti}   - <span class="plasman">I</span> mesto <br>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThhree">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
            aria-expanded="false" aria-controls="collapseThree">
            ${turniri[2].godina}
          </button>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThhree" data-parent="#accordionT">
        <div class="card-body">
        ${turniri[2].tur.prvi}  - <span class="plasman">I</span> mesto <br>
        ${turniri[2].tur.drugi}   - <span class="plasman">I</span> mesto <br>
         ${turniri[2].tur.treci}  - <span class="plasman">I</span> mesto <br>
         ${turniri[2].tur.cetvrti}   - <span class="plasman">I</span> mesto <br>
         ${turniri[2].tur.peti}   - <span class="plasman">I</span> mesto <br>
         ${turniri[2].tur.sesti}   - <span class="plasman">I</span> mesto <br>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingFour">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"
            aria-expanded="false" aria-controls="collapseFour">
            ${turniri[3].godina}
          </button>
        </h5>
      </div>
      <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionT">
        <div class="card-body">
        ${turniri[3].tur.prvi}  - <span class="plasman">I</span> mesto <br>
        ${turniri[3].tur.drugi}    - <span class="plasman">I</span> mesto <br>
        ${turniri[3].tur.treci}   - <span class="plasman">I</span> mesto <br>
        ${turniri[3].tur.cetvrti}  - <span class="plasman">I</span> mesto <br>

        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingFive">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"
            aria-expanded="false" aria-controls="collapseFive">
            ${turniri[4].godina}
          </button>
        </h5>
      </div>
      <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionT">
        <div class="card-body">
        ${turniri[4].tur.prvi} -<span class="plasman">I</span> mesto <br>
        ${turniri[4].tur.drugi} -<span class="plasman">III</span> mesto <br>
        ${turniri[4].tur.treci}  - <span class="plasman">I</span> mesto <br>
        </div>
      </div>
    </div>`;
      
tabelaTurnira.innerHTML=Tturniri;
    
  }



//plasman na turniru
var plasmani = document.getElementsByClassName('plasman');
 var prvi = 1; var drugi = 1; var treci = 1;
for (let i = 0; i < plasmani.length; i++) {
  var element = plasmani[i].innerHTML;
 
  switch (element) {
    case 'I': prvi++;

     continue;
    case 'II': drugi++;
     continue;
    case "III": treci++;
continue;
    default:
      break;
  }
}
  var vrpr = Math.floor(Math.round((prvi / plasmani.length) * 100));
  var vrdr = Math.floor(Math.round((drugi / plasmani.length) * 350));
  var vrtr = Math.floor(Math.round((treci / plasmani.length) * 350));

  rezTurnira();

function rezTurnira() {

  var vr = document.querySelectorAll('[role="progressbar"]');

    vr[0].setAttribute('style',`width:${vrpr}%;`);
  vr[1].setAttribute('style',`width:${vrdr}%;`);
  vr[2].setAttribute('style',`width:${vrtr}%;`);



}