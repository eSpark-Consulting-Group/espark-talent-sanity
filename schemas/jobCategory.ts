import { Rule } from 'sanity'

export default {
  name: 'jobCategory',
  type: 'document',
  title: 'Job Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required().min(10).max(80),
    },
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
  ],
}
