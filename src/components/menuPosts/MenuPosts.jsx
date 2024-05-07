import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./menuposts.module.css"

const MenuPosts = ({withImage}) => {
  return (
    <div>
        <div className={styles.items}>
          <Link href="/" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>10/03/2024</span>
                </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>10/03/2024</span>
                </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.food}`}>Food</span>
                <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>10/03/2024</span>
                </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.coding}`}>Coding</span>
                <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>10/03/2024</span>
                </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>10/03/2024</span>
                </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
              </div>}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.style}`}>Style</span>
                <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>10/03/2024</span>
                </div>
              </div>
          </Link>
        </div>
    </div>
  )
}

export default MenuPosts
