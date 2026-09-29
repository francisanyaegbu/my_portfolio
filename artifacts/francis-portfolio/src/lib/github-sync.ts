import { featuredProjects, type FeaturedProject, type GitHubRepository } from '@/data/portfolio';

// Real live preview screenshot captures
import crimeAnalysisScreen from '@/assets/images/project_screen_crime_analysis.jpg';
import deepguardScreen from '@/assets/images/project_screen_deepguard.jpg';
import eldeoGadgetsScreen from '@/assets/images/project_screen_eldeo_gadgets.jpg';
import movlyScreen from '@/assets/images/project_screen_movly.jpg';
import tubeflowImg from '@/assets/images/project_tubeflow_saas.jpg';
import ecommerceImg from '@/assets/images/project_preview_ecommerce.jpg';
import workflowImg from '@/assets/images/project_preview_workflow.jpg';

const imagePool = [
  crimeAnalysisScreen,
  deepguardScreen,
  eldeoGadgetsScreen,
  movlyScreen,
  tubeflowImg,
  ecommerceImg,
  workflowImg,
];

export interface VercelProjectApiItem {
  id: string;
  name: string;
  framework: string | null;
  updatedAt: number;
  link?: {
    type?: string;
    repo?: string;
    org?: string;
  };
  targets?: {
    production?: {
      url?: string;
      alias?: string[];
    };
  };
  latestDeployments?: Array<{
    url?: string;
    alias?: string[];
  }>;
}

function getImageForRepo(name: string, category: string, index: number): string {
  const lower = (name + ' ' + category).toLowerCase();
  if (lower.includes('crime') || lower.includes('analysis')) {
    return crimeAnalysisScreen;
  }
  if (lower.includes('security') || lower.includes('guard') || lower.includes('deep')) {
    return deepguardScreen;
  }
  if (lower.includes('gadget') || lower.includes('el-deo') || lower.includes('eldeo')) {
    return eldeoGadgetsScreen;
  }
  if (lower.includes('movly') || lower.includes('vue') || lower.includes('movie')) {
    return movlyScreen;
  }
  if (lower.includes('tube') || lower.includes('saas') || lower.includes('video') || lower.includes('studio')) {
    return tubeflowImg;
  }
  if (lower.includes('store') || lower.includes('shop') || lower.includes('fashion') || lower.includes('commerce') || lower.includes('marketplace') || lower.includes('oma')) {
    return ecommerceImg;
  }
  return imagePool[index % imagePool.length];
}

function inferCategoryFromText(text: string): FeaturedProject['category'] {
  const lower = text.toLowerCase();
  if (lower.includes('security') || lower.includes('guard') || lower.includes('ai') || lower.includes('crime') || lower.includes('deep')) {
    return 'AI & Security';
  }
  if (lower.includes('store') || lower.includes('shop') || lower.includes('commerce') || lower.includes('gadget') || lower.includes('fashion') || lower.includes('cart') || lower.includes('market')) {
    return 'E-Commerce';
  }
  if (lower.includes('saas') || lower.includes('dashboard') || lower.includes('studio') || lower.includes('analytics') || lower.includes('flow') || lower.includes('task') || lower.includes('move') || lower.includes('staypal')) {
    return 'SaaS & Dashboard';
  }
  if (lower.includes('express') || lower.includes('backend') || lower.includes('fullstack') || lower.includes('supabase') || lower.includes('farm')) {
    return 'Full-Stack';
  }
  return 'Frontend';
}

function inferTechs(name: string, framework: string | null): string[] {
  const techs = new Set<string>();
  if (framework === 'nextjs') {
    techs.add('Next.js');
    techs.add('React');
    techs.add('TypeScript');
    techs.add('Tailwind CSS');
  } else if (framework === 'vite') {
    if (name.toLowerCase().includes('movly') || name.toLowerCase().includes('vue')) {
      techs.add('Vue 3');
      techs.add('Pinia');
      techs.add('Vite');
    } else {
      techs.add('React');
      techs.add('TypeScript');
      techs.add('Vite');
      techs.add('Tailwind CSS');
    }
  } else {
    techs.add('TypeScript');
    techs.add('React');
    techs.add('Tailwind CSS');
  }

  if (name.toLowerCase().includes('crime') || name.toLowerCase().includes('deepguard')) {
    techs.add('Gemini AI');
    techs.add('Supabase');
  }
  if (name.toLowerCase().includes('gadget') || name.toLowerCase().includes('dirace')) {
    techs.add('Supabase');
  }

  return Array.from(techs);
}

