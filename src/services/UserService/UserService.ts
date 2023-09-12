export const UserService = {
    getUsers: async (slug: string) => {
        const res = await fetch(`https://api.github.com/search/users?q=${slug}`);
        return res.json();
    },
    getRepositories: async (username: string) => {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        return res.json();
    }
}