import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Card = styled.div`
  ${tw`
    bg-white rounded-lg shadow-xl p-8 w-full md:w-1/2 lg:w-1/3 h-auto
  `}
`
const CardHeader = styled.h1`
  ${tw`text-md`}
`
const CardParagraph = styled.p``
const CardIcons = styled.div``

export default () => (
  <Layout>
    <Card>
      <CardHeader>Welcome</CardHeader>
      <CardParagraph>
        In either case, only the CSS that is actu­al­ly used on a page will be
        extract­ed (no need for PurgeC­SS), and the styles used by com­po­nents
        on a page will be inlined, appear­ing some­thing like this.
      </CardParagraph>
    </Card>
  </Layout>
)
