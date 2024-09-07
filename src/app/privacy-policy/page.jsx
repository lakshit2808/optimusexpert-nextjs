"use client"
// pages/privacy-policy.js
import Head from 'next/head'
import Link from 'next/link'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'

const PolicyLayout = ({ children, title }) => (
  <div className="min-h-screen bg-gray-100">
    <Head>
      <title>{title} | Optimus Expert</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
      {children}
    </main>
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p>&copy; 2022 Optimus Expert. All rights reserved.</p>
      <div className="mt-4">
        <Link href="/privacy-policy" className="text-indigo-300 hover:text-indigo-100 mx-2">Privacy Policy</Link>
        <Link href="/terms-conditions" className="text-indigo-300 hover:text-indigo-100 mx-2">Terms & Conditions</Link>
        <Link href="/refund-policy" className="text-indigo-300 hover:text-indigo-100 mx-2">Refund Policy</Link>
      </div>
    </footer>
  </div>
)

const PolicySection = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {children}
  </section>
)

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
            <Breadcrumbs className=" text-black-100">
        <BreadcrumbItem>
          <Link href="/" className="breadcrum"><span className='text-black-100'>Home</span></Link>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrum text-black-100"><span className='text-black-100'>Privacy Policy</span></BreadcrumbItem>
      </Breadcrumbs>
      <PolicySection title="Introduction">
        <p className="text-gray-600 mb-4">
          This Privacy Policy describes how Optimus Expert collects, uses, and shares your personal information when you use our website or services.
        </p>
      </PolicySection>

      <PolicySection title="Information We Collect">
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Personal information (e.g., name, email address, phone number)</li>
          <li>Usage data (e.g., IP address, browser type, pages visited)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </PolicySection>

      <PolicySection title="How We Use Your Information">
        <p className="text-gray-600 mb-4">
          We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
        </p>
      </PolicySection>

      <PolicySection title="Data Sharing and Disclosure">
        <p className="text-gray-600 mb-4">
          We may share your information with service providers, business partners, and legal authorities when required by law.
        </p>
      </PolicySection>

      <PolicySection title="Your Rights and Choices">
        <p className="text-gray-600 mb-4">
          You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection and use practices.
        </p>
      </PolicySection>

      <PolicySection title="Security">
        <p className="text-gray-600 mb-4">
          We implement appropriate technical and organizational measures to protect your personal information.
        </p>
      </PolicySection>

      <PolicySection title="Changes to This Policy">
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any significant changes.
        </p>
      </PolicySection>

      <PolicySection title="Contact Us">
        <p className="text-gray-600 mb-4">
          If you have any questions about this Privacy Policy, please contact us at hello@optmusexpert.com.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}


