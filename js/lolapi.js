class Leagueapi {
  constructor() {
    this.client_id = LOL_CLIENT_ID;
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

  async getChampions(summonerId, server) {
    const championsResponse = await fetch(
      `https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${this.client_id}`
    );
    const allChampionsResponse = await fetch("champion.json");

    const champions = await championsResponse.json();
    const allChampions = await allChampionsResponse.json();

    return {
      champions,
      allChampions
    };
  }
}
