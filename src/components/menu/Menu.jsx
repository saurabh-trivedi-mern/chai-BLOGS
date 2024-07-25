import React from 'react'
import styles from "./menu.module.css"
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>

      {/*More Genres*/}
      <h2 className={styles.subtitle}>Discover The Best</h2>
      <h1 className={styles.genresTitle}>More Categories!</h1>
      <MenuCategories />

      {/* Trending Blogs  */}
      <h2 className={styles.subtitle}>{"It's Trending"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true}/>
        
   </div>
  )
}

export default Menu
