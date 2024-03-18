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
import { restart_session } from '../../api/Session.api'
import { useNavigate } from 'react-router-dom'


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

  const listRuleForActiveAddButton0 = [5000]
  const listRuleForActiveAddButton = [1001,1002]
  const listRuleForActiveRemoveButton = [5001]
  const listRuleForActiveReduceButton = [5002]
  const buttonActiveRuleList = ["2","3","4"]

  const activeAdd0 = listRuleForActiveAddButton0.includes(selectedRule)
  const activeAdd = listRuleForActiveAddButton.includes(selectedRule)
  const activeRemove = listRuleForActiveRemoveButton.includes(selectedRule)
  const activeReduce = listRuleForActiveReduceButton.includes(selectedRule)
  const buttonActiveRuleStatus = buttonActiveRuleList.includes(buttonActiveRule)

  let validate = prove_validation(String(selectedRule), selectedRows)

    

  const size_proposotion =  stateMrplato.info_exercise && stateMrplato.info_exercise.premisses.length
  
  const navigate = useNavigate()
  let listid = localStorage.getItem("LISTID")
  let questionid = Number(localStorage.getItem("idQuestion")) + 1

  return (
    <div>
      <div className={styles.containerConclusion}>

        { !openInputForm &&
        <div className={styles.conclusion}>
            <p>⊢ {stateMrplato.info_exercise && stateMrplato.info_exercise.conclusion}</p>
        </div>
        }
        </div>


        { !openTableSelectForm && !openInputForm &&
        <ul className={styles.containerProposition}>


            {stateMrplato.info_exercise && stateMrplato.info_exercise.premisses.map((element: {content: string, methods_used_info: string, type:string }, index:number)=>(
            <ButtonProposition handleFuntionSelectRuleIndex={()=>{}} questionPropostionDiv={true} color="" setListSelect={selectRow} listSelect={selectedRows} select={""} id={index} index={`${index}`} method={""} name={element.content} onClick={()=>{}} type='default' typeActive={false}  />
            ))}
            <hr />
            {stateMrplato.lines_list && stateMrplato.lines_list.map((element: {content: string, methods_used_info: string, type:string }, index:number)=>(<>{element.methods_used_info !== "P" &&
            <ButtonProposition handleFuntionSelectRuleIndex={()=>{}} questionPropostionDiv={false} color="" setListSelect={selectRow} listSelect={selectedRows} select={""} id={index + size_proposotion} index={`${index + size_proposotion}`} method={element.methods_used_info} name={element.content} onClick={()=>{}} type={element.type} typeActive={false}  />
            }</>
            ))}


        </ul>
        }
        {openTableSelectForm && 
        <ul className={styles.containerProposition}>
        {stateMrplato.get_selected_options && stateMrplato.get_selected_options.map((element: {content: string, methods_used_info: string, type:string }, index: number)=>(
            <ButtonProposition handleFuntionSelectRuleIndex={()=>{}} is_selected_form={true} questionPropostionDiv={false} color="#33997F" setListSelect={()=>{}} listSelect={selectedRows} select={""} id={index + 1000} index={`${index}`} method={""} name={element.content} onClick={(e)=>{handleFunction.handleSelectFormFunction(e);
            }} type='default' typeActive={false}  />
            ))}
        </ul>
        }

        {
          openInputForm ? 
          <InputForm handleAdd={handleFunction.handleAddhypothesisOnlyAdd} setOpenInputForm={setOpenInputForm} handleInputTextInputFormClear={handleFunction.handleInputTextInputFormClear} inputTextInputForm={inputTextInputForm} handleInputTextInputForm={handleFunction.handleInputTextInputForm}/> 
          :
        

        <div className={styles.containerButtonOperation}>
          <div className={styles.containerButtonOperationGroup}>
          { 
            !activeAdd && !activeAdd0 && !activeRemove && !activeReduce && !buttonActiveRuleStatus &&
            <ButtonOperation disabled={ validate.status ? false : true}  text='PROVE' onclick={()=>{handleFunction.handleProve()}}/>

          }

          { 
            !activeAdd && !activeAdd0 && !activeRemove && !activeReduce &&  buttonActiveRuleStatus &&
            <ButtonOperation disabled={ validate.status ? false : true}  text='SELECT' onclick={()=>{handleFunction.handleOpenTableSelect()}}/>

          }
          {buttonActiveRule === "0" && activeAdd0 &&
            <ButtonOperation disabled={false} text='ADD' onclick={()=>{handleFunction.handleAddhypothesis()}}/>

          }

          {buttonActiveRule === "1" && activeAdd &&
            <ButtonOperation disabled={ validate.status ? false : true} text='ADD' onclick={()=>{handleFunction.handleAddhypothesis()}}/>

          }
          {buttonActiveRule === "0" && activeRemove &&
            <ButtonOperation disabled={false} text='REMOVE' onclick={()=>{handleFunction.handleProve()}}/>

          }
          {buttonActiveRule === "0" && activeReduce &&

            <ButtonOperation disabled={false}  text='REDUCE' onclick={()=>{handleFunction.handleProve()}}/>
          }
            <ButtonOperation disabled={false} text='RESTART' onclick={()=>{
              handleFunction.handleRestart()
              restart_session()
              dispatchMrplato({type:RESET_LIST_NEW_LINES})}}/>
            <ButtonOperation disabled={false}  text='BACK' onclick={()=>{dispatchMrplato({type:REMOVE_LAST_LINE_FROM_LIST})}}/>
            <ButtonOperation disabled={false} text='NEXT' onclick={()=>{
              handleFunction.handleRestart()
              restart_session()
              dispatchMrplato({type:RESET_LIST_NEW_LINES})
              navigate(`/exercises/${listid}/${questionid}`)

            }}/>

            </div>
        </div>
        }

    </div>
  )
}

export default Layer3