// Query para buscar o post detalhado com campos de afiliado e autor
export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    body,
    // Dados de Afiliado que criamos
    affiliateLink,
    productRating,
    ctaText,
    pros,
    cons,
    // Dados do Autor para o AuthorBox
    author->{
      name,
      "image": image.asset->url,
      bio,
      specialty // Garanta que adicionou este campo no authorType.ts
    },
    "categories": categories[]->title
  }`;
  