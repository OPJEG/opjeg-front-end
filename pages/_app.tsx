import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextUIProvider } from '@nextui-org/react'
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
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default MyApp
