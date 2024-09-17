import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Build Scalable Trading Systems, AI, SaaS for your Business',
  description: "Join us for building intelligent trading systems, AI products, and scalable SaaS with us. We Take your business to the next level with the latest technology.",
  verification: {
    google: "google6c0de3751a1cc1be.html",
  }
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
