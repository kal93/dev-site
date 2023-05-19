import Image from 'next/image'
import { Inter } from '@next/font/google'
import '@/styles/global.css';
import styles from '@/styles/home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <div><h1>Hi, My name is John Doe! </h1>
        </div>
        <div>
          <Link href="/blog">Check out my blog</Link>
        </div>
        <div>
          <Link href="/contact">Contact Me</Link>
        </div>
      </div>
    </div>
  )
}
