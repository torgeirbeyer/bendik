import S from '@sanity/desk-tool/structure-builder'

export default () => 
  S.list()
    .title('Innhold')
    .items(
      [
        S.listItem()
        .title('Forside')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        S.listItem()
        .title('Meny')
        .child(
          S.document()
            .schemaType('menu')
            .documentId('menu')
        ),
  S.divider(),
  ...S.documentTypeListItems()
    .filter(listItem => !['siteSettings'].includes(listItem.getId()))
    .filter(listItem => !['menu'].includes(listItem.getId()))
  ]
)