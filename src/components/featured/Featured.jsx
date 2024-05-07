import React from 'react'
import styles from './featured.module.css'
import Image from "next/image"
import Link from 'next/link'

const Featured = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Empowering Tomorrow's Innovators Today: Explore, Learn, and Conquer with Our Tech-Savvy Blog Platform!
      </h1>
      <div className={styles.post}>
        <div className={styles.floating}></div>
        <div className={styles.imgContainer}>
           <Image src="/featured_react_2.png" className={styles.image} alt="Image" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>"Mastering ReactJS: Unleash the Power of Component-Based UI Development!"</h1>
          <p className={styles.postDesc}>ReactJS offers numerous benefits for modern web development. Its component-based architecture fosters code reusability, simplifying maintenance and enhancing scalability. Virtual DOM enables efficient updates, boosting performance. JSX syntax facilitates the creation of dynamic and intuitive UIs, enhancing developer productivity. React's strong ecosystem, supported by a vast community and comprehensive documentation, empowers developers to build robust, feature-rich applications with ease, making it a top choice for frontend development.</p>
          {/* <button className={styles.button}>Read More!</button> */}
          <Link className={styles.button} href={"/posts/tanish-bhai"} >Read More!</Link>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Featured