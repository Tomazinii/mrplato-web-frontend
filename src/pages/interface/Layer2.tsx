import React from 'react'
import ButtonProposition from '../../component/buttons/ButtonProposition'
import { Rules ,InferenceRule, PredicateRule, EquivalenceRule} from "../../utils/rules";

interface Layer2Props{
  buttonActiveRule: string;
  setSelectedRule: React.Dispatch<React.SetStateAction<string>>;
  selectedRule: string;
}

const Layer2: React.FC<Layer2Props> = ({buttonActiveRule, setSelectedRule, selectedRule}) => {
  return (
    <>
    <ul hidden={buttonActiveRule !== "1"}>
        {Rules.inference.map((content: InferenceRule, index)=>(
        <ButtonProposition questionPropostionDiv={false} color="" setListSelect={()=>{}} listSelect={[""]} id={content.id} index={`${index}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='p' typeActive={false}  />
        ))}
    </ul>

    <ul hidden={buttonActiveRule !== "2"}>
        {Rules.predicate.map((content: PredicateRule, index)=>(
        <ButtonProposition questionPropostionDiv={false} color="" setListSelect={()=>{}} listSelect={[""]} id={content.id}  index={`${index}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='p' typeActive={false}  />
        ))}
    </ul>
    <ul hidden={buttonActiveRule !== "3"}>
        {Rules.equivalence.map((content: EquivalenceRule, index)=>(
        <ButtonProposition questionPropostionDiv={false}  color="" setListSelect={()=>{}} listSelect={[""]} id={content.id}  index={`${index}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='p' typeActive={false}  />
        ))}
    </ul>
    </>
  )
}

export default Layer2