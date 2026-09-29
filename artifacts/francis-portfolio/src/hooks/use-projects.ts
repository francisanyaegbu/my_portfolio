import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchLiveGitHubProjects } from '@/lib/github-sync';
import { featuredProjects, type FeaturedProject } from '@/data/portfolio';

export function useProjects() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['github-projects', 'francisanyaegbu'],
    queryFn: () => fetchLiveGitHubProjects('francisanyaegbu'),
    initialData: {
      allProjects: featuredProjects,
      liveDeploymentsCount: featuredProjects.length,
      lastUpdated: new Date().toISOString(),
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });

  const refreshProjects = async () => {
    await queryClient.invalidateQueries({ queryKey: ['github-projects', 'francisanyaegbu'] });
  };

  return {
    projects: query.data?.allProjects || featuredProjects,
    liveDeploymentsCount: query.data?.liveDeploymentsCount || featuredProjects.length,
    isLoading: query.isLoading,
    isRefetching: query.isRefetching,
    lastUpdated: query.data?.lastUpdated,
    refreshProjects,
  };
}
