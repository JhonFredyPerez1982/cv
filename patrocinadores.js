document.getElementById('patrocinadores').style.display = "none";
document.getElementById("ProjectsRow").style.display="none";
document.getElementById("redSocial").style.display="none";
document.getElementById("json").style.display="none";

function patrocinio(){
    document.getElementById('patrocinadores').style.display = "block";
    document.getElementById("ProjectsRow").style.display="none";
    document.getElementById("redSocial").style.display="none";
    document.getElementById("json").style.display="none";
    
}
function proyectos(){

  document.getElementById('patrocinadores').style.display = "none";
  document.getElementById("ProjectsRow").style.display="block";
  document.getElementById("redSocial").style.display="none";
  document.getElementById("json").style.display="none";
    
}

  function redesSociales(){
    twitter.mostrar();
    facebook.mostrar();
    linkend.mostrar();
     youtube.mostrar();
     document.getElementById("redSocial").style.display="block";

    }
    