import React from 'react'
import App, { Container } from 'next/app'
import { MDXProvider } from '@mdx-js/tag'
import styled from 'styled-components'
import Layout from '../components/layout'
import components from '../lib/components'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <MDXProvider components={components}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </Container>
    )
  }
}
