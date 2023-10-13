import { prove_validation, select_form_validation } from "../../validations/interface/InterfaceValidation"


export interface FeedBackAlerteInterface{
  setFeedbackTypeAlert: React.Dispatch<React.SetStateAction<string>>,
  setFeedbackMessageAlert: React.Dispatch<React.SetStateAction<string>>
  setOpenFeedbackAlert: React.Dispatch<React.SetStateAction<boolean>>
}


export interface SelectRowAndRuleInterface {
  selectedRule: string;
  selectedRows: string[];
}

export interface AlertInterface {
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setMessageAlert: React.Dispatch<React.SetStateAction<string>>;
}

export interface RestartInterface {
  setSelectedRows: React.Dispatch<React.SetStateAction<Array<string>>>,
  setSelectedRule: React.Dispatch<React.SetStateAction<string>>,
}

export interface ProveProps extends 
FeedBackAlerteInterface, 
SelectRowAndRuleInterface, 
SelectRowAndRuleInterface, 
AlertInterface,
RestartInterface
{ }



export interface selectFormsProps extends 
FeedBackAlerteInterface, 
SelectRowAndRuleInterface, 
SelectRowAndRuleInterface, 
AlertInterface,
RestartInterface
{
  setOpenTableSelectForm: React.Dispatch<React.SetStateAction<boolean>>;

  
 }
 export interface openSelectFormsProps extends SelectRowAndRuleInterface, AlertInterface{
  setOpenTableSelectForm: React.Dispatch<React.SetStateAction<boolean>>;

}




export const alert = (
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>,
    setMessageAlert: React.Dispatch<React.SetStateAction<string>>,
    message: string
  ): void => {
    setMessageAlert(message);
    setOpenAlert(true);
  };




  export const prove = (props: ProveProps): void => {
    const { 
        selectedRule,
        selectedRows,
        setOpenAlert, 
        setMessageAlert, 
        setSelectedRows, 
        setSelectedRule, 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert
    } = props;
  
    const validate = prove_validation(selectedRule, selectedRows)

    if (validate.status) {
        setFeedbackTypeAlert("Success")
        setFeedbackMessageAlert("The selected rule is not applicable to the selected lines")
        setOpenFeedbackAlert(true)
        restart(setSelectedRows, setSelectedRule)
    }else{
        alert(setOpenAlert, setMessageAlert, validate.message);
    }
  };


  export const restart = (
    setSelectedRows: React.Dispatch<React.SetStateAction<Array<string>>>,
    setSelectedRule: React.Dispatch<React.SetStateAction<string>>
  ) =>{
    setSelectedRows([])
    setSelectedRule("")
  }


  export const openTableSelectFormFunction = (props: openSelectFormsProps): void => {
    const { 
      selectedRule,
      selectedRows,
      setOpenAlert,
      setMessageAlert,
      setOpenTableSelectForm
  } = props;
  const validate = select_form_validation(selectedRule, selectedRows)

  if(validate.status){
      setOpenTableSelectForm(true)
  }else{
    alert(setOpenAlert, setMessageAlert, validate.message);
    
  }

}

  
  export const selectFormFunction = (props: selectFormsProps): void => {
    const { 
        selectedRule,
        selectedRows,
        setOpenAlert, 
        setMessageAlert, 
        setSelectedRows, 
        setSelectedRule, 
        setFeedbackTypeAlert, 
        setFeedbackMessageAlert,
        setOpenFeedbackAlert,
        setOpenTableSelectForm
    } = props;
  
    const validate = prove_validation(selectedRule, selectedRows)

    if (validate.status) {
      setOpenTableSelectForm(true)
      
    }else{
        alert(setOpenAlert, setMessageAlert, validate.message);

    }
  };

 