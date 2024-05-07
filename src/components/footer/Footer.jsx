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
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique accusamus asperiores necessitatibus molestias eligendi sunt nesciunt nihil sit tempore!</p>
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
          <Link href="/" >Blogs</Link>
          <Link href="/" >About</Link>
          <Link href="/" >Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" >Style</Link>
          <Link href="/" >Fashion</Link>
          <Link href="/" >Travel</Link>
          <Link href="/" >Coding</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
