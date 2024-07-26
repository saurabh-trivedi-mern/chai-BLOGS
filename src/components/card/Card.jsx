import React from 'react'
import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        {item.img && (
          <div className={styles.imgContainer}>
          <Image src={item.img} alt='image' fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
            <Link href={`/posts/${item.slug}`} >
                <h2 className={styles.heading}>{item.title}</h2>
            </Link>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt.substring(0, 10)} -{" "}</span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <p className={styles.desc}>{item.desc.substring(0, 250)}</p>
            <Link href={`/posts/${item.slug}`} className={styles.link}>Read More...</Link>
        </div>
    </div>
  )
}

export default Card
