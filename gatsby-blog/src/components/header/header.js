import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'


const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
    left: 70px;

span {
        visibility: hidden;
        cursor: pointer;
        width: 100px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        top: 20px;
        right: -25px;
        z-index: 1;
    }

    &:hover {
        & span {
            visibility: visible
        }
    }
`;
const Header = ({ siteTitle}) => (
  <header
    style={{
      background: `#DAE3E7`,
      height: `200px`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#434343`,
            textDecoration: `none`,
            height: `150px`,
            lineHeight: `150px`,
            fontSize: `1.25em`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2 style={{margin: 0, marginTop: `-5%`}}>Software Engineer</h2>
      <div style={{ width: `20%`, display:`flex`, justifyContent:`space-between`, marginTop: `10px`}}>
        <a target="_blank" href="https://github.com/7ujh6"><TooltipContainer><FontAwesomeIcon style={{cursor: `pointer`}} icon={faGithub} /><span>Github</span></TooltipContainer></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/stantondobson/"><TooltipContainer><FontAwesomeIcon style={{cursor: `pointer`}} icon={faLinkedin} /><span>LinkedIn</span></TooltipContainer></a>
        <a target="_blank" rel="noopener noreferrer" href="./resume.pdf" download><TooltipContainer><FontAwesomeIcon style={{cursor: `pointer`, color: `indigo`}} icon={faPrint} /><span>Resume</span></TooltipContainer></a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
