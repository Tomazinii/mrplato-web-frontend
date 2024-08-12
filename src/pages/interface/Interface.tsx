import React, { useContext, useState } from 'react'
import styles from './Interface.module.css';
import Layer1 from './Layer1';
import Layer2 from './Layer2';
import Layer3 from './Layer3';
import Alert from './Alert';
import { BackStateMrplato, CreateSessionExerciseHandle, openSelectFormsProps, openTableSelectFormFunction, prove, ProveProps, reduceAbsurdeFunction, removeHypothesisFunction, restart, selectFormFunction, selectFormsProps} from '../../utils/Interface/InterfaceFuntions';
import FeedBack from './FeedBack';
import { ContextMrplato } from '../../context/ContextMrplato';
import { RESET_LIST_NEW_LINES } from '../../api/types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { restart_session } from '../../api/Session.api';
import Confetti from 'react-confetti';
import { ContextUser } from '../../context/ContenxtUser';
import { ContextClassroom } from '../../context/ContextClassroom';
import { ArrowBack } from '@mui/icons-material';


interface IntrefaceProps {
  stateExercise: any
}





const Interface: React.FC<IntrefaceProps> = ({stateExercise}) => {

  const {idQuestion, idLista} = useParams()
  

  const navigate = useNavigate()
  const [buttonActiveRule, setButonActiveRule] = React.useState("1")
  const [selectedRule, setSelectedRule] = React.useState<any>()
  const [selectedRuleIndex, setSelectedRuleIndex] = React.useState<any>()
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
  const [isCelebrating, setIsCelebrating] = useState(true);
  
  
  const context = useContext(ContextMrplato);
  const { stateMrplato, dispatchMrplato } = context || {};
  
  const { stateUser } =  useContext(ContextUser) || {};
  const { stateClassroom } =  useContext(ContextClassroom) || {};

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
    // setInputTextInputForm([...inputTextInputForm, caracter])
    
    setInputTextInputForm( inputTextInputForm +  caracter + " ")
  
  }

  const handleInputTextInputFormClear = ()=> {
      // const newList = [...inputTextInputForm];
      // newList.pop();
      setInputTextInputForm(inputTextInputForm.slice(0,-1))
    
  
  }


  const handleBack = () =>{
    
    BackStateMrplato(dispatchMrplato)
  }
  
  const handleOpenTableSelect = ()=>{
    const props: openSelectFormsProps = {
      selectedRule: selectedRule,
      selectedRows: selectedRows,
      setOpenAlert: setOpenAlert,
      setMessageAlert: setMessageAlert,
      setOpenTableSelectForm: setOpenTableSelectForm,
      buttonActiveRule: buttonActiveRule,
      selectedRuleIndex: selectedRuleIndex,
      pb_index: Number(idQuestion),
      list_index: String(idLista),
      setFeedbackTypeAlert: setFeedbackTypeAlert,
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert: setOpenFeedbackAlert,
      problem: String(localStorage.getItem("question")),
    }
    if(openTableSelectForm){
      setOpenTableSelectForm(false)
    }else{
      
    openTableSelectFormFunction(props, dispatchMrplato)
   
  }
  }


  const handleSelectFormFunction = (e: any) => {
    
    
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
      stateMrplato: stateMrplato,
      selectedRuleIndex: selectedRuleIndex,
      buttonActiveRule: buttonActiveRule,
      selection: e,
      input_formula: "",
      list_index: String(idLista),
      pb_index: Number(idQuestion),
      activity_id: String(localStorage.getItem("LISTID")),
      classroom_id: stateUser && stateUser.classrom_id,
      problem: String(localStorage.getItem("question")),
      user_id: stateUser && stateUser.user_id,
      setIsCelebrating: setIsCelebrating,
      user_status: stateUser && stateUser.is_admin,

    }

    
    prove(props)
    setOpenTableSelectForm(false)
    handleRestartInputGlobal()

    // handleRestart()
    

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
      stateMrplato: stateMrplato,
      selectedRuleIndex: selectedRuleIndex,
      buttonActiveRule: buttonActiveRule,
      selection: 0,
      input_formula: "",
      pb_index: Number(idQuestion),
      list_index: String(idLista),
      activity_id: String(localStorage.getItem("LISTID")),
      classroom_id:stateUser && stateUser.classrom_id,
      problem:String(localStorage.getItem("question")),
      user_id:stateUser && stateUser.user_id,
      setIsCelebrating: setIsCelebrating,
      user_status: stateUser && stateUser.is_admin

    }

    prove(props)
    setInputTextInputForm([])
    handleRestartInputGlobal()
  }

  const handleAddhypothesisOnlyAdd = ()=>{
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
      stateMrplato: stateMrplato,
      selectedRuleIndex: selectedRuleIndex,
      buttonActiveRule: buttonActiveRule,
      selection: 0,
      input_formula: inputTextInputForm,
      pb_index: Number(idQuestion),
      list_index: String(idLista),
      activity_id: String(localStorage.getItem("LISTID")),
      classroom_id:stateUser && stateUser.classrom_id,
      problem:String(localStorage.getItem("question")),
      user_id: stateUser && stateUser.user_id,
      setIsCelebrating: setIsCelebrating,
      user_status: stateUser && stateUser.is_admin,

    }


    prove(props)
    setOpenInputForm(false)
    setInputTextInputForm([])
    handleRestartInputGlobal()
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
    inputTextInputForm:inputTextInputForm,
    selectedRuleIndex: selectedRuleIndex
  }
  
  // addHypothesisRuleFunction(props, dispatchMrplato)
  // setOpenInputForm(false)
}


  const handleRemoveHypothesisFunction = () => {

    
    const props: any = {
      setFeedbackTypeAlert: setFeedbackTypeAlert,
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert:setOpenFeedbackAlert,
      stateMrplato: stateMrplato,
    }
    // removeHypothesisFunction(props,dispatchMrplato)

  }


  const handleReduceAbsurdeFunction = () => {
    const props: any = {
      setFeedbackTypeAlert: setFeedbackTypeAlert,
      setFeedbackMessageAlert: setFeedbackMessageAlert,
      setOpenFeedbackAlert:setOpenFeedbackAlert,
      stateMrplato:stateMrplato
    }
    // reduceAbsurdeFunction(props, dispatchMrplato)

  }

  function handleRestartInputGlobal(){
    setSelectedRows([])
    setSelectedRule(null)
  }




  const handleRestart = () => {
    setOpenTableSelectForm(false)
    setInputTextInputForm([])

    
    restart(setSelectedRows, setSelectedRule)
  }

  const problem = stateExercise.activity_list && stateExercise.activity_list.find((element: any) => element.id === idLista)
  const list_length = problem && problem.problem && Number(problem.problem.length)
  
  
  React.useEffect(()=>{
    
    
    if(Number(idQuestion) >= list_length){
      if ( problem && problem.category === "exercises"){
      navigate("/exercises")
    }else if (problem && problem.category === "challenges"){
      navigate("/challenges")
    }
      return
    }
    

    if(!isNaN(Number(idQuestion))){
    if (localStorage.getItem("question") !== null){

      const props: any = {
        problem: problem ? problem.problem[Number(idQuestion)] : localStorage.getItem("question") 
      }
      if (problem){
        localStorage.setItem("question",problem.problem[Number(idQuestion)])
      }
    
    if((Number(idQuestion) !== Number(window.localStorage.getItem("idQuestion"))) ||  (idLista !== window.localStorage.getItem("idLista"))){
      restart_session()
      dispatchMrplato({type:RESET_LIST_NEW_LINES})
    }
    
    CreateSessionExerciseHandle(props, dispatchMrplato)
  }}
  window.localStorage.setItem('idQuestion', String(idQuestion))
  window.localStorage.setItem('idLista', String(idLista))
  setIsCelebrating(false)
  },[idQuestion])


  
  return (
    <div className={styles.containerMaster}>
      <div className={styles.container}>
        {problem && problem.category === "exercises" &&
        <Link className={styles.buttonBack} to={`/exercises/${idLista}`}><ArrowBack className={styles.ArrowBack}/></Link>
      }
              {problem && problem.category === "challenges" &&
        <Link className={styles.buttonBack} to={`/challenges/${idLista}`}><ArrowBack className={styles.ArrowBack}/></Link>
      }
        {isCelebrating && 
      <Confetti />

        }
        
        <Alert messageAlert={messageAlert} openAlert={openAlert} setOpenAlert={setOpenAlert}/>
        <FeedBack setOpenFeedbackAlert={setOpenFeedbackAlert} openFeedbackAlert={openFeedbackAlert} feedbackType={feedbackTypeAlert} message={feedbackMessageAlert}/>
        <div className={`${styles.layer} ${styles.layer1}`}>
          <div className={styles.layerContainer}>
          <Layer1 buttonActive={buttonActiveRule} onClick={setButonActiveRule}/>
          </div>
        </div>
        

        <div className={`${styles.layer} ${styles.layer2}`}>
          <div className={styles.layerContainer}>
            <Layer2 buttonActiveRule={buttonActiveRule} selectedRule={selectedRule} setSelectedRuleIndex={setSelectedRuleIndex} setSelectedRule={setSelectedRule}/>
          </div>
        </div>

        
        <div className={`${styles.layer} ${styles.layer3}`}> 
          <div className={styles.layerContainer}>
            <Layer3 questionProposition={questionProposition} selectedRule={selectedRule}  setOpenInputForm={setOpenInputForm} inputTextInputForm={inputTextInputForm}  openInputForm={openInputForm} openTableSelectForm={openTableSelectForm} buttonActiveRule={buttonActiveRule} handleFunction={{handleProve, handleRestart, handleBack,handleOpenTableSelect, handleInputTextInputForm, handleInputTextInputFormClear,handleAddhypothesis, handleSelectFormFunction,handleAddhypothesisOnlyAdd,handleaddHypothesisRuleFunction,handleRemoveHypothesisFunction, handleReduceAbsurdeFunction}}  selectedRows={selectedRows} selectRow={selectRow}  />
          </div>
        </div>


    </div>
    </div>
  )
}

export default Interface