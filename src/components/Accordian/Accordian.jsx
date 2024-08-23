import React, { useState } from 'react'
import data from "../../data.json"
import style from "./Accordian.module.css"

const Accordian = () => {
    const [singleSelected, setSingleSelected] = useState(null)
    const [multipleSelected, setMultipleSelected] = useState([])
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false)

    let handleSingleSelection = (id) => {
        singleSelected === id
            ? setSingleSelected(null)
            : setSingleSelected(id)
        console.log(singleSelected)
    }

    let handleMultipleSelection = (id) => {
        multipleSelected.includes(id)
            ? setMultipleSelected(multipleSelected.filter((itemId) => itemId !== id))
            : setMultipleSelected([...multipleSelected, id])
        console.log(multipleSelected)
    }

    let handleEnableBtn = () => {
        setEnableMultipleSelection(!enableMultipleSelection)
        console.log(`Multiple Selection : ${enableMultipleSelection}`)
    }

    return (
        <div className={style.accordian}>
            <h1 className={style.heading}>Accordian</h1>
            <button onClick={() => handleEnableBtn()} className={style.enableBtn}><strong>Enable Multiple Selection</strong></button>
            <div>
                {data.map((item) => {
                    return <div key={item.id}>
                        <div className={style.title}>
                            <h3 className={style.question}>{item.question}</h3>
                            <button onClick={enableMultipleSelection
                                ? () => handleMultipleSelection(item.id)
                                : () => handleSingleSelection(item.id)
                            }>+</button>
                        </div>
                        <div className={style.answer}>
                            {
                                enableMultipleSelection
                                    ? multipleSelected.includes(item.id)
                                        ? <p>{item.answer}</p>
                                        : null

                                    : item.id === singleSelected
                                        ? <p>{item.answer}</p>
                                        : null

                            }

                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Accordian
