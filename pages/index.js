import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Head from 'next/head'
import { Button } from 'antd'

const gotoB = () => {
    Router.push({
      pathname: '/b',
      query: {
        id: 2
      }
    }, '/b/2')
}

const Home = () => (
  <div className='container'>
    <Head>
      <title>Home</title>
    </Head>
    <Link href='/a?id=1' as='/a/1'> 
       <Button>toA</Button>
    </Link>
    <Button onClick={gotoB}>toB</Button>
    </div>
)

export default Home
