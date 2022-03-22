import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

//Syntax highlighting
require("prismjs/themes/prism-solarizedlight.css");
require("prismjs/plugins/command-line/prism-command-line.css");

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
        {
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <MDXRenderer>
                        {node.body}
                    </MDXRenderer>
                </article>
            ))
        }
    </Layout>
  )
}

export const query = graphql`
    query MyQuery {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                frontmatter {
                    date(formatString: "YYYY, MMMM Do")
                    title
                }
                body
            }
        }
    }
`

export default BlogPage