import React, { useState } from 'react'

const App = () => {
  const [birthdate, setBirthDate] = useState('')
  const [luckyNumber, setLuckyNumber] = useState('')
  const [verdict, setVerdict] = useState('')

  function changeBirthDate(e) {
    setBirthDate(e.target.value)
  }
  function changeLuckyNumber(e) {
    setLuckyNumber(e.target.value)
  }
  function checkIfLucky(e) {
    e.preventDefault()
    let b = birthdate.replaceAll('-','')
    b = b.split('')
    let sum = b.reduce((total, curr) => {
      return parseInt(curr)+total
    },0)
    if( sum%luckyNumber === 0 ) {
      setVerdict('lucky')
    } else {
      setVerdict('not lucky')
    }
    
  }
  return (
    <div>
      <form onSubmit={checkIfLucky}>
      <input type='date' value={birthdate} onChange={changeBirthDate} />
      <input type='number' value={luckyNumber} onChange={changeLuckyNumber} />
      <input type='submit' value='check' />
      </form>
      <div>{verdict}</div>
    </div>
  );
}

export default App;
