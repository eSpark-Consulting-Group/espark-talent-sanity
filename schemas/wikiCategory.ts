import { Rule } from 'sanity'

export default {
  name: 'wikiCategory',
  type: 'document',
  title: 'Wiki Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the category title of the job (10-80 characters)',
      validation: (Rule: Rule) => Rule.required().min(10).max(80),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generate the category slug of the job (10-80 characters)',
      validation: (Rule: Rule) => Rule.required().min(10).max(80),
      options: {
        source: 'title',
        maxLength: 150,
      },
    },
  ],
}
