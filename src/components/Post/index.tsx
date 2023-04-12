import React from 'react'

export default function Post({ author, content }) {
  return (
    <div>
      <strong><p>{author}</p></strong>
      <p>{content}</p>
    </div>
  )
}
