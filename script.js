function ask (teams) {
  for (i=1; i<=5 ; i++){
    var player = document.getElementById("team"+teams + "Player"+ i +"Name").value;
    document.getElementById("team"+teams + "Player"+i).innerHTML = player;

  }
   var team = document.getElementById("inputNomTeam"+teams).value;
   document.getElementById("team"+teams).innerHTML = team;

  }
