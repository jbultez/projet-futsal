window.onload = function(e){
  if(typeof localStorage!='undefined') {
    for (numeroTeam=1; numeroTeam<=6 ; numeroTeam++) {
      var team = localStorage.getItem("nameTeam" + numeroTeam);
      if (team != null) {
        document.getElementsByName("nameTeam" + numeroTeam).innerHTML = team;
      }

      for (i=1; i<=5 ; i++) {
        var player = localStorage.getItem("nameTeam" + numeroTeam + "Player" + i);
        if (player != null) {
          document.getElementsByName("nameTeam" + numeroTeam +"Player"+ i).innerHTML = player;
        }
      }
    }
  }
}

function ask(numeroTeam){
  for (i=1; i<=5; i++){
    var player = document.getElementById("inputNameTeam" + numeroTeam + "Player" + i).value;
    document.getElementById("nameTeam" + numeroTeam + "Player" + i).innerHTML = player;

    localStorage.setItem("nameTeam" + numeroTeam + "Player" + i, player);
    player = localStorage.getItem("nameTeam" + numeroTeam + "Player" + i);
  }
  var team = document.getElementById("inputNameTeam"+ numeroTeam);
  elems = document.getElementsByName("nameTeam" + numeroTeam);
  for (i = 0; i < elems.length; i++) {
    elems[i].innerHTML = team.value;


  localStorage.setItem("nameTeam"+ numeroTeam, team);
}
}
