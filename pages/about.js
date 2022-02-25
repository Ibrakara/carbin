import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'


export default function About() {
  return (
    <div>
      <main>
        <div>About</div>
        <h1 className="title">
          Learn <Link href="/">Home page</Link>
        </h1>
      </main>
    </div>
  )
}
