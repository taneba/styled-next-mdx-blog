import * as React from 'react'
import styled from 'styled-components'
import getHeadingID from './util'

export default ({ children }) => {
  const id = getHeadingID(children)

  return (
    <React.Fragment>
      <TitleLink href={`#${id}`}>
        <StyledH1 id={id}>{children}</h1>
      </TitleLink>
    </React.Fragment>
  )
}

const StyledH1 = styled.h1`
  background: black;
  color: white;
  display: inline-block;
  padding: 16px 8px;
  margin: 0;
  line-height: 1.4;
`

const TitleLink = styled.a`
  color: black;
  text-decoration: none;
  position: relative;
  display: block;

  hover:before {
    content: '#';
    color: #bbb;
    position: absolute;
    left: -32px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3.2rem;
  }
`
