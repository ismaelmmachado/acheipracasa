import { client } from '@/sanity/lib/client'; // Certifique-se de ter este arquivo em /lib
import AuthorBox from '@/components/AuthorBox';
import ReviewBox from '@/components/ReviewBox';
import { PortableText } from '@portabletext/react';

// Revalida a página a cada 60 segundos (ISR) - Performance máxima
export const revalidate = 60;

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "mainImage": mainImage.asset->url,
    body,
    affiliateLink,
    productRating,
    ctaText,
    pros,
    cons,
    author->{
      name,
      "image": image.asset->url,
      bio,
      specialty
    }
  }`;
  return await client.fetch(query, { slug });
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  // No Next.js 15+, params é uma Promise, então aguardamos:
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-white p-10">
        <h2 className="text-2xl font-bold mb-4">Post em construção...</h2>
        <p className="text-gray-400">O Lucas está revisando este conteúdo técnico. Volte em breve!</p>
        <Link href="/" className="mt-6 text-lucas-orange underline">Voltar para a Home</Link>
      </div>
    );
  }
 
  
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Título do Artigo */}
      <h1 className="text-4xl md:text-5xl font-bold text-lucas-green mb-8 leading-tight">
        {post.title}
      </h1>

      {/* Bloco de Autoridade (EEAT) */}
      <AuthorBox 
        name={post.author?.name}
        image={post.author?.image}
        bio={post.author?.bio}
        specialty={post.author?.specialty}
      />

      {/* Imagem de Destaque */}
      {post.mainImage && (
        <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
          <img src={post.mainImage} alt={post.title} className="w-full h-auto" />
        </div>
      )}

      {/* Conteúdo do Post */}
      <div className="prose prose-lg max-w-none prose-headings:text-lucas-green prose-a:text-lucas-orange">
        <PortableText value={post.body} />
      </div>

      {/* Caixa de Conversão (Review Box) */}
      {post.affiliateLink && (
        <div className="mt-16">
          <ReviewBox 
            title={post.title}
            rating={post.productRating}
            affiliateLink={post.affiliateLink}
            ctaText={post.ctaText}
            pros={post.pros}
            cons={post.cons}
          />
        </div>
      )}
    </article>
  );
}