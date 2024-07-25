
import React from 'react'
import styles from './navbar.module.css'
// import Image from 'next/image'
import Link from 'next/link'

import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>  
         Chai-BLOGS
        </div>  
        <div className={styles.links}> 
          <Link href="/" className={styles.link}>Home</Link>
          {/* <Link href="/contact" className={styles.link}>Contact</Link> */}
          <Link href="/blogs" className={styles.link}>Blogs</Link>
          {/* <Link href="/write" className={styles.link}>Write</Link> */}
          <Link href="/creator" className={styles.link}>Creator</Link>
          <AuthLinks />
          <ThemeToggle />
        </div>
    </div>
  )
}

export default Navbar
