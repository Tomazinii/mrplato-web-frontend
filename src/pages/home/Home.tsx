import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import MenuButtonHome from '../../component/home/MenuButtonHome'

// @ts-ignore

import content from '../../asset/content.png'
// @ts-ignore

import exercises from '../../asset/exercises.png'
// @ts-ignore

import games from '../../asset/games.png'
// @ts-ignore

import practitioner from '../../asset/practitioner.png'
// @ts-ignore

import challenge from '../../asset/challenge.png'
// @ts-ignore

import tournament from '../../asset/tournament.png'
// @ts-ignore

import animal from '../../asset/animal.png'

function Home() {
  return (
    <div className={styles.containerHome}>

      <h2 className={styles.h}>  Welcome to mrplato, </h2>
      <h4 className={styles.h4}>What are you going to deduce today?</h4>

    <div className={styles.containerBox}>
      <div className={styles.doubleMenu}>
        <MenuButtonHome text='Practitioner' path='' color='#FEC200' colorLoadtotal='#FFF0BE' image={practitioner} load={false} />
        <MenuButtonHome  text='Content' path='' color='#E15E32' colorLoadtotal='#FFD1C2' image={content} load={false}/>
      </div>
      <div style={{marginTop:"60px"}}>
        <div className={styles.doubleMenu}>
          <MenuButtonHome  text='Games' path='' color='#26CCB0' colorLoadtotal='#CBFFF6' image={games} load={true}/>
          <MenuButtonHome  text='Challenges' path='' color='#010101' colorLoadtotal='#828282' image={challenge} load={true}/>
        </div>
        <div className={styles.doubleMenu}>
          <MenuButtonHome  text='Tournament' path='' color='#2637CC' colorLoadtotal='#BCC3FF' image={tournament} load={true}/>
            <MenuButtonHome  text='Exercises' path='/exercises' color='rgb(221, 156, 16)' colorLoadtotal='rgb(243, 206, 127)' image={exercises} load={true}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home