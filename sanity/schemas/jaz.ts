export default {
  name: 'jaz',
  type: 'document',
  title: 'O meni',
  fields: [
    {
      name: 'naslov',
      type: 'string',
      title: 'Naslov',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
