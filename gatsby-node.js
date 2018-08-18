const path = require('path');

exports.createpages = ({boundactioncreators,graphql}) => {
    const {createpage} = boundactioncreators

    const posttemplate = path.resolve('src/templates/blog-post.js')

    return graphql(`
    {
            allMarkdownRemark {
              edges{
                node{
                    html
                    id
                  frontmatter{
                    path
                    title
                    date
                    author
                  }
                }
              }
            }
        }
    `).then(res=>{
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allmarkdownremark.edges.forEach(({node}) => {
            createpage({
                path: node.frontmatter.path,
                component: posttemplate
            })


            
        });
    })

}