import axios from "axios";
import {
} from "./types";
import { Dispatch } from "react";

const URL = process.env.REACT_APP_URL;

const PATH_DEFAULT = "/api/v1/mrplato"

export interface Rows {
  rows: {content: string, type: string, methods_used_info: string}[]
}

export interface applyRuleInputProps{
  index_selected_rows: number[]
  pb_index: number
  type_selected: string
  sel_rule: number
  input_formula: string
  total_or_partial: string
  selection: number
  list_index: string
  activity_id: string,
  classroom_id: string,
  problem:string,
  user_id:string,
  user_status: boolean
}
export interface applyRuleOutputProps{
  type_output: string
  message: string
  lines: [{content: string, type: string, methods_used_info: string}]

}

export const apply_rule_router = async (props: applyRuleInputProps, dispatch: Dispatch<any> ) => {
  
  const {index_selected_rows, pb_index,user_status, type_selected, sel_rule, input_formula, total_or_partial,selection,list_index, activity_id, classroom_id,problem,user_id} = props;
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      },
      withCredentials: true

    };

    
    
    const body = JSON.stringify({ 
        selected_proof_line_indexes: index_selected_rows,
        pb_index: pb_index,
        type_selected: type_selected,
        sel_rule: sel_rule,
        input_formula: input_formula,
        total_or_partial: total_or_partial,
        selection: selection,
        list_index: list_index,
        activity_id: activity_id,
        classroom_id: classroom_id,
        problem: problem,
        user_id: user_id,
        user_status: user_status,
    });
    


    try {

      const res = (await axios.post(URL + PATH_DEFAULT + "/prover", body, config));
      
      const data: applyRuleOutputProps = res.data

      return {data:data, success: true};
    } catch (err: any) {

      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
    }
};



export interface getOptionProps {
  selected_proof_line_indexes: number[],
  pb_index: number,
  type_selected: string,
  sel_rule: number,
  input_formula: string,
  total_or_partial: string,
  selection: any,
  list_index: string,
  problem: string
  
}

export interface CreateSessionExercise {
  pb_index: number,
  list_index: number,
}


export const get_options_selected_form = async (props: getOptionProps) => {

  const {selected_proof_line_indexes, pb_index,type_selected, sel_rule, list_index, total_or_partial, problem} = props;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true
    };
    
    const body = JSON.stringify({ 
      selected_proof_line_indexes: selected_proof_line_indexes, 
      pb_index: pb_index,
      list_index: list_index,
      type_selected: type_selected,
      sel_rule: sel_rule,
      total_or_partial: total_or_partial,
      problem: problem
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/get_options", body, config));
      const data = res.data
      return {data:data, success: true};
    } catch (err: any) {
      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
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

export const create_session_exercise = async (props: any) => {
  const {problem} = props;
  
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",

    },
    withCredentials: true

  };
    
    const body = JSON.stringify({ 
        problem: problem,
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/check_status_mrplato", body, config));
      
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









