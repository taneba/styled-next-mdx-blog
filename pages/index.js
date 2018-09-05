import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const IndexPage = () => (
  <Wrapper>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/hello">
      <a>hello</a>
    </Link>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

export default IndexPage
