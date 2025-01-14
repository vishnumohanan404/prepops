import {defineField, defineType} from 'sanity'

export const quizType = defineType({
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  fields: [
    defineField({
      name: 'topic',
      type: 'reference',
      to: [{type: 'topics'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtopic',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'options',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answerIndex',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: '_id'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
