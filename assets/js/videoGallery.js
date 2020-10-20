
window.addEventListener('beforeunload', save);
AOS.init();
  var videosGallery = document.querySelector('#videosCont');

  var videoUrl = document.querySelector('#video_url');
  var videoDesc = document.querySelector('#video_desc');


  // <iframe width="560" height="315" src="https://www.youtube.com/embed/iPlOCQIZom0"
  //  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
  //   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
  // prikazi('#videosCont');

  function ispisiVideoGaleriju(e, videos) {
    // if (e instanceof Event) {
      e.preventDefault();

      // <iframe width="260" class="mx-3 my-3" height="auto" src="${video.url}"
      //   frameborder="1"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //   allowfullscreen></iframe>
      var galerijaV = "";
      for (let i = 0; i < videos.length; i++) {
        var video = videos[i];
        galerijaV += `<div class='okvirVideo'><p>${video.naslov}</p> <p>${video.url}</p>
     <button data-id="${i}" class="obrisiVideoBtn form-control btn btn-sm btn-outline-success">Obriši video</button></div>`;

      } videosGallery.innerHTML = galerijaV;

      var ObrisiVideoSvi = document.querySelectorAll('.obrisiVideoBtn');

      for (var i = 0; i < ObrisiVideoSvi.length; i++) {

        ObrisiVideoSvi[i].addEventListener('click', ObrisiVideo);


      }

    // } 

    
    ispisiVideoGaleriju(e, videos);

    function ObrisiVideo() {
      let id = this.getAttribute('data-id');
      videos.splice(id, 1);
      ispisiVideoGaleriju(e, videos);
      // prikazi('#videosCont');
    }
  }



  var sacuvajVideoBtn = document.querySelector('#potvrdi_video_url');
  sacuvajVideoBtn.addEventListener('click', ubaciVideo);


  //"https://www.youtube.com/embed/" + this.id  + ""
  // "https://www.youtube.com/embed/7oKSN116Vz4?start=328" 
  // https://www.youtube.com/watch?v=7oKSN116Vz4
  // var izmenjen = videoUrl.value;
  //  var  reg = /;
  // var noviIzmenjen= izmenjen.replace("/watch?v=", 'embed/');
  // console.log(izmenjen);

  var rb = 1;

  function ubaciVideo(e) {
    if (e instanceof Event) {


      e.preventDefault();
      rb++;
      const newV = {
        rb: rb,
        naslov: videoDesc.value,
        url: videoUrl.value

      };
      videos.push(newV);
      videoDesc.value = '';
      videoUrl.value = '';

      ispisiVideoGaleriju(e, videos);
      // prikazi('#videosCont');
    }
  };
