const leagueapi = new Leagueapi();

const ui = new UI();

const searchUser = document.getElementById("searchUser");
const server = document.getElementById("servers");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;
  const serverValue = server.value;

  if (userText !== "") {
    leagueapi.getUser(userText, serverValue).then(data => {
      if (data.profile.message === "Data not found - summoner not found") {
        console.log("nie ma takiego typa");
      } else {
        console.log(data);
      }
    });
  } else {
    console.log("empty");
  }
});
