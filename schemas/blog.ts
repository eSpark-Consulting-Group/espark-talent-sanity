import { Rule } from 'sanity'

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'imageAlt',
      title: 'Hero Image Alt',
      type: 'string',
      description: 'Enter the title of the wiki (3 characters minimum)',
      validation: (Rule: Rule) => Rule.required().min(3),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    // SEO Details
    {
      title: 'SEO Details',
      name: 'seo',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'SEO Title',
          description: 'Enter the SEO title',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'string',
          title: 'SEO Description',
          description: 'Enter the SEO description',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'url',
          type: 'string',
          title: 'SEO URL',
          description: 'Enter the SEO URL',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'image',
          title: 'SEO Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Select an image for SEO',
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
  ],
}
