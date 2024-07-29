import Navbar from '../components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/footer/Footer'
import { ThemeContextProvider } from '../context/ThemeContext'
import ThemeProviders from '../providers/ThemeProviders'
import AuthProvider from '../providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chai-BLOGS',
  description: 'Your Tech Blogs Struggle Ends Here.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProviders>
              <div className='container'>
                <div className='wrapper'>
                  <Navbar />
                    {children}
                  <Footer />
                </div>
              </div>
            </ThemeProviders>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
