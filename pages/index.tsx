import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import OTPInput from '../components/OTPInput'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);
  return (
    <>
      <Head>
        <title>OTP Input</title>
        <meta name="description" content="OTP Input" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Next Typescript OTP Input</h2>
        <OTPInput value={otp} valueLength={6} onChange={onChange} />
      </main>
    </>
  )
}
