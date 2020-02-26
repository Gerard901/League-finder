class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.division = document.getElementById("division");
  }

  showProfile(user) {
    console.log(this.profile);
    console.log(user.profileIconId);
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
    console.log(division);

    this.division.innerHTML = `
     <h1>${division[0].tier}</h1>
    `;
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
    this.division.innerHTML = "";
  }
}
