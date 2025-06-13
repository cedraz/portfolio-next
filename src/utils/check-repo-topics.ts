export enum Stack {
  BACKEND = 'backend',
  FRONTEND = 'frontend',
  FULLSTACK = 'fullstack',
}

const backendTopics = [
  'backend',
  'express',
  'nestjs',
  'django',
  'fastapi',
  'postgres',
  'mongodb',
];
const frontendTopics = [
  'frontend',
  'react',
  'vue',
  'angular',
  'svelte',
  'nextjs',
  'nuxtjs',
  'tailwindcss',
  'css',
  'html',
  'mui',
  'shadcn',
];

export function getRepoStack(topics: string[]): Stack {
  const formattedTopics = topics.map((topic) => topic.toLowerCase());
  const hasBackend = backendTopics.some((topic) =>
    formattedTopics.includes(topic),
  );
  const hasFrontend = frontendTopics.some((topic) =>
    formattedTopics.includes(topic),
  );

  if (hasBackend && hasFrontend) {
    return Stack.FULLSTACK;
  }
  if (hasBackend) {
    return Stack.BACKEND;
  }
  if (hasFrontend) {
    return Stack.FRONTEND;
  }
  return Stack.FULLSTACK;
}
