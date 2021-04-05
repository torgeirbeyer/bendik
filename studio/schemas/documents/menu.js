import { VscMenu } from 'react-icons/vsc'
import { MdLocalMovies } from 'react-icons/md'

export default {
  name: 'menu',
  type: 'document',
  title: 'Meny',
  icon: MdLocalMovies,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'id',
      type: 'string',
      title: 'Id'
    },
    {
      name: 'navItems',
      type: 'array',
      title: 'Lenker i menyen',
      of: [{ type: 'navItem' }]
    }
  ]
};