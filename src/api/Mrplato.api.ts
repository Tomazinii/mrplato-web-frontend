import axios from "axios";
import {
} from "./types";
import { Dispatch } from "react";

const URL = process.env.REACT_APP_URL;

const PATH_DEFAULT = "/api/v1/mrplato/operations"


export interface Rows {
  rows: {content: string, type: string, methods_used_info: string}[]
}

export interface applyRuleInputProps{
  rows: {content: string, type: string, methods_used_info: string}[]
  index_selected_rows: number[]
  selected_rule_data: {type: string, index_selected_rule: number}
}

export interface applyRuleOutputProps{
  type_output: string
  message: string
  new_line: {content: string, type: string, methods_used_info: string}

}

export const apply_rule_router = async (props: applyRuleInputProps, dispatch: Dispatch<any> ) => {

  const {rows, index_selected_rows, selected_rule_data} = props;
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

    };
    
    const body = JSON.stringify({ 
      rows: rows, 
      index_selected_rows: index_selected_rows, 
      selected_rule_data: selected_rule_data
    });
    


    try {

      const res = (await axios.post(URL + PATH_DEFAULT + "/apply_rule_router/", body, config));
      const data: applyRuleOutputProps = res.data
      return data

    } catch (err) {
    }
};



export interface getOptionProps {
  rows: {content: string, type: string, methods_used_info: string}[],
  selected_row_index: number
}


export const get_options_selected_form = async (props: getOptionProps) => {

  const {rows, selected_row_index} = props;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    
    const body = JSON.stringify({ 
      rows: rows, 
      selected_row_index: selected_row_index
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/get_options_selected_form/", body, config));
      const data = res.data
      return data
    } catch (err) {
    }
};


export interface SelectFormProps {
  rows: {content: string, type: string, methods_used_info: string}[],
  selected_row_index: number
  index_option: number
  selected_rule_index: number
}

export const selected_form = async (props: SelectFormProps) => {
  const {rows, selected_row_index, index_option, selected_rule_index} = props;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    
    const body = JSON.stringify({ 
      rows: rows, 
      selected_row_index: selected_row_index,
      index_option: index_option,
      selected_rule_index: selected_rule_index,
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/selected_form/", body, config));
      
      const data = res.data
      return data
    } catch (err) {
    }
};



export interface AddHypothesisOnlyAddProps{
  selected_rule_index: number
  input_data: string[]
}

export const add_hypothesis_only_add_api = async (props: AddHypothesisOnlyAddProps) => {
  const {input_data,selected_rule_index} = props;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    
    const body = JSON.stringify({ 
      input_data: input_data, 
      selected_rule_index: selected_rule_index,
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/add_hypothesis_only_add/", body, config));
      const data = res.data
      return data
    } catch (err) {
    }
};
export interface AddHypothesisRuleProps {
  rows: {content: string, type: string, methods_used_info: string}[],
  index_selected_row: number 
  selected_rule_index: number
  input_data: string[]

}


export const add_hypothesis_rule = async (props: AddHypothesisRuleProps) => {
  const {index_selected_row,input_data,rows,selected_rule_index} = props;

  

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    
    const body = JSON.stringify({ 
      index_selected_row: index_selected_row, 
      rows: rows, 
      input_data: input_data, 
      selected_rule_index: selected_rule_index,
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/add_hypothesis_rule/", body, config));
      const data = res.data
      return data
    } catch (err) {
    }
};

export interface RemoveHypothesisProps {
  rows_created: {content: string, type: string, methods_used_info: string}[],
}

export const rem_hypothesis = async (props: RemoveHypothesisProps) => {
  const {rows_created} = props;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    
    const body = JSON.stringify({ 
      rows_created: rows_created, 
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/rem_hypothesis/", body, config));
      const data = res.data
      return data
    } catch (err) {
    }
};


export const reduce_absurde = async (props: RemoveHypothesisProps) => {
  const {rows_created} = props;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    
    const body = JSON.stringify({ 
      rows_created: rows_created, 
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/red_absurde/", body, config));
      const data = res.data
      return data
    } catch (err) {
    }
};









