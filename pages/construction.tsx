import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/layout';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>kienankb</title>
        <meta property="og:title" content="kienankb" key="title" />
        <meta name="description" content="He's just zis guy, you know" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='constructionContainer'>
        <div className='constructionDomTitle'>⚠️hardhat required⚠️</div>
        <div className='constructionSubtitle'>this website is under construction.</div>
        <div className='constructionSubtitle'>keep hands and feet inside the browser window at all times.</div>
        <div className='constructionSubSubtitle'>interested in tracking my progress or silently/loudly judging my code? check it out <a href='https://github.com/kienankb/website'>on github</a>.</div>
        <div className='constructionSubSubSubtitle'>please judge it silently.</div>
      </div>
    </div>
  )
}

export default Home
