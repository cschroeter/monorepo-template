import React, { useState } from 'react'
import { Button } from './Button'
import { IconButton } from './IconButton'

export default {
  title: 'My Button Story',
}

export const MyButton = () => {
  const [state, setstate] = useState(0)

  return <Button onClick={() => setstate(state + 1)}>{state.toString()}</Button>
}

export const MyIconButton = () => <IconButton />
