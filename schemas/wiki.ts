import {Rule} from 'sanity'

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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Enter the heading of the wiki (3 characters minimum)',
      // validation: (Rule: Rule) => Rule.required().min(3),
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
      name: 'heroImagePath',
      title: 'Hero Image Path',
      type: 'url',
      description: 'Enter the hero image URL of the wiki (optional)',
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ['http', 'https'], // only checks if value exists
        }),
    },
    {
      name: 'heroImageAlt',
      title: 'Hero Image Alt Text',
      type: 'string',
      description: 'Enter the hero image alt tag of the wiki (3 characters minimum)',
      // validation: (Rule: Rule) => Rule.required().min(3),
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
      name: 'avgSalary',
      title: 'Average Salary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Role Name',
              type: 'string',
              description: 'Enter a role name (e.g., Junior, Mid, Senior, or custom)',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'salary',
              title: 'Salary Range',
              type: 'object',
              fields: [
                {
                  name: 'from',
                  title: 'From',
                  type: 'number',
                  validation: (Rule: Rule) => Rule.required().min(0),
                },
                {
                  name: 'to',
                  title: 'To',
                  type: 'number',
                  validation: (Rule: Rule) =>
                    Rule.required().min(0).greaterThan(Rule.valueOfField('from')),
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'name',
              from: 'salary.from',
              to: 'salary.to',
            },
            prepare({title, from, to}: {title: string; from: number; to: number}) {
              return {
                title: `${title} Role`,
                subtitle: `Salary: $${from.toLocaleString()} - $${to.toLocaleString()}`,
              }
            },
          },
        },
      ],
      initialValue: [
        {name: 'junior', salary: {from: 0, to: 0}},
        {name: 'mid', salary: {from: 0, to: 0}},
        {name: 'senior', salary: {from: 0, to: 0}},
      ],
      validation: (Rule: Rule) =>
        Rule.required().custom((items: {name: string; salary: {from: number; to: number}}[]) => {
          if (!items || items.length === 0) return 'At least one salary entry is required.'
          for (const item of items) {
            if (item.salary?.from === undefined || item.salary?.to === undefined)
              return 'Each role must have a salary range.'
            if (item.salary.from >= item.salary.to)
              return 'Salary "to" must be greater than "from".'
          }
          return true
        }),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
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
            Rule.custom((json: string) => {
              try {
                JSON.parse(json)
                return true
              } catch (err) {
                return 'Invalid JSON format'
              }
            }),
        },
      ],
    },
  ],
}
