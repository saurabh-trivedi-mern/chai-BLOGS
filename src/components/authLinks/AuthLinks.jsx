"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import styles from './authLinks.module.css'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {

  const [open, setOpen] = useState(false);

  const {status} = useSession();

  return (
    <>
    {status === "unauthenticated" ? 
     (<Link href="/login" className={styles.link}>Login</Link>) : 
     (<>
      <Link href="/write" className={styles.link}>Write</Link>
      <span className={styles.logout} onClick={signOut}>Logout</span>
     </>)
    }
    <div className={styles.burger} onClick={()=> setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <h2 className={styles.color}>DASHBOARD</h2>
        <Link href="/">Home</Link>
        <Link href="/creator">Creator</Link>
        <Link href="/contact">Contact</Link>
        {status==="notauthenticated" ? 
          (<Link href="/login">Login</Link>) : 
          (<>
            <Link href="/write">Write</Link>
            <span className={styles.logout}>Logout</span>
          </>)
        }
      </div>
    )}
    </>
  )
}

export default AuthLinks
