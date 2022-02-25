import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <title>Carbin Ltd.</title>
        <meta
          name="description"
          content="Karbon ve grafit ürünleri tedariği."
        />
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>

    </div>
  )
}