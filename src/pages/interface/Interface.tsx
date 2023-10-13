import React from 'react'
import styles from './Interface.module.css';
import ButtonBack from '../../component/buttons/ButtonBack';
import Layer1 from './Layer1';
import Layer2 from './Layer2';
import Layer3 from './Layer3';
import Alert from './Alert';
import { openSelectFormsProps, openTableSelectFormFunction, prove, ProveProps, restart, selectFormsProps} from '../../utils/Interface/InterfaceFuntions';
import FeedBack from './FeedBack';
import TrasformList from '../../utils/transform';


interface IntrefaceProps {
  dataQuestion: {
    id: string;
    text: string;
  }
}


const Interface: React.FC<IntrefaceProps> = ({dataQuestion}) => {
  
  const [buttonActiveRule, setButonActiveRule] = React.useState("1")
  const [selectedRule, setSelectedRule] = React.useState("")
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



  const selectRow = (index: string) => {
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
    openTableSelectFormFunction(props)
  }
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
      setOpenFeedbackAlert:setOpenFeedbackAlert
    }
    prove(props)
  }

  const handleRestart = () => {
    setInputTextInputForm([])
    restart(setSelectedRows, setSelectedRule)
  }



  React.useEffect(()=>{
    const transform = TrasformList.transform(dataQuestion.text)
    setQuestionProposition(transform)
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
            <Layer3 questionProposition={questionProposition} selectedRule={selectedRule} setOpenInputForm={setOpenInputForm} inputTextInputForm={inputTextInputForm}  openInputForm={openInputForm} openTableSelectForm={openTableSelectForm} buttonActiveRule={buttonActiveRule} handleFunction={{handleProve, handleRestart, handleOpenTableSelect, handleInputTextInputForm, handleInputTextInputFormClear,handleAddhypothesis}}  selectedRows={selectedRows} selectRow={selectRow}  />
          </div>
        </div>


    </div>
  )
}

export default Interface