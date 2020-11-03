class Github {
  constructor() {
    this.client_id = '0fd1f625c8e266c7dbfe';
    this.client_secret = 'c4e53711a369a73f8be3d0d4134564d4794a7cc0';
    // to set the number of repos that will show up
    this.repos_count = 4;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}? client_id=${this.client_id}&client_secret =      ${this.client_secret}`);

    // repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos? per_page=${this.repos_count}&sort=
    ${this.repos_sort}&client_id=${this.client_id}&client_secret =
    ${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
