import type { NextPage } from 'next'
import ToggleButton from '../components/ToggleButton'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import TextField from '../components/TextField'

import { useState } from 'react'
import Label from '../components/label'

const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useState(false);


  return (
    <Layout darkMode={darkMode}>
      <div>
        <p className={styles.test}>Test </p>
        <ToggleButton round onChange={(state) => setDarkMode(!state)} />
        <TextField placeholder="Dolore ipsum et a uno deo" />
        <Label text="Hello World" />

      </div>
    </Layout>
  )
}

export default Home
