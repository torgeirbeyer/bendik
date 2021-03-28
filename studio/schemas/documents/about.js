import blockContent from '../objects/blockContent'

export default {
  type: 'document',
  title: 'About',
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