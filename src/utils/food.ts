export const findLowest = (arr: Array<number>)=>{
    return arr.reduce((acc, curr)=> {
        if(curr < acc){
            acc = curr;
        }
        return acc;
        }, Number.MAX_SAFE_INTEGER);
}


