
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Handjet } from 'next/font/google'

const inter = Handjet({ subsets: ['latin'] })

export const metadata = {
  title: 'My first react application',
  description: 'this is a react an next.js application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='text-[50px] h-[420px]'>
          {children}
        </main>
        
         <Footer/>
        </body>
    </html>
  )
}
