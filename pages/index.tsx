import type { NextPage } from 'next'
import ToggleButton from '../components/ToggleButton'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import TextField from '../components/TextField'
import Label from '../components/label'

import { useState } from 'react'
import Scaffold from '../components/Scaffold'
import ScaffoldElement from '../components/ScaffoldElement'
import ScaffoldCollapse from '../components/ScaffoldCollapse'

const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useState(false);


  return (
    <Layout darkMode={darkMode}>
      <div>
        <p className={styles.test}>Test </p>
        <TextField placeholder="Dolore ipsum et a uno deo" />
        <Label text="Hello World" />
        <Scaffold>
          <ScaffoldElement label="Dark Mode"><ToggleButton round onChange={(state) => setDarkMode(!state)} /></ScaffoldElement>
          <ScaffoldCollapse label="Test">
            <Label text="Nope"/>
          </ScaffoldCollapse>
        </Scaffold>

      </div>
    </Layout>
  )
}

export default Home
