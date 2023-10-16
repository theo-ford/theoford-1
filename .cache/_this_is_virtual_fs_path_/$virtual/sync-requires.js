
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/src/pages/index.js")),
  "component---src-pages-office-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/src/pages/office.js")),
  "component---src-pages-preview-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/src/pages/preview.js")),
  "component---src-pages-project-index-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/src/pages/project_index.js")),
  "component---src-templates-film-lead-project-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/src/templates/film_lead_project.js")),
  "component---src-templates-project-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/src/templates/project.js"))
}

