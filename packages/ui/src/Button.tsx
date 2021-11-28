import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <div>Hakunamatata</div>
      <button style={{ background: 'blue' }} {...props} />
    </>
  )
}
