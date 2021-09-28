import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ToggleButton from '../components/ToggleButton'
import styles from '../styles/Home.module.css'
import Layout from './layout'

const Home: NextPage = () => {

  var theme = "dark";

  return (
    <Layout>
      <div>
        <p className={styles.test}>Test </p>
        <ToggleButton round onChangeToActive={() => console.log("On")} onChangeToInactive={() => console.log("off")} />
      </div>
    </Layout>
  )
}

export default Home
