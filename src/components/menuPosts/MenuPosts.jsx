import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./menuposts.module.css"

const MenuPosts = ({withImage}) => {
  return (
    <div>
        <div className={styles.items}>
          <Link href="posts/why-to-use-nodejs-over-django45945725710084" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/nodevsdjango.png" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.nodejs}`}>NodeJs</span>
                <h3 className={styles.postTitle}>Why to use NodeJs over Django?</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Saurabh Trivedi</span>
                  <span className={styles.date}>29/07/2024</span>
                </div>
              </div>
          </Link>

          <Link href="posts/give-some-tips-to-improve-writing-css241619506806239" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/css.png" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.css}`}>CSS</span>
                <h3 className={styles.postTitle}>Give some tips to improve writing CSS?</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Saurabh Trivedi</span>
                  <span className={styles.date}>30/07/2024</span>
                </div>
              </div>
          </Link>

          <Link href="posts/why-to-use-java-for-high-level-web-projects473379883696402" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/java.png" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.java}`}>Java</span>
                <h3 className={styles.postTitle}>Why to use Java for high level web projects?</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Saurabh Trivedi</span>
                  <span className={styles.date}>28/07/2024</span>
                </div>
              </div>
          </Link>

          <Link href="posts/why-is-flutter-so-popular577774309007950" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/flutter.png" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.flutter}`}>Flutter</span>
                <h3 className={styles.postTitle}>Why is Flutter so Popular?</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Saurabh Trivedi</span>
                  <span className={styles.date}>30/07/2024</span>
                </div>
              </div>
          </Link>
        </div>
    </div>
  )
}

export default MenuPosts
