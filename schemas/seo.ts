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
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
