import React from 'react'
import { ContactSection } from './ContactSection'
import { BusinessEnquiries } from './BusinessEnquiries'
import { BusinessHours } from './BusinessHours'

export const Contact = () => {
  return (
    <div>
        <ContactSection/>
        <BusinessEnquiries/>
        <BusinessHours/>
    </div>
  )
}
