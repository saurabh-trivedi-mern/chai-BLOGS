import React from 'react'
import styles from "./menuCategories.module.css"
import Link from "next/link"

const MenuCategories = () => {
  return (
    <div>
      <div className={styles.categoryList}>
        <Link href="/blogs?cat=java" className={`${styles.categoryListItem} ${styles.java}`}>Java</Link>
        <Link href="/blogs?cat=cpp" className={`${styles.categoryListItem} ${styles.cpp}`}>C++</Link>
        <Link href="/blogs?cat=reactjs" className={`${styles.categoryListItem} ${styles.reactjs}`}>ReactJs</Link>
        <Link href="/blogs?cat=nextjs" className={`${styles.categoryListItem} ${styles.nextjs}`}>NextJs</Link>
        <Link href="/blogs?cat=kotlin" className={`${styles.categoryListItem} ${styles.kotlin}`}>Kotlin</Link>
        <Link href="/blogs?cat=nodejs" className={`${styles.categoryListItem} ${styles.nodejs}`}>NodeJs</Link>
        <Link href="/blogs?cat=mongodb" className={`${styles.categoryListItem} ${styles.mongodb}`}>MongoDB</Link>
        <Link href="/blogs?cat=postgresql" className={`${styles.categoryListItem} ${styles.postgres}`}>PostgreSQL</Link>
        <Link href="/blogs?cat=tailwind" className={`${styles.categoryListItem} ${styles.tailwind}`}>Tailwind CSS</Link>
        <Link href="/blogs?cat=css" className={`${styles.categoryListItem} ${styles.css}`}>CSS</Link>
      </div>
    </div>
  )
}

export default MenuCategories
