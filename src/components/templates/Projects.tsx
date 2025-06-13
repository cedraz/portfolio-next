'use client';
import * as React from 'react';

// Images
import Mockup from '@/assets/projects/mockup.png';

// Components
import { Button } from '../ui/button';
import ProjectsCardsGroup from '../organisms/ProjectsCardsGroup';
import Title from '../atoms/Title';

// Projects data
import { repoImageMap } from '../../utils/data/projects.data';
import { GithubRepositoryCardData } from '../../types/interfaces';

// next intl
import { useTranslations } from 'next-intl';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { github } from '@/services/github/github.service';
import { getRepoStack, Stack } from '@/utils/check-repo-topics';

export function Projects() {
  const t = useTranslations('Projects');

  const sectionRef = React.useRef(null);

  const [activeProjects, setActiveProjects] = React.useState<
    GithubRepositoryCardData[]
  >([]);
  const [active, setActive] = React.useState(0);
  const [category, setCategory] = React.useState<Stack | 'all'>('all');
  const [showAll, setShowAll] = React.useState(false);
  const [projectsNumber, setProjectsNumber] = React.useState(0);
  const [projectsTotalNumber, setProjectsTotalNumber] = React.useState(0);
  const [projects, setProjects] = React.useState<GithubRepositoryCardData[]>(
    [],
  );

  const handleGetProjects = async () => {
    try {
      const repos = await github();

      const reposWithImages = repos.map((repo) => {
        const imageMap = repoImageMap.find((item) => item.id === repo.id);
        const image = imageMap ? imageMap.image : Mockup;
        const stack = getRepoStack(repo.topics);
        return {
          ...repo,
          image,
          stack,
        } as GithubRepositoryCardData;
      });

      setProjects(reposWithImages);
    } catch (error) {
      console.error('Failed to fetch GitHub projects:', error);
    }
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });

    handleGetProjects();
  }, []);

  React.useEffect(() => {
    if (projects.length === 0) return;

    const filteredProjects =
      category === 'all'
        ? projects
        : projects.filter((project) => project.stack === category);

    const projectsToShow = showAll
      ? filteredProjects
      : filteredProjects.slice(0, 3);

    setActiveProjects(projectsToShow);
    setProjectsNumber(projectsToShow.length);
    setProjectsTotalNumber(filteredProjects.length);
  }, [category, showAll, projects]);

  const categories: ('all' | Stack)[] = ['all', ...Object.values(Stack)];

  const handleClickCategory = (
    index: number,
    selectedCategory: Stack | 'all',
  ) => {
    setActive(index);
    setCategory(selectedCategory);
  };

  const handleChangeShowAll = () => {
    setShowAll(!showAll);

    if (showAll && sectionRef.current) {
      const sectionElement = sectionRef.current as HTMLElement;
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-background-secondary h-full"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center">
        <Title withMargin={true} data-aos="fade-up">
          {t('h1')}
        </Title>
        <div
          className="flex flex-row flex-wrap gap-3 items-center justify-center"
          data-aos="fade-up"
        >
          {categories.map((cat, index) => (
            <Button
              key={index}
              variant={active === index ? 'default' : 'secondary'}
              onClick={() => handleClickCategory(index, cat)}
            >
              {cat === 'all' ? t(cat) : cat}
              {active === index && ` ${projectsNumber}/${projectsTotalNumber}`}
            </Button>
          ))}
        </div>
        <ProjectsCardsGroup projects={activeProjects} />
        {projectsTotalNumber > 3 && (
          <Button
            onClick={handleChangeShowAll}
            variant="default"
            className="mt-8"
          >
            {showAll ? t('buttonShowLess') : t('buttonShowMore')}
          </Button>
        )}
      </div>
    </section>
  );
}
