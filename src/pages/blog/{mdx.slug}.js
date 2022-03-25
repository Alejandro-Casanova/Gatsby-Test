import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

//Syntax highlighting
require("prismjs/themes/prism-solarizedlight.css");
require("prismjs/plugins/command-line/prism-command-line.css");

const BlogPost = ({data}) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        date(formatString: "YYYY, MMMM Do")
        title
      }
      body
    }
  }
`

export default BlogPost