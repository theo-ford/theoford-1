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
      options: {"plugins":[],"repositoryName":"theoford-1","accessToken":"MC5ZNDlXcUJFQUFDRUFMZmFF.FO-_vTpvFwgZdBTvv73vv70V77-977-977-9MyxDfO-_ve-_vT5dFTYKRu-_ve-_ve-_vTzvv70","schemas":{"project":{"Main":{"uid":{"type":"UID","config":{"label":"slug"}},"project_title":{"type":"StructuredText","config":{"single":"paragraph","label":"Project Title"}},"location":{"type":"StructuredText","config":{"multi":"paragraph","label":"Location"}},"client":{"type":"StructuredText","config":{"single":"paragraph","label":"Client"}},"year":{"type":"StructuredText","config":{"single":"paragraph","label":"Year"}},"team":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","allowTargetBlank":true,"label":"Team"}},"homepage_intro":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","allowTargetBlank":true,"label":"Homepage Intro"}},"index_preview_img":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Preview Img"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":null,"choices":{"image":{"type":"Slice","fieldset":"Square Image","description":"Square Image","icon":"add_box","display":"list","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"video":{"type":"Slice","fieldset":"Square Autoplay Video","description":"Square Autoplay Video","icon":"add_box","display":"list","non-repeat":{"video":{"type":"Link","config":{"label":"Video","select":null}},"sml_video":{"type":"Link","config":{"select":"media","label":"Sml Video"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"text":{"type":"Slice","fieldset":"Text","description":"Text","icon":"add_box","display":"list","non-repeat":{"text":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","label":"Text"}}},"repeat":{}},"non_square_image":{"type":"Slice","fieldset":"Non Square Image","description":"Non Square Image","icon":"add_box","display":"list","non-repeat":{"non_square_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Non Square Image"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"video_with_play_button":{"type":"Slice","fieldset":"Video With Play Button","description":"Video With Play Button","icon":"add_box","display":"list","non-repeat":{"video_with_play_button":{"type":"Link","config":{"select":"media","label":"Video With Play Button"}},"video_thumbnail":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Video Thumbnail"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}}}}}},"Project Page Content":{"body1":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{},"choices":{"image":{"type":"Slice","fieldset":"Image","description":"Image","icon":"add_box","display":"list","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"video":{"type":"Slice","fieldset":"Square Autoplay Video","description":"Square Autoplay Video","icon":"add_box","display":"list","non-repeat":{"video":{"type":"Link","config":{"label":"Video","select":null}},"sml_video":{"type":"Link","config":{"select":"media","label":"Sml Video"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"video_with_play_button":{"type":"Slice","fieldset":"Video With Play Button","description":"Video With Play Button","icon":"add_box","display":"list","non-repeat":{"video_with_play_button":{"type":"Link","config":{"select":"media","label":"Video With Play Button"}},"video_thumbnail":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Video Thumbnail"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"text":{"type":"Slice","fieldset":"Text","description":"Text","icon":"add_box","display":"list","non-repeat":{"text":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","label":"Text"}}},"repeat":{}}}}}}},"film_lead_project":{"Main":{"uid":{"type":"UID","config":{"label":"slug"}},"project_title":{"type":"StructuredText","config":{"single":"paragraph","label":"Project Title"}},"location":{"type":"StructuredText","config":{"single":"paragraph","label":"Location"}},"client":{"type":"StructuredText","config":{"single":"paragraph","label":"Client"}},"year":{"type":"StructuredText","config":{"single":"paragraph","label":"Year"}},"team":{"type":"StructuredText","config":{"single":"paragraph","label":"Team"}},"homepage_intro":{"type":"StructuredText","config":{"single":"paragraph","label":"Homepage Intro"}},"index_preview_img":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Preview Img"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":null,"choices":{"video_with_play_button":{"type":"Slice","fieldset":"Video With Play Button","description":"Video With Play Button","icon":"add_box","display":"list","non-repeat":{"video_with_play_button":{"type":"Link","config":{"select":"media","label":"Video With Play Button"}},"video_thumbnail":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Video Thumbnail"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"video":{"type":"Slice","fieldset":"Square Autoplay Video","description":"Square Autoplay Video","icon":"add_box","display":"list","non-repeat":{"video":{"type":"Link","config":{"label":"Video","select":null}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}},"text":{"type":"Slice","fieldset":"Text","description":"Text","icon":"add_box","display":"list","non-repeat":{"text":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","label":"Text"}}},"repeat":{}},"image":{"type":"Slice","fieldset":"Image","description":"Image","icon":"add_box","display":"list","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"index_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Index Image"}}},"repeat":{}}}}}}},"featured_projects":{"Main":{"project_relationship_group":{"type":"Group","config":{"fields":{"project_relationship_field":{"type":"Link","config":{"select":"document","customtypes":["project","film_lead_project"],"label":"Project Relationship Field"}}},"label":"Project Relationship Group"}}}},"about":{"Main":{"uid":{"type":"UID","config":{"label":"slug"}},"email":{"type":"Link","config":{"label":"email","select":null}},"phone_number":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","label":"Phone Number"}},"website_url":{"type":"StructuredText","config":{"single":"paragraph,hyperlink","label":"Website URL"}},"instagram":{"type":"StructuredText","config":{"single":"paragraph,hyperlink","label":"Instagram"}},"address":{"type":"StructuredText","config":{"multi":"paragraph","label":"Address"}},"homepage_intro":{"type":"StructuredText","config":{"multi":"paragraph,heading6,hyperlink","label":"Homepage Intro"}},"upcoming_locations":{"type":"StructuredText","config":{"single":"paragraph","label":"Upcoming Locations"}},"current_location":{"type":"StructuredText","config":{"single":"paragraph","label":"Current Location"}},"previous_locations":{"type":"StructuredText","config":{"single":"paragraph","label":"Previous Locations"}},"about_page_intro":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","label":"About Page Intro"}},"clients":{"type":"StructuredText","config":{"single":"paragraph,list-item","label":"Clients"}},"previous_employers":{"type":"StructuredText","config":{"single":"paragraph,hyperlink,list-item","label":"Previous Employers"}},"services":{"type":"StructuredText","config":{"multi":"paragraph,list-item","label":"Services"}},"collaborators":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink,list-item","label":"Collaborators"}}}}},"imageImgixParams":{"auto":""}},
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
