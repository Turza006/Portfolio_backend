import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Probal Datta Turza - Backend Developer',
  description: 'Portfolio of Probal Datta Turza, a backend developer with 4 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

