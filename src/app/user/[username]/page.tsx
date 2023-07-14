import api from "@/services/api";
import type { User } from "@/types/User";

interface RouteParams {
  params: {
    username: string;
  }
}

async function getUser(username: string) {
  const res = await fetch(`https://api.github.com/${username}`);
  return res.json();
}

async function getRepositories(username: string) {
  const res = await fetch(`https://api.github.com/${username}/repos`);
  return res.json();
}

export default async function Page({ params }: RouteParams) {
  const userData = getUser(params?.username);
  const repositoriesData = getRepositories(params?.username);
 
  const [user, repositories] = await Promise.all([userData, repositoriesData]);

  return (
    <h1>Teste</h1>
  );
}