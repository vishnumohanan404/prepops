import {defineField, defineType} from 'sanity'

export const topicsType = defineType({
  name: 'topics',
  title: 'Topics',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Topic Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
