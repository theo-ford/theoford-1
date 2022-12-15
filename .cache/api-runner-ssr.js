var plugins = [{
      plugin: require('/Users/theodoreford/Documents/01_projects/Website 2.0/00 React/02 Builds/01 theoford-1/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Website 2.0/00 React/02 Builds/01 theoford-1/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Website 2.0/00 React/02 Builds/01 theoford-1/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Website Name","short_name":"Website Name","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/img/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0bab8ad8360e7882a92f8c6ee46f2cb0"},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Website 2.0/00 React/02 Builds/01 theoford-1/node_modules/gatsby-source-prismic/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"theoford-1","accessToken":"MC5ZNDlXcUJFQUFDRUFMZmFF.FO-_vTpvFwgZdBTvv73vv70V77-977-977-9MyxDfO-_ve-_vT5dFTYKRu-_ve-_ve-_vTzvv70","schemas":{"project":{"Main":{"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":null,"choices":{"image":{"type":"Slice","fieldset":"Image","description":"Image","icon":"add_box","display":"list","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"image_thumbnail_square_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image Thumbnail Square Image"}}},"repeat":{}},"video":{"type":"Slice","fieldset":"Video","description":"Video","icon":"add_box","display":"list","non-repeat":{"video":{"type":"Link","config":{"label":"Video","select":null}},"video_thumbnail_landscape_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Video Thumbnail Landscape Image"}},"video_thumbnail_square_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Video Thumbnail Square Image"}}},"repeat":{}},"text":{"type":"Slice","fieldset":"Text","description":"Text","icon":"add_box","display":"list","non-repeat":{"text":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","label":"Text"}}},"repeat":{}}}}}}},"film_lead_project":{"Main":{"video_carousel":{"type":"Group","config":{"fields":{"video_thumbnail_landscape":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Video Thumbnail Landscape"}},"video_thumbnail_square":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Video Thumbnail Square"}},"video_title":{"type":"StructuredText","config":{"multi":"paragraph","label":"Video Title"}},"video_about":{"type":"StructuredText","config":{"multi":"paragraph","label":"Video About"}},"video":{"type":"Link","config":{"select":"media","label":"Video"}}},"label":"Video Carousel"}}}},"featured_projects":{"Main":{"project_relationship_group":{"type":"Group","config":{"fields":{"project_relationship_field":{"type":"Link","config":{"select":"document","customtypes":["project","film_lead_project"],"label":"Project Relationship Field"}}},"label":"Project Relationship Group"}}}}},"imageImgixParams":{"auto":"format"}},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Website 2.0/00 React/02 Builds/01 theoford-1/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/theodoreford/Documents/01_projects/Website 2.0/00 React/02 Builds/01 theoford-1/src/components/global/layout.js"},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Website 2.0/00 React/02 Builds/01 theoford-1/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
