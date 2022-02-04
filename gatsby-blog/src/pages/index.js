import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Iframe from 'react-iframe'
import ReactGA from 'react-ga'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

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
          Hello. Welcome to my site. I am Stanton Dobson, a React developer and a recent graduate of Georgia Southern University where I earned a BS in the field of computer science. Above you can find my resume as well as links to my github and linkedin. Below are some of my projects which you can view as well, along with a few posts about myself and my interests. 
        </p>
      </RaisedBox>
      <RaisedBox style={{display: `flex`, flexDirection: `column`}}>
        <h2>Contact Me</h2>
        <div style={{display: `flex`, justifyContent: `space-between`}}>
          <FontAwesomeIcon icon={faMapMarker} style={{marginRight: `5px`}} />
          <span style={{fontFamily: `Muli`}}>Savannah, GA (willing to relocate)</span>
        </div>
        <div style={{display: `flex`, justifyContent: `space-between`}}>
          <FontAwesomeIcon icon={faEnvelope} style={{marginRight: `5px`}}/>
          <a rel="noopener noreferrer" style={{fontFamily: `Muli`, textDecoration: `underline`, color: `black`}} target="_blank" href="mailto:stantondobson@gmail.com">stantondobson@gmail.com</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} style={{marginRight: `5px`}} />
          <span style={{fontFamily: `Muli`}}>912-507-9572</span>
        </div>
      </RaisedBox>
    </div>

    <RaisedBox>
      <div style={{textAlign: `center`}}>
        <h1>My Projects</h1>
      </div>
      <div style={{display:`flex`, justifyContent:`space-between`, marginLeft: `20%`, marginRight: `20%`}}>
        <a target="_blank" rel="noopener noreferrer" href="http://node-chat-app-7ujh6.herokuapp.com/">Chat App</a>
        <a target="_blank" rel="noopener noreferrer" href="https://crown-clothing-live-prod-ed.herokuapp.com/">EcommerceApp</a>
      </div>
      <div style={{display:`flex`, justifyContent:`space-between`, marginRight: `10px`, overflowX: `scroll`}}>
        <Iframe url="https://lang-flash.herokuapp.com/"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
        <Iframe style={{pointerEvents: `none`}} url="https://crown-clothing-live-prod-ed.herokuapp.com"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
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
