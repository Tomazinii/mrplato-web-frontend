import React from 'react'
import { InferenceRule, Rules } from '../../utils/rules'
import ButtonProposition from '../../component/buttons/ButtonProposition'
import styles from './Layer3.module.css'
import ButtonOperation from '../../component/buttons/ButtonOperation'
import ButtonSelect from '../../component/buttons/ButtonSelect'
import InputForm from './InputForm'
import { prove_validation } from '../../validations/interface/InterfaceValidation'


interface Layer3Props {
  selectedRows: Array<string>;
  selectRow: (index: string) => void;
  buttonActiveRule: string;
  openTableSelectForm: boolean;
  selectedRule: string;
  openInputForm: boolean;
  inputTextInputForm: string[];
  questionProposition: {
    list: string[];
    conclusion: string;
  };
  setOpenInputForm: React.Dispatch<React.SetStateAction<boolean>>
  handleFunction: {
    handleProve: ()=>void;
    handleRestart: ()=>void;
    handleOpenTableSelect: ()=>void;
    handleInputTextInputForm: (caracter: string)=>void;
    handleInputTextInputFormClear: ()=>void;
    handleAddhypothesis: ()=>void;
  }
}


const Layer3: React.FC<Layer3Props> = ({selectedRows, selectRow, handleFunction, buttonActiveRule, setOpenInputForm, openTableSelectForm,openInputForm,inputTextInputForm,selectedRule,questionProposition}) => {

  const listRuleForActiveAddButton0 = ["ID09"]
  const listRuleForActiveAddButton = ["ID013","ID014"]
  const listRuleForActiveRemoveButton = ["ID010"]
  const listRuleForActiveReduceButton = ["ID011"]

  const activeAdd0 = listRuleForActiveAddButton0.includes(selectedRule)
  const activeAdd = listRuleForActiveAddButton.includes(selectedRule)
  const activeRemove = listRuleForActiveRemoveButton.includes(selectedRule)
  const activeReduce = listRuleForActiveReduceButton.includes(selectedRule)

  let validate = prove_validation(selectedRule, selectedRows)

  const listPropositionCreated = [
    {text: "p -> q", method: "1 - ADD1"},
    {text: "p -> q", method: "1 - ADD1"},
    {text: "p -> q", method: "1 - ADD1"},
    {text: "p -> q", method: "1 - ADD1"},
    {text: "p -> q", method: "1 - ADD1"},
]

  return (
    <div>
      <div className={styles.containerConclusion}>
        {buttonActiveRule === "3" &&
        <ButtonSelect text='Select' onclick={()=>handleFunction.handleOpenTableSelect()}/>
      }
        { !openInputForm &&
        <div className={styles.conclusion}>
            <p>⊢ {questionProposition && questionProposition.conclusion}</p>
        </div>
        }
        </div>


        { !openTableSelectForm && !openInputForm &&
        <ul className={styles.containerProposition}>


            {questionProposition && questionProposition.list.map((content, index)=>(
            <ButtonProposition questionPropostionDiv={true} color="" setListSelect={selectRow} listSelect={selectedRows} select={""} id={`${index}`} index={`${index}`} method={""} name={content} onClick={()=>{}} type='p' typeActive={false}  />
            ))}


            <hr />
            {listPropositionCreated && questionProposition && listPropositionCreated.map((content, index)=>(
            <ButtonProposition questionPropostionDiv={false} color="" setListSelect={selectRow} listSelect={selectedRows} select={""} id={`${index + questionProposition.list.length}`} index={`${index + questionProposition.list.length}`} method={content.method} name={content.text} onClick={()=>{}} type='p' typeActive={false}  />
            ))}


        </ul>
        }
        {openTableSelectForm && 
        <ul className={styles.containerProposition}>
        {Rules.inference.slice(0, 5).map((content: InferenceRule, index)=>(
            <ButtonProposition questionPropostionDiv={false} color="#33997F" setListSelect={selectRow} listSelect={selectedRows} select={""} id={`${index}`} index={`${index}`} method={content.method} name={content.name} onClick={()=>{}} type='p' typeActive={false}  />
            ))}
        </ul>
        }

        {
          openInputForm ?
          <InputForm setOpenInputForm={setOpenInputForm} handleInputTextInputFormClear={handleFunction.handleInputTextInputFormClear} inputTextInputForm={inputTextInputForm} handleInputTextInputForm={handleFunction.handleInputTextInputForm}/> :
        


        <div className={styles.containerButtonOperation}>`
          { 
            !activeAdd && !activeAdd0 && !activeRemove && !activeReduce &&
            <ButtonOperation disabled={ validate.status ? false : true}  text='PROVE' onclick={()=>{handleFunction.handleProve()}}/>

          }
          {buttonActiveRule === "1" && activeAdd0 &&
            <ButtonOperation disabled={false} text='ADD' onclick={()=>{handleFunction.handleAddhypothesis()}}/>

          }

          {buttonActiveRule === "1" && activeAdd &&
            <ButtonOperation disabled={ validate.status ? false : true} text='ADD' onclick={()=>{handleFunction.handleAddhypothesis()}}/>

          }
          {buttonActiveRule === "1" && activeRemove &&
            <ButtonOperation disabled={false} text='REMOVE' onclick={()=>{handleFunction.handleProve()}}/>

          }
          {buttonActiveRule === "1" && activeReduce &&

            <ButtonOperation disabled={false}  text='REDUCE' onclick={()=>{handleFunction.handleProve()}}/>
          }
            <ButtonOperation disabled={false} text='RESTART' onclick={()=>{handleFunction.handleRestart()}}/>
            <ButtonOperation disabled={false}  text='BACK' onclick={()=>{}}/>
            <ButtonOperation disabled={false} text='NEXT' onclick={()=>{}}/>
        </div>
        }

    </div>
  )
}

export default Layer3