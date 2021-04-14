export const frontPageQuery = `
  {
    *[_type == "frontPage" && !(_id in path('drafts.**'))] {
      _id,
      title,
      description,
      image 
    }
  }
`;

export const menuQuery = `
  {
    *[_type == "menu" && !(_id in path('drafts.**'))] {
      _id,
      "menu": navItems[]{
        _key,
        "title": text,
        "url": navItemUrl.linkUrl,
      }
    }
  }
`

export const pageQuery = `
  {

  }
`
