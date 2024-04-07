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
            name: 'bgImage',
            title: 'Background Image',
            type: 'image',
        },
        {
            name: 'heroSection',
            title: 'Hero Section',
            type: 'object',
            fields: [
                {
                    name: 'logo',
                    title: 'Logo',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'logoLink',
                    title: 'Logo Link',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'bgImage',
                    title: 'Background Image',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'btnText',
                    title: 'Button Text',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'btnLink',
                    title: 'Button Link',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'secondSection',
            title: 'Second Section',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'btnText',
                    title: 'Button Text',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'btnLink',
                    title: 'Button Link',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'hosts',
            title: 'Hosts Section',
            type: 'object',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'leftImage',
                    title: 'Left Image',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'bgImage',
                    title: 'Background Image',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'btnText',
                    title: 'Button Text',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'btnLink',
                    title: 'Button Link',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'customizedSolution',
            title: 'Customized Solution Section',
            type: 'object',
            fields: [
                {
                    name: 'bgImage',
                    title: 'Background Image',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'items',
                    title: 'Items',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'icon',
                                    title: 'Icon',
                                    type: 'image',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                                {
                                    name: 'paragraph',
                                    title: 'Paragraph',
                                    type: 'text',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                            ],
                        },
                    ],
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'fifthSection',
            title: 'Fifth Section',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'items',
                    title: 'Items',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'id',
                                    title: 'ID',
                                    type: 'number',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                                {
                                    name: 'paragraph',
                                    title: 'Paragraph',
                                    type: 'text',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                            ],
                        },
                    ],
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'formSection',
            title: 'Form Section',
            type: 'object',
            fields: [
                {
                    name: 'titleColor',
                    title: 'Title Color',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'subTitleColor',
                    title: 'Subtitle Color',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'bgColor',
                    title: 'Background Color',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'spacing',
                    title: 'Spacing',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'pt',
                    title: 'Padding Top',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'bgImage',
                    title: 'Background Image',
                    type: 'image',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
            validation: (Rule: Rule) => Rule.required(),
        },
        // SEO Details
        {
            title: 'SEO Details',
            name: 'seo',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'SEO Title',
                    description: 'Enter the SEO title',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'description',
                    type: 'string',
                    title: 'SEO Description',
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
                    name: 'image',
                    title: 'SEO Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    description: 'Select an image for SEO',
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
        },

    ],
}
