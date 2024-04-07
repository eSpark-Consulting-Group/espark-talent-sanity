import { Rule } from 'sanity'

export default {
  name: 'seo',
  type: 'document',
  title: 'seo',
  fields: [
    {
      name: 'path',
      type: 'string',
      title: 'Path',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      description: 'Enter the SEO title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description',
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
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Select an image for SEO',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
