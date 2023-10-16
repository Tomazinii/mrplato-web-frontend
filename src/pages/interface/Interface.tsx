import React, { useContext } from 'react'
import styles from './Interface.module.css';
import ButtonBack from '../../component/buttons/ButtonBack';
import Layer1 from './Layer1';
import Layer2 from './Layer2';
import Layer3 from './Layer3';
import Alert from './Alert';
import { addHypothesisOnlyAddFunction, addHypothesisRuleFunction, FeedBackAlerteInterface, openSelectFormsProps, openTableSelectFormFunction, prove, ProveProps, reduceAbsurdeFunction, removeHypothesisFunction, restart, selectFormFunction, selectFormsProps} from '../../utils/Interface/InterfaceFuntions';
import FeedBack from './FeedBack';
import TrasformList from '../../utils/transform';
import { ContextMrplato } from '../../context/ContextMrplato';
import { selected_form, SelectFormProps } from '../../api/Mrplato.api';
import { SET_LIST_PROPOSITONS } from '../../api/types';


interface IntrefaceProps {
  dataQuestion: {
    id: string;
    text: string;
  }
}


const Interface: React.FC<IntrefaceProps> = ({dataQuestion}) => {
  
  const [buttonActiveRule, setButonActiveRule] = React.useState("1")
  const [selectedRule, setSelectedRule] = React.useState<any>()
  const [selectedRows, setSelectedRows] = React.useState<any>([])
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messageAlert, setMessageAlert] = React.useState("");
  const [feedbackTypeAlert, setFeedbackTypeAlert] = React.useState("");
  const [feedbackMessageAlert, setFeedbackMessageAlert] = React.useState("")
  const [openFeedbackAlert, setOpenFeedbackAlert] = React.useState(false)
  const [openTableSelectForm, setOpenTableSelectForm] = React.useState(false)
  const [openInputForm, setOpenInputForm] = React.useState(false)
  const [inputTextInputForm, setInputTextInputForm] = React.useState<any>([])
  const [questionProposition, setQuestionProposition] = React.useState<any>()
  const [optionSelectedForm, setOptionSelectedForm] = React.useState<any>()

  const context = useContext(ContextMrplato);
  const { stateMrplato, dispatchMrplato } = context || {};

  const selectRow = (index: number) => {
    if(selectedRows.includes(index)){
      setSelectedRows(selectedRows.filter((item:any) => item !== index))
    }else{
      setSelectedRows([...selectedRows, index])
    }
  }

  const openInputFormContainer = () =>{
    setOpenInputForm(true)

  }

  

  const handleAddhypothesis = () => {
      openInputFormContainer()
  }

  const handleInputTextInputForm = (caracter: any)=> {
    setInputTextInputForm([...inputTextInputForm, caracter])
  
  }

  const handleInputTextInputFormClear = ()=> {
      const newList = [...inputTextInputForm];
      newList.pop();
      setInputTextInputForm([...newList])
    
  
  }

  const handleOpenTableSelect = ()=>{
    const props: openSelectFormsProps = {
      selectedRule: selectedRule,
      selectedRows: selectedRows,
      setOpenAlert: setOpenAlert,
      setMessageAlert: setMessageAlert,
      setOpenTableSelectForm: setOpenTableSelectForm,
    }
    if(openTableSelectForm){
      setOpenTableSelectForm(false)
    }else{
    openTableSelectFormFunction(props, dispatchMrplato)
  }
  }


  const handleSelectFormFunction = (e: any) => {
    const props: selectFormsProps = {
      selectedRule: selectedRule,
      selectedRows: selectedRows,
      setOpenAlert: setOpenAlert, 
      setMessageAlert: setMessageAlert, 
      setSelectedRows: setSelectedRows, 
      setSelectedRule: setSelectedRule, 
      setFeedbackTypeAlert: setFeedbackTypeAlert, 
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert: setOpenFeedbackAlert,
      setOpenTableSelectForm: setOpenTableSelectForm
    }
    setOptionSelectedForm(e)
    selectFormFunction(props, dispatchMrplato)
    setOpenTableSelectForm(false)
    

  }

  const handleProve = ()=>{
    const props: ProveProps = {
      selectedRule: selectedRule,
      selectedRows: selectedRows,
      setOpenAlert: setOpenAlert,
      setMessageAlert: setMessageAlert,
      setSelectedRows: setSelectedRows,
      setSelectedRule: setSelectedRule,
      setFeedbackTypeAlert: setFeedbackTypeAlert,
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert:setOpenFeedbackAlert,
      dispatch: dispatchMrplato,
    }
    prove(props)
  }


  const handleAddhypothesisOnlyAdd = ()=>{
    const props: any = {
      setFeedbackTypeAlert: setFeedbackTypeAlert,
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert:setOpenFeedbackAlert,
      inputTextInputForm: inputTextInputForm,
    }
    addHypothesisOnlyAddFunction(props, dispatchMrplato)
    setOpenInputForm(false)
  }

