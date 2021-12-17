import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {getAllPostData} from '../lib/posts'

export default function Home({allPosts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Next App</title>
        <meta name="description" content="First time trying out Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heading}>
        <div className={styles.imageContainer}>
          <Image className={styles.profile} src="/images/profile.jpg" width={200} height={200} alt="Profile"/>
        </div>
        
        <h1>Samuel Yeebiyo</h1>
        <p id={styles.description}>This is a short description of myself for this blog, I don't really have much to say.</p>

      </div>
        <h2>Blog</h2>
        {/* <Link href="/posts/post1">
          <a>First Blog</a>
        </Link> */}
        {allPosts.map((item,index)=>{
          return <Link href={`/posts/${item.id}`}><a>
            <div>
              <p>{item.date}</p>
            </div>
          </a></Link>
        })

        }
      
      
    </div>
  )
}

export async function getStaticProps(){
  const allPosts = getAllPostData()

  return{
    props:{
      allPosts
    }
  }
}