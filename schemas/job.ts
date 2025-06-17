import { Rule } from 'sanity'

export default {
    name: 'job',
    type: 'document',
    title: 'Job',
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
            validation: (Rule: Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule: Rule) => Rule.required().min(50).max(2000),
        },
        {
            name: 'lastDateToApply',
            type: 'date',
            title: 'Last Date To Apply',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'jobType',
            type: 'string',
            title: 'Job Type',
            initialValue: 'on-site',
            options: {
                list: [
                    { title: 'Remote', value: 'remote' },
                    { title: 'Onsite', value: 'on-site' },
                    { title: 'Hybrid', value: 'hybrid' },
                ],
            },
        },
        {
            name: 'jobTiming',
            type: 'string',
            title: 'Job Timing',
            initialValue: 'full-time',
            options: {
                list: [
                    { title: 'Full Time', value: 'full-time' },
                    { title: 'Part Time', value: 'part-time' },
                    { title: 'Internship', value: 'internship' },
                    { title: 'Flexible', value: 'flexible' },
                    { title: 'Contract', value: 'contract' },
                ],
            },
        },
        {
            name: 'experience',
            type: 'string',
            title: 'Experience',
            initialValue: '0-1',
            options: {
                list: [
                    { title: '0-1 years', value: '0-1' },
                    { title: '1-2 years', value: '1-2' },
                    { title: '2-3 years', value: '2-3' },
                    { title: '3-4 years', value: '3-4' },
                    { title: '4-5 years', value: '4-5' },
                    { title: '5+ years', value: '5+' },
                ],
            },
        },
        {
            name: 'jsonLd',
            initialValue: '{}',
            title: 'JSON-LD Structured Data',
            type: 'text',
            description: 'Paste your JSON-LD schema here. It should be valid JSON.',
            validation: (Rule: Rule) =>
                Rule
                    .custom((json: string) => {
                        try {
                            JSON.parse(json);
                            return true;
                        } catch (err) {
                            return 'Invalid JSON format';
                        }
                    }
                ),
        }
    ],
}
