"use client"

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

export default function RefundPolicy() {
  return (
    <PolicyLayout title="No Refund Policy">
      <Breadcrumbs className="text-black-100">
        <BreadcrumbItem>
          <Link href="/" className="breadcrum"><span className='text-black-100'>Home</span></Link>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrum text-black-100"><span className='text-black-100'>No Refund Policy</span></BreadcrumbItem>
      </Breadcrumbs>

      <PolicySection title="No Refund Policy">
        <p className="text-gray-600 mb-4">
          At Optimus Expert, we do not offer refunds for any of our products or services. All sales are final.
        </p>
      </PolicySection>

      <PolicySection title="Rationale">
        <p className="text-gray-600 mb-4">
          We have implemented this no-refund policy to ensure the highest quality of service and commitment from our clients. Our products and services are delivered with utmost professionalism and as described, and we expect our clients to make informed decisions before making a purchase.
        </p>
      </PolicySection>

      <PolicySection title="Before Purchase">
        <p className="text-gray-600 mb-4">
          We strongly encourage all potential customers to carefully review our product descriptions, terms of service, and any available demonstrations or free trials before making a purchase. If you have any questions or concerns, please contact our customer support team at hello@optimusexpert.com before completing your transaction.
        </p>
      </PolicySection>

      <PolicySection title="Exceptions">
        <p className="text-gray-600 mb-4">
          While we maintain a strict no-refund policy, we may, at our sole discretion, consider exceptions in extreme circumstances. However, such exceptions are rare and are handled on a case-by-case basis. Any decision made by Optimus Expert regarding refunds is final.
        </p>
      </PolicySection>

      <PolicySection title="Cancellation of Services">
        <p className="text-gray-600 mb-4">
          For subscription-based services, while we do not offer refunds, you may cancel your subscription at any time. The cancellation will take effect at the end of the current billing cycle, and you will not be charged for subsequent periods. No partial refunds will be issued for the remainder of the current billing cycle.
        </p>
      </PolicySection>

      <PolicySection title="Contact Us">
        <p className="text-gray-600 mb-4">
          If you have any questions about our no-refund policy, please contact our customer support team at hello@optimusexpert.com. We are here to assist you and ensure you have all the necessary information before making a purchase.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}