import { Box, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const App = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box mx="auto" m="4">
      <Button onClick={toggleColorMode}>Toggle me</Button>
    </Box>
  )
}
