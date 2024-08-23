import React from 'react'
import SingleAcc from './components/SingleAcc/SingleAcc'
import MultipleAcc from './components/MultipleAcc/MultipleAcc'
import Accordian from './components/Accordian/Accordian'
import style from "./App.module.css"

const App = () => {
  return (
    <div className={style.parent}>
      {/* <h1>Single Accordian</h1>
      <SingleAcc />
      <hr />
      <h1>Multiple Accordian</h1>
      <MultipleAcc /> */}
      <Accordian/>
    </div>
  )
}

export default App
