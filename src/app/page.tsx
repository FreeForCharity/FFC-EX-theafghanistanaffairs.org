import type { Metadata } from 'next'
import React from 'react'
// import HomePage from './Home/page'
import HomePage from '@/app/home-page'
import OrganizationSchema from '@/components/seo/OrganizationSchema'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const page = () => {
  return (
    <div>
      <OrganizationSchema />
      {/* <HomePage /> */}
      <HomePage />
    </div>
  )
}

export default page
