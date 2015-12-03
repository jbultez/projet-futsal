function ask(numeroTeam){
  for (i=1; i<=5; i++){
  var player = document.getElementById("inputTeam" + numeroTeam + "J" + i).value;
  document.getElementById("team" + numeroTeam + "J" + i).innerHTML = player;
}
  var team = document.getElementById("inputNomTeam"+ numeroTeam).value;
  document.getElementById("nomTeam" + numeroTeam).innerHTML = team;
}
