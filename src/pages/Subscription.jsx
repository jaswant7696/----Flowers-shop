import React from 'react'
import { Section } from '../components/Subscription/Section'
import { Sectionwork } from '../components/Subscription/Sectionwork'
import { Sectionbuild } from '../components/Subscription/sectionBuild'
import { SubscriptionFAQ } from '../components/Subscription/SubscriptionFAQ'

export const Subscription = () => {
  return (
  <>
  <Section/>
  <Sectionwork/>
  <Sectionbuild/>
  <SubscriptionFAQ/>
  </>
  )
}
