import React from 'react'
export const metadata = {
  title: 'this is my frontend page',
  description: 'frontend page description',
}
export default function layout({children}) {
  return (
    <div>{children}</div>
  )
}
