export default {
  type: 'document',
  title: 'Sider',
  name: 'pages',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Sidenavn'
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'URL',
      options: {
        source: 'title'
      }
    },
    {
      type: 'blockContent',
      name: 'blockContent',
      title: 'Innhold'
    }
  ]
}