const handleaddHypothesisRuleFunction = ()=>{
  const props: any = {
    selectedRule: selectedRule,
    selectedRows: selectedRows,
    setOpenAlert: setOpenAlert, 
    setMessageAlert: setMessageAlert, 
    setFeedbackTypeAlert:setFeedbackTypeAlert, 
    setFeedbackMessageAlert: setFeedbackMessageAlert,
    setOpenFeedbackAlert: setOpenFeedbackAlert,
    stateMrplato:stateMrplato,
    inputTextInputForm:inputTextInputForm
  }
  
  addHypothesisRuleFunction(props, dispatchMrplato)
  setOpenInputForm(false)
}


  const handleRemoveHypothesisFunction = () => {
    const props: any = {
      setFeedbackTypeAlert: setFeedbackTypeAlert,
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert:setOpenFeedbackAlert,
    }
    removeHypothesisFunction(props,dispatchMrplato)

  }


  const handleReduceAbsurdeFunction = () => {
    const props: any = {
      setFeedbackTypeAlert: setFeedbackTypeAlert,
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert:setOpenFeedbackAlert,
    }
    reduceAbsurdeFunction(props, dispatchMrplato)

  }




  

  const handleRestart = () => {
    setInputTextInputForm([])
    restart(setSelectedRows, setSelectedRule)
  }





  React.useEffect(()=>{
    const transform = TrasformList.transform(dataQuestion.text)
    setQuestionProposition(transform)
    dispatchMrplato({type: SET_LIST_PROPOSITONS, payload: transform})
    handleRestart()
    window.scrollTo(0, 0);
  },[dataQuestion])


  return (

    <div className={styles.container}>

        <Alert messageAlert={messageAlert} openAlert={openAlert} setOpenAlert={setOpenAlert}/>
        <FeedBack setOpenFeedbackAlert={setOpenFeedbackAlert} openFeedbackAlert={openFeedbackAlert} feedbackType={feedbackTypeAlert} message={feedbackMessageAlert}/>

        <div className={`${styles.layer} ${styles.layer1}`}>
          <div className={styles.layerContainer}>
          <ButtonBack text='BACK' path={""}/>
          <Layer1 buttonActive={buttonActiveRule} onClick={setButonActiveRule}/>
          </div>
        </div>
        

        <div className={`${styles.layer} ${styles.layer2}`}>
          <div className={styles.layerContainer}>
            <Layer2 buttonActiveRule={buttonActiveRule} selectedRule={selectedRule} setSelectedRule={setSelectedRule}/>
          </div>
        </div>

        
        <div className={`${styles.layer} ${styles.layer3}`}> 
          <div className={styles.layerContainer}>
            <Layer3 questionProposition={questionProposition} selectedRule={selectedRule} setOpenInputForm={setOpenInputForm} inputTextInputForm={inputTextInputForm}  openInputForm={openInputForm} openTableSelectForm={openTableSelectForm} buttonActiveRule={buttonActiveRule} handleFunction={{handleProve, handleRestart, handleOpenTableSelect, handleInputTextInputForm, handleInputTextInputFormClear,handleAddhypothesis, handleSelectFormFunction,handleAddhypothesisOnlyAdd,handleaddHypothesisRuleFunction,handleRemoveHypothesisFunction, handleReduceAbsurdeFunction}}  selectedRows={selectedRows} selectRow={selectRow}  />
          </div>
        </div>


    </div>
  )
}

export default Interface