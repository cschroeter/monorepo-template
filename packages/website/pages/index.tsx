import { Button } from '@template/ui'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Hello</Button>
      <iframe src="my-component.html" height="100%" width="100%"></iframe>
    </div>
  )
}

export default Home
