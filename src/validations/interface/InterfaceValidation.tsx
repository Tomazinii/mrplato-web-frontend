

export const prove_validation = (selectedRule:string , selectedRows: Array<number>) => {
    if (selectedRows.length === 0 ) {
        return {status: false, message: "You need to select Row"};
    }
    if (selectedRule.length === 0 || selectedRule === "null") {
        return {status: false, message: "You need to select Rule"};
    }
    return {status: true, message:""};
}



export const select_form_validation = (selectedRule:string , selectedRows:Array<number>) => {
    
    if (selectedRows.length === 0) {
        return {status: false, message: "You need to select Row"};
    }
    if (selectedRows.length > 1) {
        return {status: false, message: "Only one row can be selected"};
    }
    if (selectedRule.length === 0) {
        return {status: false, message: "You need to select Rule"};
    }
    return {status: true, message:""};
}