import React, { useState } from 'react'
import { Button } from './Button'

export const MyComponent = () => {
  const [count, setCount] = useState(0)
  return <Button onClick={() => setCount(count + 1)}>{count}</Button>
}
