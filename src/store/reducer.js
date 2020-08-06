/* Action Digits */
const ZERO = 'ZERO'
const ADDONE = 'ADDONE'
const ADDTWO = 'ADDTWO'
const ADDTHREE = 'ADDTHREE'
const ADDFOUR = 'ADDFOUR'
const ADDFIVE = 'ADDFIVE'
const ADDSIX = 'ADDSIX'
const ADDSEVEN = 'ADDSEVEN'
const ADDEIGHT = 'ADDEIGHT'
const ADDNINE = 'ADDNINE'

/* Action Operations */
const ADD = 'ADD'
const RESET = 'RESET'
const DIVISION = 'DIVISION'
const MULTIPLY = 'MULTIPLY'
const EQUAL = 'EQUAL'
const DECIMAL = 'DECIMAL'
const SUBTRACT = 'SUBTRACT'

/* check for zero */
const notDivisible = 0

/* Resets the Equal Sign for reuse*/
let flag = false;

/* default reducer state & array */
const defaultState = {
    total:0,
    numberArray:[0]
}

/* Array of numbers to concat to state object */
const valZero = [0];
const valOne = [1];
const valTwo = [2];
const valThree = [3];
const valFour = [4];
const valFive = [5];
const valSix = [6];
const valSeven = [7];
const valEight = [8];
const valNine = [9];
const opSub = ['-'];
const opMult = ['X'];
const opDec = ['.'];
const opDiv = ['/'];
const opAdd = ['+'];
const opEqual = ['='];
const opNan = ['NAN'];


const reducer = (state = defaultState,action) => {

    switch(action.type){

        case EQUAL:{

            // const len = state.numberArray.length;
            // const tempAry = [...state.numberArray]

            // for(let i = 0; i < len;i++){

            // }
    
        //     if(state.numberArray[0] === 0){
        //         return{
        //             ...state,
        //             numberArray:state.numberArray = opNan
        //         }
        //     }
        //     /* If repeated sequential presses to equal return NAN */
        //     else if(state.numberArray[len-1] == opNan){
        //         return{
        //             ...state,
        //             numberArray:state.numberArray
        //         }
        //     }
        //     /* If n display that n = n, edge condition inplaced if 
        //     = is hit consecutively */
        //     else if(state.numberArray[0] != opEqual){
        //         if(flag == true){
        //             return {
        //                 ...state
        //             }
        //         }
        //         flag = true
        //         return{
        //             ...state,
        //             numberArray:[...state.numberArray,opEqual,state.numberArray]
        //         }
        //     }
        //    else{
        //        console.log(state.numberArray)
        //    }
        }
        case SUBTRACT:{
            const len = state.numberArray.length;
            /* If first entry is - then change to sub */
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = opSub
                }
            } 
            /* if n and n+1 is equal to - then just return unchanged*/
            else if(state.numberArray[len-1] == opSub){
                return{
                    ...state,
                    numberArray:state.numberArray
                }
            }
            /* Else n and n+1 in array are different and concat */
            else{
                return{
                    ...state,
                    numberArray:state.numberArray.concat(opSub)
                }
            }
        }
        case ADD:{
            const len = state.numberArray.length;
            /* If first entry is + then change to sub */
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = opAdd
                }
            }
            /* if n and n+1 is equal to + then just return unchanged*/
            else if(state.numberArray[len-1] == opAdd){
                return{
                    ...state,
                    numberArray:state.numberArray
                }
            }
            /* Else n and n+1 in array are different and concat */
            else{
                return{
                    ...state,
                    numberArray:state.numberArray.concat(opAdd)
                }
            }
        }
        case MULTIPLY:{
            const len = state.numberArray.length;
            /* If first entry is * then change to mult */
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray
                }
            } 
            /* if n and n+1 is equal to * then just return unchanged */
            else if(state.numberArray[len-1] == opMult){
                return{
                    ...state,
                    numberArray:state.numberArray
                }
            }
            /* Else n and n+1 in array are different and concat */
            else{
                return{
                    ...state,
                    numberArray:state.numberArray.concat(opMult)
                }
            }
        }
        case DECIMAL:{
            const len = state.numberArray.length;
            
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray.concat(opDec)
                }
            }
            else{
                return{
                    ...state,
                    numberArray:state.numberArray
                }
            }
        }
        case DIVISION:{
            const len = state.numberArray.length;
            /* If first entry is div  then change to mult */
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray
                }
            } 
            /* if n and n+1 is equal to div then just return unchanged */
            else if(state.numberArray[len-1] == opDiv){
                return{
                    ...state,
                    numberArray:state.numberArray
                }
            }
            /* Else n and n+1 in array are different and concat */
            else{
                return{
                    ...state,
                    numberArray:state.numberArray.concat(opDiv)
                }
            }
        }
        case RESET:
            /* Reset the flag for EQUAL*/
            flag = false
            return{
                total:state.total = 0,
                numberArray:state.numberArray = [0]
            }
        case ZERO:
            return{
                ...state,
                numberArray:state.numberArray.concat(valZero)
            }
        case ADDONE:
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = valOne
                }
            }
            return{
                ...state,
                numberArray:state.numberArray.concat(valOne)
            }
        case ADDTWO:
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = valTwo
                }
            }
            return{
                ...state,
                numberArray:state.numberArray.concat(valTwo)
            }
        case ADDTHREE:
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = valThree
                }
            }
            return{
                ...state,
                numberArray:state.numberArray.concat(valThree)
            }
        case ADDFOUR:
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = valFour
                }
            }
            return{
                ...state,
                numberArray:state.numberArray.concat(valFour)
            }
        case ADDFIVE:
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = valFive
                }
            }
            return{
                ...state,
                numberArray:state.numberArray.concat(valFive)
            }
        case ADDSIX:
            if(state.numberArray[0] === 0){
                return{
                    ...state,
                    numberArray:state.numberArray[0] = valSix
                }
            }
            return{
                ...state,
                numberArray:state.numberArray.concat(valSix)
            }
            case ADDSEVEN:
                if(state.numberArray[0] === 0){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valSeven
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valSeven)
                }
            case ADDEIGHT:
                if(state.numberArray[0] === 0){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valEight
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valEight)
                }
            case ADDNINE:
                if(state.numberArray[0] === 0){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valNine
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valNine)
                }
            default:
                return state
    }
}

export default reducer;