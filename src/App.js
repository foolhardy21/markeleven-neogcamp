import React, { useState } from 'react'
import styles from './App.module.css'

const App = () => {
  const [birthdate, setBirthDate] = useState('')
  const [luckyNumber, setLuckyNumber] = useState('')
  const [verdict, setVerdict] = useState('')

  const changeBirthDate = e => {
    setBirthDate(e.target.value)
  }
  const changeLuckyNumber = e => {
    setLuckyNumber(e.target.value)
  }
  const checkIfLucky = e => {
    e.preventDefault()
    if (!birthdate || !luckyNumber) {
      setVerdict('Enter all details')
    } else {
      let b = birthdate.replaceAll('-','')
      b = b.split('')
      let sum = b.reduce((total, curr) => {
        return parseInt(curr)+total
      },0)
       sum%luckyNumber === 0 ? setVerdict('lucky') : setVerdict('not lucky')
    }
  }
  return (
    <div>
      <h3>is your birthday lucky?</h3>
      <form className={styles.form_div} onSubmit={checkIfLucky}>
        <label htmlFor='dobinput'>date of birth</label>
        <input type='date' name='dobinput' value={birthdate} onChange={changeBirthDate} />
        <label htmlFor='luckynoinput'>lucky number</label>
        <input type='number' name='luckynoinput' value={luckyNumber} onChange={changeLuckyNumber} />
        <input type='submit' value='check' />
      </form>
      <div className={styles.verdict_div}>{verdict}</div>
    </div>
  );
}

export default App;
