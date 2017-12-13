import React from 'react'
import styles from './App.css'
import Card from './Card/Card'

const cards = [
  { name: 'Jay Z', avatar: 'jayZ', timestamp: '1h', image: 'http://placebeyonce.com/608-608'},
  { name: 'Beyonce', avatar: 'beyonce', timestamp: '2h', image: 'http://placebeyonce.com/608-608'},
  { name: 'Janelle', avatar: 'janelle', timestamp: '3h', image: 'http://placebeyonce.com/608-608'},
]

const App = () =>

  <div className={styles.appContainer}>
    <div className={styles.mainField}>
      <h1 className={styles.header}>Instagram Cards</h1>
      {cards.map((card, index) => {
        return <Card key={index} {...card} />
      })}
    </div>
  </div>

export default App
