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
      name: 'datum',
      type: 'date',
      title: 'Datum',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
