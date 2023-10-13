import React from 'react'
import ButtonTypeRule from '../../component/buttons/ButtonTypeRule'

import styles from './Layer1.module.css'

interface Layer1props {
    buttonActive: string;
    onClick: (id: string) => void;
}

const Layer1: React.FC<Layer1props> = ({buttonActive ,onClick})=>{
  return (
    <div className={styles.containerLayer1}>
        <ButtonTypeRule id={"1"} text='Inference' onClick={onClick} active={`${buttonActive}`} />
        <ButtonTypeRule id={"2"} text='Predicate' onClick={onClick} active={`${buttonActive}`} />
        <ButtonTypeRule id={"3"} text='Equivalence' onClick={onClick} active={`${buttonActive}`} />
    </div>
  )
}

export default Layer1