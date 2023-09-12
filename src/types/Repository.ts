export interface Repository {
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  }
}