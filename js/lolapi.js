class Leagueapi {
  constructor() {
    this.client_id = "RGAPI-7dccc6e0-3ae5-4d38-acac-11435f4d6c46";
  }

  async getUser(user, server) {
    const profileResponse = await fetch(
      `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=${this.client_id}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }

  async getDivision(summonerId, server) {
    const divisionResponse = await fetch(
      `https://${server}.api.riotgames.com//lol/league/v4/entries/by-summoner/${summonerId}?api_key=${this.client_id}`
    );

    const division = await divisionResponse.json();

    return {
      division
    };
  }
}
