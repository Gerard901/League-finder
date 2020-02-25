class Leagueapi {
  constructor() {
    this.client_id = "RGAPI-8421b1ed-0368-4a2d-ad48-b7e7abd05a47";
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
}
