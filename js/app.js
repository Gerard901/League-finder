const leagueapi = new Leagueapi();

const ui = new UI();

const searchUser = document.getElementById("searchUser");
const server = document.getElementById("servers");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;
  const serverValue = server[server.selectedIndex].id;

  if (userText !== "") {
    leagueapi.getUser(userText, serverValue).then(data => {
      if (data.profile.status) {
        if (data.profile.status.status_code === 404) {
          ui.showAlert("Summoner not found", "alert alert-danger");
        }
      } else {
        ui.showProfile(data.profile);
        const summonerId = data.profile.id;

        leagueapi.getDivision(summonerId, serverValue).then(divisionData => {
          if (divisionData.division.length !== 0) {
            ui.showDivision(divisionData.division);
            console.log(divisionData.division);
          } else {
            ui.clearDivision();
          }
        });

        leagueapi.getChampions(summonerId, serverValue).then(championsData => {
          if (championsData.champions.length !== 0) {
            ui.showChampions(
              championsData.champions,
              championsData.allChampions
            );
          } else {
            ui.clearChampions();
          }
        });
      }
    });
  } else {
    ui.clearProfile();
    ui.clearDivision();
    ui.clearChampions();
  }
});
