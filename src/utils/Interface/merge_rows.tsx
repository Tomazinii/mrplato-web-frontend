export function mergeLists<T>(l1: T[], l2: T[]): T[] {
    const mergedList: T[] = [];
    
    for (const item of l1) {
        if (!mergedList.includes(item)) {
            const element:any = {content: item, methods_used_info: "", type: "default" }
            mergedList.push(element);
        }
    }

    for (const item of l2) {
        if (!mergedList.includes(item)) {
            mergedList.push(item);
        }
    }

    return mergedList;
}


