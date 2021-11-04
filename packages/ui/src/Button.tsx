import React from 'react'

interface ButtonProps {
  label: string
}

export const Button = (props: ButtonProps) => {
  const name = 'Christian'
  console.log(name)
  return <button style={{ background: 'blue' }}>{props.label}</button>
}
