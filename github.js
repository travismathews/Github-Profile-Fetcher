

class Github {
    constructor() {
        this.client_id = 'd1bf07a1c486bf32bfd6';
        this.client_secret = 'eb169e0241c385fe76d741ae5d3fefe82f5f24f6';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // Get user

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}