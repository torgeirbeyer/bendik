export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'externalContent',
      title: 'Lenken er til en ekstern url',
      type: 'boolean'
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      description:
        'Use this field to add a link to the source. For external links use full url e.g. ‘https://google.com/’. For internal links use the page path e.g. ‘companies’',
      type: 'string'
    }
  ]
};