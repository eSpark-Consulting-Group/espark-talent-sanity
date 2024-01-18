import { Rule } from 'sanity'

export default {
  name: 'wikiCategory',
  type: 'document',
  title: 'Wiki Category',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Enter the  id of the wiki (for Sorting)',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the category title of the job (10-80 characters)',
      validation: (Rule: Rule) => Rule.required().max(150),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generate the category slug of the job (10-80 characters)',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 150,
      },
    },
  ],
}
