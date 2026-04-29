import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export async function getProducts() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'Publicado', // Verifique se na sua tabela o nome é exatamente este
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Name.title[0]?.plain_text || 'Sem título',
    slug: page.properties.Slug?.rich_text[0]?.plain_text || '',
    link: page.properties.AffiliateLink?.url || '#',
    price: page.properties.Price?.number || 0,
    rating: page.properties.Rating?.number || 0,
  }));
}