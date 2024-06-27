import { Rule } from 'sanity'

export default {
    name: 'hire',
    type: 'document',
    title: 'Hire',
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
            type: 'string',
            title: 'Title',
            validation: (Rule: Rule) => Rule.required().min(10).max(80),
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
            ],
        },
        // Rating Data
        {
            title: 'Rating Data',
            name: 'rating',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'Name'
                },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image'
                },
                {
                    name: 'ratingValue',
                    type: 'number',
                    title: 'Rating Value'
                },
                {
                    name: 'bestRating',
                    type: 'number',
                    title: 'Best Rating'
                },
                {
                    name: 'worstRating',
                    type: 'number',
                    title: 'Worst Rating'
                },
                {
                    name: 'ratingCount',
                    type: 'number',
                    title: 'Rating Count'
                }
            ]
        },
    ],
}
