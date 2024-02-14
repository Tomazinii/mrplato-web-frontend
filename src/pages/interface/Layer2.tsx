import React from 'react'
import ButtonProposition from '../../component/buttons/ButtonProposition'
import { Rules ,InferenceRule, EquivalenceRule, HypothesisRule, PredicateInferenceRule, PredicateEquivalenceRule} from "../../utils/rules";

interface Layer2Props{
  buttonActiveRule: string;
  setSelectedRule: React.Dispatch<React.SetStateAction<number>>;
  selectedRule: number;
  setSelectedRuleIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Layer2: React.FC<Layer2Props> = ({buttonActiveRule, setSelectedRule, selectedRule,setSelectedRuleIndex}) => {
  return (
    <>
    <ul hidden={buttonActiveRule !== "0"}>
        {Rules.hypothesis.map((content: HypothesisRule, index)=>(
        <ButtonProposition handleFuntionSelectRuleIndex={setSelectedRuleIndex} questionPropostionDiv={false} color="" setListSelect={()=>{}} listSelect={[]} id={Number(content.id)} index={`${index}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='default' typeActive={false}  />
        ))}
    </ul>

    <ul hidden={buttonActiveRule !== "1"}>
        {Rules.inference.map((content: InferenceRule, index)=>(
        <ButtonProposition handleFuntionSelectRuleIndex={setSelectedRuleIndex} questionPropostionDiv={false} color="" setListSelect={()=>{}} listSelect={[]} id={Number(content.id)}  index={`${index + 3}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='default' typeActive={false}  />
        ))}
    </ul>
    <ul hidden={buttonActiveRule !== "2"}>
        {Rules.equivalence.map((content: EquivalenceRule, index)=>(
        <ButtonProposition handleFuntionSelectRuleIndex={setSelectedRuleIndex} questionPropostionDiv={false}  color="" setListSelect={()=>{}} listSelect={[]} id={Number(content.id)}  index={`${index}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='default' typeActive={false}  />
        ))}
    </ul>
    <ul hidden={buttonActiveRule !== "3"}>
        {Rules.predicate_inference.map((content: PredicateInferenceRule, index)=>(
        <ButtonProposition handleFuntionSelectRuleIndex={setSelectedRuleIndex} questionPropostionDiv={false}  color="" setListSelect={()=>{}} listSelect={[]} id={Number(content.id)}  index={`${index}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='default' typeActive={false}  />
        ))}
    </ul>
    <ul hidden={buttonActiveRule !== "4"}>
        {Rules.predicate_equivalence.map((content: PredicateEquivalenceRule, index)=>(
        <ButtonProposition handleFuntionSelectRuleIndex={setSelectedRuleIndex} questionPropostionDiv={false}  color="" setListSelect={()=>{}} listSelect={[]} id={Number(content.id)}  index={`${index}`} method={content.method} name={content.name} select={selectedRule} onClick={setSelectedRule} type='default' typeActive={false}  />
        ))}
    </ul>
    
    </>
  )
}

export default Layer2