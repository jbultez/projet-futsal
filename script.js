window.onload = function(e){
  if(typeof localStorage!='undefined') {
    for (numeroTeam=1; numeroTeam<=6 ; numeroTeam++) {
      var team = localStorage.getItem("nomTeam" + numeroTeam);
      if (team != null) {
        document.getElementById("nomTeam" + numeroTeam).innerHTML = team;
      }

      for (i=1; i<=5 ; i++) {
        var player = localStorage.getItem("team" + numeroTeam + "J" + i);
        if (player != null) {
          document.getElementById("team" + numeroTeam +"J"+ i).innerHTML = player;
        }
      }
    }
  }
}

function ask(numeroTeam){
  for (i=1; i<=5; i++){
    var player = document.getElementById("inputTeam" + numeroTeam + "J" + i).value;
    document.getElementById("team" + numeroTeam + "J" + i).innerHTML = player;

    localStorage.setItem("team" + numeroTeam + "J" + i, player);
    player = localStorage.getItem("team" + numeroTeam + "J" + i);
  }
  var team = document.getElementById("inputNomTeam"+ numeroTeam).value;
  document.getElementById("nomTeam" + numeroTeam).innerHTML = team;

  localStorage.setItem("nomTeam"+ numeroTeam, team);
}
