import React from 'react'
import { HomeHeader } from './HomeHeader'
import { HomeCertify } from './HomeCertify'
import { HomeMS } from './HomeMS'
import { HomeNewEvent } from './HomeNewEvent'
import { HomeCelebration } from './HomeCelebration'
import { HomeNR } from './HomeNR'

export const Home = () => {
  return (
    <section >
<HomeHeader/>
<HomeCertify/>
<HomeMS/>
<HomeNewEvent/>
<HomeCelebration/>
<HomeNR/>
    </section>
  )
}
