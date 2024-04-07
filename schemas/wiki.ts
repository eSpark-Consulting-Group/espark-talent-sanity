import { Rule } from 'sanity'

export default {
  name: 'wiki',
  title: 'Wiki',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Enter the ID of the wiki (for Sorting)',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the wiki (3 characters minimum)',
      validation: (Rule: Rule) => Rule.required().min(3),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generate or edit the slug of the wiki (3 characters minimum)',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 150,
      },
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'Enter the short description of the wiki',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Import the hero image of the wiki (approx. 400*400)',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'iconImage',
      title: 'Icon Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Import the icon image of the wiki (approx. 40*40)',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'salary',
      title: 'Salary',
      type: 'number',
      description: 'Enter the salary of the wiki (in USDs, e.g. 5000)',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Enter the Content of the wiki',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'wikiCategory',
      title: 'Wiki Category',
      type: 'string',
      description: 'Enter the category of the Wiki (10-80 characters)',
      validation: (Rule: Rule) => Rule.required().max(150),
    },
    // SEO Details
    {
      title: 'SEO Details',
      name: 'seo',
      type: 'object',
      fields: [
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
    },
  ],
}
