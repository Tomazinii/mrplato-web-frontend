import React, { useContext } from 'react'
import { InferenceRule, Rules } from '../../utils/rules'
import ButtonProposition from '../../component/buttons/ButtonProposition'
import styles from './Layer3.module.css'
import ButtonOperation from '../../component/buttons/ButtonOperation'
import ButtonSelect from '../../component/buttons/ButtonSelect'
import InputForm from './InputForm'
import { prove_validation } from '../../validations/interface/InterfaceValidation'
import { ContextMrplato } from '../../context/ContextMrplato'
import { REMOVE_LAST_LINE_FROM_LIST, RESET_LIST_NEW_LINES } from '../../api/types'


interface Layer3Props {
  selectedRows: Array<number>;
  selectRow: (index: number) => void;
  buttonActiveRule: string;
  openTableSelectForm: boolean;
  selectedRule: number;
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
    handleSelectFormFunction: (e: any)=>void;
    handleAddhypothesisOnlyAdd: ()=>void;
    handleaddHypothesisRuleFunction: ()=>void;
    handleRemoveHypothesisFunction: ()=>void;
    handleReduceAbsurdeFunction: ()=>void;
  }
}


const Layer3: React.FC<Layer3Props> = ({selectedRows, selectRow, handleFunction, buttonActiveRule, setOpenInputForm, openTableSelectForm,openInputForm,inputTextInputForm,selectedRule,questionProposition}) => {

  const context = useContext(ContextMrplato);
  const { stateMrplato, dispatchMrplato } = context || {};

  const listRuleForActiveAddButton0 = [1008]
  const listRuleForActiveAddButton = [1012,1013]
  const listRuleForActiveRemoveButton = [1009]
  const listRuleForActiveReduceButton = [1010]


  const activeAdd0 = listRuleForActiveAddButton0.includes(selectedRule)
  const activeAdd = listRuleForActiveAddButton.includes(selectedRule)
  const activeRemove = listRuleForActiveRemoveButton.includes(selectedRule)
  const activeReduce = listRuleForActiveReduceButton.includes(selectedRule)

  let validate = prove_validation(String(selectedRule), selectedRows)


  

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
            <ButtonProposition handleFuntionSelectRuleIndex={()=>{}} questionPropostionDiv={true} color="" setListSelect={selectRow} listSelect={selectedRows} select={""} id={index} index={`${index}`} method={""} name={content} onClick={()=>{}} type='default' typeActive={false}  />
            ))}


            <hr />
            {stateMrplato.new_lines_list && questionProposition && stateMrplato.new_lines_list.map((element: {content: string, methods_used_info: string, type:string }, index:number)=>(
            <ButtonProposition handleFuntionSelectRuleIndex={()=>{}} questionPropostionDiv={false} color="" setListSelect={selectRow} listSelect={selectedRows} select={""} id={index + questionProposition.list.length} index={`${index + questionProposition.list.length}`} method={element.methods_used_info} name={element.content} onClick={()=>{}} type={element.type} typeActive={false}  />
            ))}


        </ul>
        }
        {openTableSelectForm && 
        <ul className={styles.containerProposition}>
        {stateMrplato.get_selected_options && stateMrplato.get_selected_options.map((element: {content: string, methods_used_info: string, type:string }, index: number)=>(
            <ButtonProposition handleFuntionSelectRuleIndex={()=>{}} is_selected_form={true} questionPropostionDiv={false} color="#33997F" setListSelect={selectRow} listSelect={selectedRows} select={""} id={index + 1000} index={`${index}`} method={""} name={element.content} onClick={(e)=>{handleFunction.handleSelectFormFunction(e);
            }} type='default' typeActive={false}  />
            ))}
        </ul>
        }

        {
          openInputForm ? activeAdd0 ?

          <InputForm handleAdd={handleFunction.handleAddhypothesisOnlyAdd} setOpenInputForm={setOpenInputForm} handleInputTextInputFormClear={handleFunction.handleInputTextInputFormClear} inputTextInputForm={inputTextInputForm} handleInputTextInputForm={handleFunction.handleInputTextInputForm}/> :

          <InputForm handleAdd={handleFunction.handleaddHypothesisRuleFunction} setOpenInputForm={setOpenInputForm} handleInputTextInputFormClear={handleFunction.handleInputTextInputFormClear} inputTextInputForm={inputTextInputForm} handleInputTextInputForm={handleFunction.handleInputTextInputForm}/> 
          :
        

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
            <ButtonOperation disabled={false} text='REMOVE' onclick={()=>{handleFunction.handleRemoveHypothesisFunction()}}/>

          }
          {buttonActiveRule === "1" && activeReduce &&

            <ButtonOperation disabled={false}  text='REDUCE' onclick={()=>{handleFunction.handleReduceAbsurdeFunction()}}/>
          }
            <ButtonOperation disabled={false} text='RESTART' onclick={()=>{
              handleFunction.handleRestart()
              dispatchMrplato({type:RESET_LIST_NEW_LINES})}}/>
            <ButtonOperation disabled={false}  text='BACK' onclick={()=>{dispatchMrplato({type:REMOVE_LAST_LINE_FROM_LIST})}}/>
            <ButtonOperation disabled={false} text='NEXT' onclick={()=>{}}/>
        </div>
        }

    </div>
  )
}

export default Layer3