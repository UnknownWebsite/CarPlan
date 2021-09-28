import type { NextPage } from 'next'
import ToggleButton from '../components/ToggleButton'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import TextField from '../components/TextField'

const Home: NextPage = () => {

  return (
    <Layout>
      <div>
        <p className={styles.test}>Test </p>
        <ToggleButton round onChangeToActive={() => console.log("On")} onChangeToInactive={() => console.log("off")} />
        <TextField placeholder="Dolore ipsum et a uno deo" disabled />
      </div>
    </Layout>
  )
}

export default Home
