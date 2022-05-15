import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextUIProvider, Image } from '@nextui-org/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OPJEG - Optimize your Jpeg yield with Options</title>
        <meta name="description" content="Opportunity to Optimize your Jpeg yield with Options" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextUIProvider>
        <Image
          src="polygon-object.png"
          alt=""
          width={600}
          height={400}
          objectFit='cover'
          containerCss={{
            position: 'fixed',
            borderRadius: 0,
            filter: 'blur(15px)',
            left: '-20px',
            top: '-20px',
          }} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default MyApp
