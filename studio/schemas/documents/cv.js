export default {
  type: 'document',
  title: 'CV',
  name: 'cv',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'], 
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