import React from 'react'
import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export default function Header() {
  const {header} = styles

  return (
    <header className={header}>
      <img src={igniteLogo} alt="Logo do Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
