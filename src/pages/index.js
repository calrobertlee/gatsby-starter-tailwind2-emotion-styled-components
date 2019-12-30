import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Card = styled.div`
  ${tw`
    bg-white rounded-lg shadow-xl p-8 w-full md:w-1/2 lg:w-1/3 h-auto m-4
  `}
`
const CardHeader = styled.h1`
  ${tw`text-2xl mb-2 font-bold`}
`
const CardCopy = styled.div`
  p {
    ${tw`
      text-sm mb-2 sm:text-md mb-2
    `}
    &:last-of-type {
      ${tw`
        mb-0
      `}
    }
  }
`
const CardIcons = styled.div``

export default () => (
  <Layout>
    <Card>
      <CardHeader>Gatsby Tailwind 2 + Emotion / Styled Components</CardHeader>
      <CardCopy>
        <p>
          A (reasonably) unopinionated Gatsby starter, including; Tailwind 2 and
          Emotion. Use Tailwind utilities with Emotion powered CSS-in-JS to
          produce component scoped CSS (no need for utilities like Purge CSS,
          etc).
        </p>
      </CardCopy>
    </Card>
  </Layout>
)
