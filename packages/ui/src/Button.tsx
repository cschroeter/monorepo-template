import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return <button style={{ background: 'blue' }} {...props} />
}
