import React from 'react'
import styles from './featured.module.css'
import Image from "next/image"
import Link from 'next/link'

const Featured = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Empowering Tomorrow&apos;s Innovators Today: Explore, Learn, and Conquer with Our Tech-Savy Blog Platform!
      </h1>
      <div className={styles.post}>
        <div className={styles.floating}></div>
        <div className={styles.imgContainer}>
           <Image src="/featured_react_2.png" className={styles.image} alt="Image" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>&quot;Mastering ReactJS: Unleash the Power of Component-Based UI Development!&quot;</h1>
          <p className={styles.postDesc}>ReactJS offers numerous benefits for modern web development. 
            Its component-based architecture fosters code reusability, simplifying maintenance and enhancing scalability. 
            Virtual DOM enables efficient updates, boosting performance. 
            JSX syntax facilitates the creation of dynamic and intuitive UIs, enhancing developer productivity. 
            React&apos;s strong ecosystem, supported by a vast community and comprehensive documentation, empowers 
            developers to build robust, feature-rich applications with ease, making it a top choice for frontend development.</p>          
            <Link className={styles.button} href={"posts/mastering-reactjs-unleash-the-power-of-component-based-ui-development526949731677726"}>Read More!</Link>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Featured
