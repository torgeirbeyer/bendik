export default {
  type: 'document',
  title: 'Om',
  name: 'about',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      type: 'string',
      name: 'Tittel',
      title: 'Tittel'
    },
    {
      type: 'blockContent',
      name: 'blockContent',
      title: 'Innhold'
    }
  ]
}