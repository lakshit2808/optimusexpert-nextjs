import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Optimus Expert: Where Number meets Precision. Performance. Profitability',
  description: "Unlock growth with Optimus Expert: Your trusted partner for seamless innovation, technology integration, and exponential success across sectors globally.",
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
