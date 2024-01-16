import { Rule } from 'sanity'

export default {
  name: 'wiki',
  title: 'Wiki',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the  title of the wiki (3 characters minimum)',
      validation: (Rule: Rule) => Rule.required().min(3),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generate or edit the  slug of the wiki (3 characters minimum)',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 150,
      },
    }, {
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
      description: 'import the hero image of the wiki (approx. 400*400 )',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'iconImage',
      title: 'Icon Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'import the hero image of the wiki (approx. 40*40 )',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'salary',
      title: 'Salary',
      type: 'number',
      description: 'Enter the salary of the wiki (in USDs. e.g. 5000 )',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'wikiCategory',
      type: 'reference',
      title: 'Wiki Category',
      to: [{ type: 'wikiCategory' }],
      description: 'Selct or Create the category of the wiki',
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

  ],
}
