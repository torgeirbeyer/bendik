import S from '@sanity/desk-tool/structure-builder'

export default () => 
  S.list()
    .title('Sider')
    .items(
      [S.listItem()
        .title('Forside')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()))
        ])