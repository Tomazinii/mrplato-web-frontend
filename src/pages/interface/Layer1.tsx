import React from 'react'
import ButtonTypeRule from '../../component/buttons/ButtonTypeRule'

import styles from './Layer1.module.css'

interface Layer1props {
    buttonActive: string;
    onClick: (id: string) => void;
}

const Layer1: React.FC<Layer1props> = ({buttonActive ,onClick})=>{
  return (
    <div className={styles.containerMaster}>
    <div className={styles.containerLayer1}>
        <ButtonTypeRule id={"0"} text='Hypothesis' onClick={onClick} active={`${buttonActive}`} />
        <ButtonTypeRule id={"1"} text='Inference' onClick={onClick} active={`${buttonActive}`} />
        <ButtonTypeRule id={"2"} text='Equivalence' onClick={onClick} active={`${buttonActive}`} />
        <ButtonTypeRule id={"3"} text='Predicate_In' onClick={onClick} active={`${buttonActive}`} />
        <ButtonTypeRule id={"4"} text='Predicate_Eq' onClick={onClick} active={`${buttonActive}`} />
    </div>
    </div>
  )
}

export default Layer1