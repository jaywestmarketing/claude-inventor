import { MetadataRoute } from 'next';
import { tools } from '@/data/tools';
import { posts } from '@/data/blog/index';
import { docs } from '@/data/docs/index';

export const dynamic = 'force-static';

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

  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  };

  const blogPostPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const docsIndex = {
    url: `${baseUrl}/docs`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  };

  const docPages = docs.map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
    lastModified: new Date(doc.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const aboutPage = {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  };

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    blogIndex,
    docsIndex,
    aboutPage,
    ...blogPostPages,
    ...docPages,
    ...toolPages,
    ...cityPages,
  ];
}
