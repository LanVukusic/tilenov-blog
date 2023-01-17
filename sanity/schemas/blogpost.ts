export default {
  name: 'blogpost',
  type: 'document',
  title: 'Blogpost',
  fields: [
    {
      name: 'url',
      type: 'string',
      title: 'Url',
    },
    {
      name: 'naslov',
      type: 'string',
      title: 'Naslov',
    },
    {
      name: 'postAt',
      type: 'date',
      title: 'Datum za objavo',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
