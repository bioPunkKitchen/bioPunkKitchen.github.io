/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/* markdown files, see https://www.gatsbyjs.org/docs/adding-markdown-pages/ */
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const markdownTemplate = path.resolve(`src/templates/markdownTemplate.js`)

  return graphql(`
   {
     allMarkdownRemark(
       sort: { order: DESC, fields: [frontmatter___date] }
       limit: 1000
     ) {
       edges {
         node {
           frontmatter {
             path
           }
         }
       }
     }
   }
  `).then(result => {
   if (result.errors) {
     return Promise.reject(result.errors)
   }

   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: markdownTemplate,
       context: {}, // additional data can be passed via context
     })
   })
  })
}
