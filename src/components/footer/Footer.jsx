import React from 'react'
import styles from './footer.module.css'
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>Chai-BLOGS</h1>
        </div>
        <p className={styles.desc}>A Paradise For Techy Guys! You Can Read, Write & Discuss On Endless Technologies.</p>
        <div className={styles.icons}>
            <Link href="https://www.linkedin.com/in/saurabh-trivedi-mern/" target='_blank'><Image className={styles.social} src="/linkedin.png" alt='linkedin' width={24} height={24}/></Link>
            <Link href="https://github.com/saurabh-trivedi-mern?tab=repositories" target='_blank'><Image className={styles.social} src="/github.png" alt='github' width={26} height={26}/></Link>
            <Link href="https://leetcode.com/u/saurabh-trivedi/" target='_blank'><Image className={styles.social} src="/leetcode.png" alt='leetcode' width={36} height={24}/></Link> 
            <Link href="https://www.instagram.com/saurabh.jkt/" target='_blank'><Image className={styles.social} src="/instagram.png" alt='instagram' width={24} height={24}/></Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" >Home</Link>
          <Link href="/blogs" >Blogs</Link>
          <Link href="/creator" >Creator</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blogs?cat=nextjs">NextJS</Link>
          <Link href="/blogs?cat=nodejs">NodeJS</Link>
          <Link href="/blogs?cat=reactjs">ReactJS</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
