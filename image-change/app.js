var changingImage = true;

function change() {
  var image = document.getElementById("changeImage");
  if(changingImage){
    image.src = "https://thumbs.dreamstime.com/b/negative-sign-grunge-stamp-label-180265477.jpg";
  }else{

    image.src="https://i.ytimg.com/vi/tNE-i9g3ty4/hqdefault.jpg";
  }

  changingImage = !changingImage

}


 

