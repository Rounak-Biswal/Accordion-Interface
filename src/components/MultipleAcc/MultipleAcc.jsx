import React, { useState } from 'react'
import data from "../../data.json"
import style from "./MultipleAcc.module.css"

const MultipleAcc = () => {
  const [multipleSelected, setMultipleSelected] = useState([])
  let handleClick = (id) => {
    if (multipleSelected.includes(id)) {
      let updatedSelection = multipleSelected.filter((itemId) => itemId !== id)
      setMultipleSelected(updatedSelection)
    }
    else {
      setMultipleSelected([...multipleSelected, id])
    }
  }

  return (
    <div className={style.multiAcc}>
      {
        data.map((item) => {
          return (
            <div key={item.id}>
              <h3 className={style.title}>{item.question}</h3>
              <span onClick={() => handleClick(item.id)} className={style.showBtn}>+</span>
              {
                multipleSelected.includes(item.id)
                  ? <p>{item.answer}</p>
                  : null
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default MultipleAcc
