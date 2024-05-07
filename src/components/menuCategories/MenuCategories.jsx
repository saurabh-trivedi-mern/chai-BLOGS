import React from 'react'
import styles from "./menuCategories.module.css"
import Link from "next/link"

const MenuCategories = () => {
  return (
    <div>
      <div className={styles.categoryList}>
        <Link href="/blog?cat=java" className={`${styles.categoryListItem} ${styles.java}`}>Java</Link>
        <Link href="/blog?cat=cpp" className={`${styles.categoryListItem} ${styles.cpp}`}>C++</Link>
        <Link href="/blog?cat=reactjs" className={`${styles.categoryListItem} ${styles.reactjs}`}>ReactJs</Link>
        <Link href="/blog?cat=nextjs" className={`${styles.categoryListItem} ${styles.nextjs}`}>NextJs</Link>
        <Link href="/blog?cat=kotlin" className={`${styles.categoryListItem} ${styles.kotlin}`}>Kotlin</Link>
        <Link href="/blog?cat=nodejs" className={`${styles.categoryListItem} ${styles.nodejs}`}>NodeJs</Link>
        <Link href="/blog?cat=mongodb" className={`${styles.categoryListItem} ${styles.mongodb}`}>MongoDB</Link>
        <Link href="/blog?cat=postgresql" className={`${styles.categoryListItem} ${styles.postgres}`}>PostgreSQL</Link>
        <Link href="/blog?cat=tailwind" className={`${styles.categoryListItem} ${styles.tailwind}`}>Tailwind CSS</Link>
        <Link href="/blog?cat=css" className={`${styles.categoryListItem} ${styles.css}`}>CSS</Link>
      </div>
    </div>
  )
}

export default MenuCategories
