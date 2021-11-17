import { Button } from './Button'

import React, { useState, useEffect } from 'react'

export default {
  title: 'My Button Story',
}

export const Demo = () => {
  const [state, setstate] = useState(1)

  return <Button onClick={() => setstate(state + 1)}>{state.toString()}</Button>
}
