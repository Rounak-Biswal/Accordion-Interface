import React, { useState } from 'react'
import data from "../../data.json"
import style from "./SingleAcc.module.css"

const SingleAcc = () => {
    const [selected, setSelected] = useState(null)

    let handleClick = (id) => {
        // let elementSelected = data.filter((item) => item.id === id)
        // console.log(elementSelected[0].answer)
        selected === id
            ? setSelected(null)
            : setSelected(id)
    }

    return (
        <div className={style.singleAcc}>
            {
                data.map((item) => {
                    return <div key={item.id}>
                        <h3 className={style.title}>{item.question}</h3>
                        <span onClick={() => handleClick(item.id)} className={style.showBtn}>+</span>
                        <div>
                            {
                                item.id === selected
                                    ? <div>{item.answer}</div>
                                    : null
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default SingleAcc