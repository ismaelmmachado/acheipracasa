import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Post',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (SEO)',
        })
      ]
    }),
    // --- CAMPOS DE ESTRATÉGIA DE AFILIADOS (LUCAS) ---
    defineField({
      name: 'affiliateLink',
      title: 'Link de Afiliado',
      type: 'url',
      description: 'Insira o seu link de vendas (ClickBank, Digistore, etc)',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'productRating',
      title: 'Avaliação do Produto (0-5)',
      type: 'number',
      description: 'Nota exibida no review',
      validation: (Rule) => Rule.min(0).max(5).precision(1),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto do Botão (CTA)',
      type: 'string',
      initialValue: 'Check Price on Official Website',
      description: 'Ex: Buy Now, Get Discount, etc.',
    }),
    defineField({
      name: 'pros',
      title: 'Prós (Vantagens)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Essencial para autoridade EEAT',
    }),
    defineField({
      name: 'cons',
      title: 'Contras (Desvantagens)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Dá credibilidade ao seu review',
    }),
    // ------------------------------------------------
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo do Artigo',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})