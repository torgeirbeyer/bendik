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
            .schemaType('frontPage')
            .documentId('frontPage')
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
    .filter(listItem => !['frontPage'].includes(listItem.getId()))
    .filter(listItem => !['menu'].includes(listItem.getId()))
  ]
)