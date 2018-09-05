import Link from 'next/link'
import styled from 'styled-components'

export default () => (
  <Header>
    <LinkWrapper>
      <Link href="/">
        <A>#times-taneba</A>
      </Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link href="about">
        <A>about</A>
      </Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link href="archive">
        <A>archive</A>
      </Link>
    </LinkWrapper>
  </Header>
)

const Header = styled.header`
  height: 64px;
  display: flex;
  background: #fff;
  align-items: center;
  color: #555;
  padding: 0 24px;
  border-bottom: 1px solid #ddd;
`

const LinkWrapper = styled.div`
  padding: 0 12px;
`

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`
