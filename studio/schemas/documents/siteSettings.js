export default {
  type: 'document',
  title: 'Forside og innstillinger',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  name: 'siteSettings',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel'
    },
    {
      type: 'string',
      name: 'description',
      title: 'Beskrivelse',
      description: 'Kort beskrivelse av hva siden er.',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Forsidebilde',
      description: 'Bakgrunnsbilde til forsiden.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Beskrivelse av bildet',
          description: 'Kort, beskrivende tekst (for skjermlesere).',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Fotograf',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ]
    }
  ]
}