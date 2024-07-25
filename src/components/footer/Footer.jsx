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
          <h1 className={styles.logoText}>Chai-BLOG</h1>
        </div>
        <p className={styles.desc}>A Paradise For Tech-Savy People! Read, Write & Discuss About Endless Technologies.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt='facebook' width={18} height={18} />
          <Image src="/instagram.png" alt='instagram' width={18} height={18} />
          <Image src="/tiktok.png" alt='tiktok' width={18} height={18} />
          <Image src="/youtube.png" alt='youtube' width={18} height={18} />
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
