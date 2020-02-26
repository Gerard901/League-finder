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
        console.log(data);
        const summonerId = data.profile.id;

        leagueapi.getDivision(summonerId, serverValue).then(divisionData => {
          console.log(divisionData);

          ui.showDivision(divisionData.division);
        });
      }
    });
  } else {
    ui.clearProfile();
  }
});
