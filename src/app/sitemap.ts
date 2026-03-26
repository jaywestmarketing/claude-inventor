import { MetadataRoute } from 'next';
import { tools } from '@/data/tools';

function citySlug(city: string, state: string): string {
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase()}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://automatestack.com';

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(tool.dateAdded),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const cityPages = tools.flatMap((tool) =>
    tool.targetCities.map((city) => ({
      url: `${baseUrl}/tools/${tool.slug}/${citySlug(city.city, city.state)}`,
      lastModified: new Date(tool.dateAdded),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...toolPages,
    ...cityPages,
  ];
}
