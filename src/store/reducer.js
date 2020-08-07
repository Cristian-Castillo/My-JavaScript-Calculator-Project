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
const valZero = ['0'];
const valOne = ['1'];
const valTwo = ['2'];
const valThree = ['3'];
const valFour = ['4'];
const valFive = ['5'];
const valSix = ['6'];
const valSeven = ['7'];
const valEight = ['8'];
const valNine = ['9'];
const opSub = ['-'];
const opMult = ['•'];
const opDec = ['.'];
const opDiv = ['/'];
const opAdd = ['+'];
const opEqual = ['='];
const opNan = ['NAN'];

const reducer = (state = defaultState,action) => {

    const copyArray = [...state.numberArray]
    let subContainer = []
    let resultingArray = []

    switch(action.type){

        case EQUAL:{
            
            const len = copyArray.length
            let emptyStr = ''
            let accumulator = 0

            /* Group numbers and isolate math operands */
            for(let i = 0; i < len;i++){

                /* Check Addition */
                if(copyArray[i] !== '+'){
                    emptyStr += copyArray[i]
                }
                else if(copyArray[i] === '+'){
                    subContainer.push(parseFloat(emptyStr))
                    subContainer.push('+')
                    emptyStr = ''
                }
                /* Check Sub, and push reset str */
                if(copyArray[i] === '-'){
                    subContainer.push(parseFloat(emptyStr))
                    subContainer.push('-')
                    emptyStr = ''
                }
                /* Check Mult, and push reset str */
                if(copyArray[i] === opMult[0]){
                    subContainer.push(parseFloat(emptyStr))
                    subContainer.push('*')
                    emptyStr = ''
                }
                /* Check Div, and push reset str */
                if(copyArray[i] === opDiv[0]){
                    subContainer.push(parseFloat(emptyStr))
                    subContainer.push('/')
                    emptyStr = ''
                }
            }

            subContainer.push(parseFloat(emptyStr))
            emptyStr = '';
            console.log(subContainer)

            /* Begin math logic operations */
            const subLen = subContainer.length
            /* Pemdas in Action for mult and div */
            for(let j = 0; j < subLen;j++){
            
                if((j % 2) !== 0){
                    
                    if(subContainer[j] === '*'){
                        accumulator = subContainer[j-1]*subContainer[j+1]
                        subContainer[j-1] = 'x'
                        subContainer[j] ='x'
                        subContainer[j+1] = accumulator
                        accumulator = 0
                    }
                    if(subContainer[j] === '/'){
                        accumulator = subContainer[j-1]/subContainer[j+1]
                        subContainer[j-1] = 'x'
                        subContainer[j] ='x'
                        subContainer[j+1] = accumulator
                        accumulator = 0
                    }
                }
            }

                for(let j = 0; j < subLen;j++){
            
                if((j % 2) !== 0){
                    
                    if(subContainer[j] === '*'){
                        accumulator = subContainer[j-1]*subContainer[j+1]
                        subContainer[j-1] = 'x'
                        subContainer[j] ='x'
                        subContainer[j+1] = accumulator
                        accumulator = 0
                    }
                    if(subContainer[j] === '/'){
                        accumulator = subContainer[j-1]/subContainer[j+1]
                        subContainer[j-1] = 'x'
                        subContainer[j] ='x'
                        subContainer[j+1] = accumulator
                        accumulator = 0
                    }
                }
            }
            /* Remove dummy data x from array */
            for(let i = 0; i < subLen;i++){
                if(subContainer[i] !== 'x'){
                    resultingArray.push(subContainer[i])
                }
            }
            /* Pemdas in Action for add and sub */
            for(let j = 0; j < resultingArray.length;j++){
            
                if((j % 2) !== 0){
                    
                    if(resultingArray[j] === '+'){
                        accumulator = resultingArray[j-1]+resultingArray[j+1]
                        resultingArray[j-1] = 'x'
                        resultingArray[j] ='x'
                        resultingArray[j+1] = accumulator
                        accumulator = 0
                    }
                    if(resultingArray[j] === '-'){
                        accumulator = resultingArray[j-1]-resultingArray[j+1]
                        resultingArray[j-1] = 'x'
                        resultingArray[j] ='x'
                        resultingArray[j+1] = accumulator
                        accumulator = 0
                    }
                }
            }
            accumulator = 0
            /* Remove dummy data x from array and store result*/
            for(let i = 0; i < resultingArray.length;i++){

                if(resultingArray[i] !== 'x'){
                    accumulator = resultingArray[i]
                }
            }
            /* Return result! */
            return{
                ...state,
                total:state.total = accumulator,
            }
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
            else if(state.numberArray[len-1] === opMult){
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
            else if(state.numberArray[len-1] === opDiv){
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
            else{
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valOne)
                }
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