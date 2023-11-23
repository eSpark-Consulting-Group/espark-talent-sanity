import {Rule} from 'sanity'

export default {
  name: 'pageSEO',
  type: 'document',
  title: 'Page SEO',
  fields: [
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogTitle',
      type: 'string',
      title: 'ogTitle',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogDescription',
      type: 'string',
      title: 'ogDescription',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'twitterDescription',
      type: 'string',
      title: 'Twitter Description',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'twitterTitle',
      type: 'string',
      title: 'Twitter Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'canonical',
      type: 'url',
      title: 'Canonical',
      initialValue: 'https://esparktalent.com/',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogLocale',
      type: 'string',
      title: 'ogLocale',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogType',
      type: 'string',
      title: 'ogType',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogUrl',
      type: 'url',
      title: 'ogUrl',
      initialValue: 'https://esparktalent.com/',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogSiteName',
      type: 'string',
      title: 'ogSiteName',
      initialValue: 'eSpark Talent',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'articleModifiedTime',
      type: 'datetime',
      title: 'Article Modified Time',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'articlePublishTime',
      type: 'datetime',
      title: 'Article Publish Time',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogImage',
      type: 'url',
      title: 'ogImage',
      initialValue: 'https://esparktalent.com/images/logo.png',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'twitterCard',
      type: 'string',
      title: 'Twitter Card',
    },
    {
      name: 'twitterSite',
      type: 'string',
      title: 'Twitter Site',
    },
  ],
}
