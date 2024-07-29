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
        <Link href="/blogs?cat=mern" className={`${styles.categoryListItem} ${styles.cpp}`}>MERN</Link>
        <Link href="/blogs?cat=django" className={`${styles.categoryListItem} ${styles.nodejs}`}>Django</Link>
        <Link href="/blogs?cat=devops" className={`${styles.categoryListItem} ${styles.kotlin}`}>DevOps</Link>
        <Link href="/blogs?cat=seo" className={`${styles.categoryListItem} ${styles.java}`}>SEO</Link>
        <Link href="/blogs?cat=angular" className={`${styles.categoryListItem} ${styles.css}`}>Angular</Link>
        <Link href="/blogs?cat=flutter" className={`${styles.categoryListItem} ${styles.reactjs}`}>Flutter</Link>
        <Link href="/blogs?cat=flask" className={`${styles.categoryListItem} ${styles.mongodb}`}>Flask</Link>
        <Link href="/blogs?cat=html" className={`${styles.categoryListItem} ${styles.postgres}`}>HTML</Link>
        <Link href="/blogs?cat=prisma" className={`${styles.categoryListItem} ${styles.nextjs}`}>Prisma</Link>
        <Link href="/blogs?cat=mongoose" className={`${styles.categoryListItem} ${styles.tailwind}`}>Mongoose</Link>
        <Link href="/blogs?cat=bootstrap" className={`${styles.categoryListItem} ${styles.reactjs}`}>Bootstrap</Link>
      </div>
    </div>
  )
}

export default MenuCategories
