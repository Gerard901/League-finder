class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.division = document.getElementById("division");
    this.champions = document.getElementById("champions");
  }

  showProfile(user) {
    console.log(this.profile);
    this.profile.innerHTML = `
     <div class="card mb-3">
     <h3 class="card-header text-center">${user.name}</h3>
     <div class="card-body">
       <h6 class="card-subtitle text-center text-muted">Summoner level: ${user.summonerLevel}</h6>
     </div>
     <img style="width: 100%; display: block;" src="../profileicon/${user.profileIconId}.png">
     </div>
     `;
  }

  showDivision(division) {
    const wins = division[0].wins;
    const losses = division[0].losses;
    const matches = wins + losses;
    const winrate = ((wins / matches) * 100).toFixed(2);

    this.division.innerHTML = `
     <div class="card mb-3">
     <h3 class="card-header text-center">${division[0].tier} ${division[0].rank} <span class="badge badge-pill badge-success">${division[0].leaguePoints}lp</span></h3>
     <div class="card-body">
      <h5 class="card-title text-center">Wins: ${division[0].wins} Losses: ${division[0].losses} </h5>
       <h6 class="card-subtitle text-center text-muted">WINRATIO: ${winrate}%</h6>
     </div>
     <img style="width: 40%; display: block; margin: auto;" src="../divisions/emblem_${division[0].tier}.png">
     </div>
     `;
  }

  showChampions(champions, allChampions) {
    const allChampionsArray = Object.values(allChampions.data);

    let id1 = champions[0].championId;
    let id2 = champions[1].championId;
    let id3 = champions[2].championId;
    let name1, name2, name3;

    allChampionsArray.forEach(champion => {
      if (id1 == champion.key) {
        name1 = champion.id;
      }
      if (id2 == champion.key) {
        name2 = champion.id;
      }
      if (id3 == champion.key) {
        name3 = champion.id;
      }
    });

    this.champions.innerHTML = `
      <div class="card mb-3">
        <h3 class="card-header text-center">BEST CHAMPIONS</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex"><img style="width: 30%; display: block;" src="../champion/${name1}.png"><h4 class="ml-3 card-title">Mastery points:<br><span class="mt-2 badge badge-pill badge-warning">${champions[0].championPoints}</span>
          </h4></li>
          <li class="list-group-item d-flex"><img style="width: 30%; display: block;" src="../champion/${name2}.png"><h4 class="ml-3 card-title">Mastery points:<br><span class="mt-2 badge badge-pill badge-warning">${champions[1].championPoints}</span>
          </h4></li>
          <li class="list-group-item d-flex"><img style="width: 30%; display: block;" src="../champion/${name3}.png"><h4 class="ml-3 card-title">Mastery points:<br><span class="mt-2 badge badge-pill badge-warning">${champions[2].championPoints}</span>
          </h4></li>
        </ul>
    </div>`;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2500);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
  clearDivision() {
    this.division.innerHTML = "";
  }
  clearChampions() {
    this.champions.innerHTML = "";
  }
}
