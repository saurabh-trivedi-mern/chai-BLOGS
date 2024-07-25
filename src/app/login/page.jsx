"use client"

import React from 'react'
import styles from  "./login.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

  const {data, status} = useSession();
  // console.log(data, status);

  const router = useRouter();

  if(status === "loading"){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status === "authenticated"){
    router.push("/");
  }

  return (
    <div>
      <div className={styles.container}>
      <h4>USER LOGIN</h4>
      <div className={styles.wrapper}>
      <div className={styles.optionBtn} onClick={()=>signIn("google")}>Sign in with Google</div>
      <div className={styles.optionBtn} onClick={()=>signIn("google")}>Sign in with Github</div>
      <div className={styles.optionBtn} onClick={()=>signIn("google")}>Sign in with LinkedIn</div>
      </div>
      </div>
    </div>
  )
}

export default LoginPage
