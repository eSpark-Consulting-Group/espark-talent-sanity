import { Rule } from 'sanity'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
