import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

import ecommerceScreenshot from "../images/project1.png";

import Layout from "../components/layout"
import SEO from "../components/seo"

// ReactGA.initialize('UA-174629408-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`
const RaisedBox = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 10px;
    border: 1px solid #77aaff;
    box-shadow:  -1px 1px #77aaff,
         -2px 2px #77aaff,
         -3px 3px #77aaff,
         -4px 4px #77aaff,
         -5px 5px #77aaff;
`;

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{display: `flex`, justifyContent: `spaceBetween`}}>
      <RaisedBox style={{marginRight: `10px`}}>
        <h2 style={{textAlign:`center`}}>About Me</h2>
        <p style={{fontFamily: `Muli`}}>
        Hello, I'm Stanton Dobson, a Software Engineer with over 4 years of experience building and operating resilient, scalable backend and full-stack systems. I'm passionate about solving complex infrastructure problems and using automation to drive operational excellence. This portfolio showcases some of my foundational projects and my journey as a builder.
        </p>
      </RaisedBox>
      <RaisedBox style={{display: `flex`, flexDirection: `column`}}>
        <h2>Contact Me</h2>
        <div style={{display: `flex`, alignItems: 'center', marginBottom: '8px'}}>
          <FontAwesomeIcon icon={faMapMarker} style={{marginRight: `5px`}} />
          <span style={{fontFamily: `Muli`}}>Boise, Idaho</span>
        </div>
        <div style={{display: `flex`, alignItems: 'center', marginBottom: '8px'}}>
          <FontAwesomeIcon icon={faEnvelope} style={{marginRight: `5px`}}/>
          <a rel="noopener noreferrer" style={{fontFamily: `Muli`, textDecoration: `underline`, color: `black`}} target="_blank" href="mailto:stantondobson@gmail.com">stantondobson@gmail.com</a>
        </div>
        <div style={{display: `flex`, alignItems: 'center'}}>
          <FontAwesomeIcon icon={faPhone} style={{marginRight: `5px`}} />
          <span style={{fontFamily: `Muli`}}>912-507-9572</span>
        </div>
      </RaisedBox>
    </div>

    <RaisedBox>
      <div style={{textAlign: `center`}}>
        <h1>My Projects</h1>
      </div>
      <div style={{textAlign: 'center', marginLeft: `20%`, marginRight: `20%`}}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/7ujh6/E-commerce-Store">EcommerceApp (View on GitHub)</a>
      </div>
      <div style={{marginTop: '20px', textAlign: 'center'}}>
        <img 
          src={ecommerceScreenshot} 
          alt="Screenshot of the E-commerce Store project homepage" 
          style={{maxWidth: '80%', border: '1px solid #ccc', borderRadius: '4px'}} 
        />
        <p style={{fontFamily: `Muli`, marginTop: '10px'}}>
          A full-stack e-commerce application I built to teach myself React, Redux, and Firebase. This project showcases my ability to independently build, learn, and solve complex problems from scratch.
        </p>
    </div>
    </RaisedBox>

    <RaisedBox>
      <div style={{textAlign: `center`}}>
        <h1>Blogs</h1>
      </div>
      {
        data.allMarkdownRemark.edges.map(({node}) => <div key={node.id}>
          <BlogLink to={node.fields.slug}><BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle></BlogLink>
          <p>{node.excerpt}</p>
        </div>)
      }
    </RaisedBox>
    
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
