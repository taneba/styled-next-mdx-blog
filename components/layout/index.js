import { Fragment } from 'react'
import styled from 'styled-components'
import Header from '../header'

export default ({ children }) => (
  <Fragment>
    <Header />
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  </Fragment>
)

const Content = styled.div`
  padding: 48px 14px;
  max-width: 740px;
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