function formatTitle(name: string): string {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function resolveVercelDomain(proj: VercelProjectApiItem): string {
  // Check clean custom alias first (e.g. visionher.org, crime-analysis-system-cyan.vercel.app)
  const prodAlias = proj.targets?.production?.alias;
  if (Array.isArray(prodAlias) && prodAlias.length > 0) {
    const cleanDomain = prodAlias.find((a) => !a.includes('-git-') && !a.includes('-francis-projects-')) || prodAlias[0];
    if (cleanDomain) return `https://${cleanDomain}`;
  }

  const prodUrl = proj.targets?.production?.url;
  if (prodUrl) return `https://${prodUrl}`;

  const latestUrl = proj.latestDeployments?.[0]?.url;
  if (latestUrl) return `https://${latestUrl}`;

  return `https://${proj.name}.vercel.app`;
}

export async function fetchLiveGitHubProjects(username = 'francisanyaegbu'): Promise<{
  allProjects: FeaturedProject[];
  liveDeploymentsCount: number;
  lastUpdated: string;
}> {
  try {
    // 1. Fetch direct live projects from Vercel API
    const vercelRes = await fetch('/api/vercel/projects');
    let vercelProjects: VercelProjectApiItem[] = [];
    if (vercelRes.ok) {
      const data = await vercelRes.json();
      if (data.configured && Array.isArray(data.projects)) {
        vercelProjects = data.projects;
      }
    }

    // 2. Fetch all public GitHub repositories for supplementary details
    let githubRepos: GitHubRepository[] = [];
    try {
      const ghRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
        headers: { Accept: 'application/vnd.github+json' },
      });
      if (ghRes.ok) {
        githubRepos = await ghRes.json();
      }
    } catch {
      // ignore
    }

    // Build lookup maps
    const curatedMap = new Map<string, FeaturedProject>();
    featuredProjects.forEach((p) => {
      curatedMap.set(p.slug.toLowerCase(), p);
      curatedMap.set(p.title.toLowerCase(), p);
      const repoNameFromUrl = p.githubUrl.split('/').pop()?.toLowerCase();
      if (repoNameFromUrl) curatedMap.set(repoNameFromUrl, p);
    });

    const ghMap = new Map<string, GitHubRepository>();
    githubRepos.forEach((r) => {
      ghMap.set(r.name.toLowerCase(), r);
    });

    const mergedProjects: FeaturedProject[] = [];
    const processedKeys = new Set<string>();

    // 3. Process direct Vercel API projects first (Live Source of Truth)
    vercelProjects.forEach((vProj, idx) => {
      // Deduplicate project variants like duplicate store branches
      const repoName = vProj.link?.repo || vProj.name;
      const key = repoName.toLowerCase();
      if (processedKeys.has(key)) return;
      processedKeys.add(key);

      const liveUrl = resolveVercelDomain(vProj);
      const ghRepo = ghMap.get(key);
      const githubUrl = ghRepo?.html_url || `https://github.com/${username}/${repoName}`;
      const existingCurated = curatedMap.get(key) || curatedMap.get(vProj.name.toLowerCase());

      const year = new Date(vProj.updatedAt || Date.now()).getFullYear().toString();
      const title = formatTitle(vProj.name);
      const category = inferCategoryFromText(vProj.name + ' ' + (ghRepo?.description || ''));
      const technologies = inferTechs(vProj.name, vProj.framework);

      if (existingCurated) {
        mergedProjects.push({
          ...existingCurated,
          liveUrl,
          githubUrl,
          year: year || existingCurated.year,
        });
      } else {
        const desc = ghRepo?.description || `Live web application built with ${technologies.join(', ')} deployed directly on Vercel.`;
        mergedProjects.push({
          id: `vercel-${vProj.id}`,
          slug: vProj.name.toLowerCase(),
          title: `${title} Application`,
          category,
          tagline: desc,
          description: desc,
          longDescription: `${title} is an application built with ${technologies.join(', ')}. Connected to continuous production deployment on Vercel with automated GitHub integration.`,
          problem: 'Engineered to provide a high-performance web experience with instant loading times and intuitive UI.',
          solution: `Implemented with modern ${technologies.slice(0, 3).join(', ')} architecture, responsive design across mobile and desktop, and zero downtime cloud hosting.`,
          image: getImageForRepo(vProj.name, category, idx),
          liveUrl,
          githubUrl,
          featured: idx < 6,
          year,
          technologies,
          keyFeatures: [
            `Live continuous deployment on Vercel with instant preview environments`,
            `Built with modern ${technologies.join(' · ')} architecture`,
            `Optimized for sub-second first loads and high performance audits`,
            `Full public source code and revision history on GitHub`,
          ],
          metrics: [
            { label: 'Hosting', value: 'Vercel Live' },
            { label: 'Framework', value: vProj.framework ? formatTitle(vProj.framework) : 'Vite / React' },
            { label: 'Updated', value: year },
          ],
          highlights: [
            `Fetched directly from Vercel API deployment records`,
            `Production domain: ${liveUrl.replace(/^https?:\/\//, '')}`,
          ],
        });
      }
    });

    // 4. Append remaining curated projects if any were not in Vercel list
    featuredProjects.forEach((p) => {
      const repoKey = p.githubUrl.split('/').pop()?.toLowerCase();
      if (repoKey && !processedKeys.has(repoKey) && !processedKeys.has(p.slug.toLowerCase())) {
        mergedProjects.push(p);
        processedKeys.add(repoKey);
      }
    });

    return {
      allProjects: mergedProjects,
      liveDeploymentsCount: mergedProjects.length,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.warn('[Vercel & GitHub Sync] Fallback to curated dataset', error);
    return {
      allProjects: featuredProjects,
      liveDeploymentsCount: featuredProjects.length,
      lastUpdated: new Date().toISOString(),
    };
  }
}
