export default {
  type: 'document',
  title: 'CV',
  name: 'cv',
  fields: [
    {
      type: 'string',
      title: 'Tittel',
      name: 'title',
    },
    {
      type: 'blockContent',
      title: 'Innhold',
      name: 'blockContent'
    }
  ]
}