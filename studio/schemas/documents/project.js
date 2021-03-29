export default {
  type: 'document',
  title: 'Prosjekt',
  name: 'project',
  fields: [
    {
      type: 'string',
      title: 'Tittel',
      name: 'title'
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
      type: 'image',
      title: 'Bilde til prosjektsiden',
      name: 'projectImage',
      desctription: 'Cover eller lignende, helst kvadratisk.',
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
    },
    {
      type: 'blockContent',
      title: 'Innhold',
      name: 'blockContent'
    },
    {
      type: 'url',
      title: 'Lenke til prosjekt',
      name: 'projectUrl',
      desctription: 'Kan være spotify, youtube, vimeo, anmeldelse, etc.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'projectUrl',
      media: 'projectImage',
    },
  },
}