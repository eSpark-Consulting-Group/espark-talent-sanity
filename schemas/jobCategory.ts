import {Rule} from 'sanity'

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
  ],
}
