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

// pages/terms-conditions.js
export default function TermsConditions() {
    return (
      <PolicyLayout title="Terms & Conditions">
                            <Breadcrumbs className=" text-black-100">
        <BreadcrumbItem>
          <Link href="/" className="breadcrum"><span className='text-black-100'>Home</span></Link>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrum text-black-100"><span className='text-black-100'>Terms and Conditions</span></BreadcrumbItem>
      </Breadcrumbs>
        <PolicySection title="Acceptance of Terms">
          <p className="text-gray-600 mb-4">
            By accessing or using our website and services, you agree to be bound by these Terms & Conditions.
          </p>
        </PolicySection>
  
        <PolicySection title="Use of Services">
          <p className="text-gray-600 mb-4">
            You agree to use our services only for lawful purposes and in accordance with these Terms & Conditions.
          </p>
        </PolicySection>
  
        <PolicySection title="User Accounts">
          <p className="text-gray-600 mb-4">
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </PolicySection>
  
        <PolicySection title="Intellectual Property">
          <p className="text-gray-600 mb-4">
            All content on our website and services is the property of Optimus Expert and is protected by copyright and other intellectual property laws.
          </p>
        </PolicySection>
  
        <PolicySection title="Limitation of Liability">
          <p className="text-gray-600 mb-4">
            Optimus Expert shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </PolicySection>
  
        <PolicySection title="Governing Law">
          <p className="text-gray-600 mb-4">
            These Terms & Conditions shall be governed by and construed in accordance with the laws of India.
          </p>
        </PolicySection>
  
        <PolicySection title="Changes to Terms">
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms & Conditions at any time. Your continued use of our services after any changes indicates your acceptance of the new Terms & Conditions.
          </p>
        </PolicySection>
      </PolicyLayout>
    )
  }