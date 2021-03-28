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
      type: 'image',
      title: 'Bilde til prosjektsiden',
      name: 'projectImage',
      desctription: 'Cover eller lignende, helst kvadratisk.'
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
  ]
}