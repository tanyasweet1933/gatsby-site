import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <div>
            <Link to="/blog">Go Back</Link>
        <hr/>
        <h1>{post.frontmatter.title}</h1>
        <h4>Posted by {post.frontmatter.author}</h4>
        <div dangerouslysetinnerhtml={{__html: post.html}}/>
        </div>
    )
}

export const postquery = graphql`
 query BlogPostByPath($path: string!) {
    markeddownremark(frontmatter: {path: {eq: $path}}){
        html
        frontmatter{
            path
            title
            author
            date
        }

    }

 }

`