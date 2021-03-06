import * as React from 'react'
import styled from 'styled-components'
import { getHeadingID } from './util'

export default ({ children }) => {
  const id = getHeadingID(children)

  return (
    <React.Fragment>
      <TitleLink href={`#${id}`}>
        <h3 id={id}>{children}</h3>
      </TitleLink>
    </React.Fragment>
  )
}

const TitleLink = styled.a`
  color: black;
  text-decoration: none;
  position: relative;

  hover:before {
    content: '#';
    color: #bbb;
    position: absolute;
    left: -24px;
    top: 4px;
    font-size: 2rem;
  }
`
