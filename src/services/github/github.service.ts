'use server';

import {
  GithubRepositoryData,
  IGithubRepositoriesResponse,
} from './github.types';

export async function github(): Promise<GithubRepositoryData[]> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error('GitHub token is not set in environment variables.');
    throw new Error('GitHub token is required to fetch repositories.');
  }

  const response = await fetch(
    'https://api.github.com/users/cedraz/repos?sort=created&direction=desc',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = (await response.json()) as IGithubRepositoriesResponse[];

  const repos = data
    .filter(
      (repo) =>
        repo.fork === false &&
        repo.name !== 'portfolio-next' &&
        repo.description !== null,
    )
    .map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        topics: repo.topics,
        homepage: repo.homepage,
        description: repo.description,
        repo_url: repo.html_url,
        external_url: repo.homepage,
      };
    });

  return repos;
}
