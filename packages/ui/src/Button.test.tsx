import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { Button } from './Button'

test.each([
  'falsemjgntur',
  'kzvoovko',
  'umkt',
  'gkjfzeu',
  'grvtncgkekk',
  'nkxpsxppmjg',
  'owsdxmik',
  'zocjozwq',
  'vuswtg',
  'cairoiexitzo',
])('a button works as expected %s', async (value: string) => {
  render(<Button label={value} />)
  expect(screen.getByText(value)).toBeInTheDocument()
})
