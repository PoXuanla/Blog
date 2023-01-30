import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import Nav from '@/layouts/nav'
import Wrapper from '@/components/wrapper'
import components from '@/components/components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Wrapper>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Wrapper>
    </>
  )
}
