import './styles/global.css'
import { Routes, Route, HashRouter } from "react-router-dom"
import { NextUIProvider, Container, Spacer, Image } from '@nextui-org/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { OpjegProvider } from './providers/OpjegProvider'
import Marketplace from './views/marketplace/MarketplacePage'
import AboutPage from './views/about/AboutPage'
import AccountOptionsPage from './views/account/AccountOptionsPage'

export default function App() {
  return (
    <>
      <NextUIProvider>
        <OpjegProvider>
          <HashRouter>
            <Image
              src="/polygon-object.png"
              width={400}
              height={200}
              objectFit='cover'
              alt=''
              containerCss={{
                position: 'fixed',
                borderRadius: 0,
                filter: 'blur(15px)',
                left: '-20px',
                top: '-20px',
              }} />
            <Navbar />
              <Routes>
                <Route path="/account/options" element={<AccountOptionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<Marketplace />} />
              </Routes>
            <Footer />
          </HashRouter>
        </OpjegProvider>
      </NextUIProvider>
    </>
  )
}
