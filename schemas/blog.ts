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
          name: 'metaKeywords',
          type: 'string',
          title: 'Meta Keywords',
          description: 'Enter the SEO description',
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
        {
          name: 'index',
          title: 'Index',
          type: 'boolean',
          description: 'Set whether to index this page for search engines',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'follow',
          title: 'Follow',
          type: 'boolean',
          description: 'Set whether search engines should follow links on this page',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'jsonLd',
          initialValue: '{}',
          title: 'JSON-LD Structured Data',
          type: 'text',
          description: 'Paste your JSON-LD schema here. It should be valid JSON.',
          validation: (Rule: Rule) =>
            Rule
              .custom((json: string) => {
                try {
                  JSON.parse(json);
                  return true;
                } catch (err) {
                  return 'Invalid JSON format';
                }
              }),
        }
      ],
    },
  ],
}
