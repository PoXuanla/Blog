import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs2015.min.css'
          integrity='sha512-mtXspRdOWHCYp+f4c7CkWGYPPRAhq9X+xCvJMUBVAb6pqA4U8pxhT3RWT3LP3bKbiolYL2CkL1bSKZZO4eeTew=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
