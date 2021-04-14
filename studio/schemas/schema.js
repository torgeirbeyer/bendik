// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
// Objects
import blockContent from './objects/blockContent'
import navItem from './objects/navItem'
import link from './objects/link'

// Documents
import project from './documents/project'
import frontPage from './documents/frontPage'
import menu from './documents/menu'
import pages from './documents/pages'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    project,
    frontPage,
    menu,
    pages,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    navItem,
    link
  ]),
})
