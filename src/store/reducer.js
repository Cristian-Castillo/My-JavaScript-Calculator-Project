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
const NAN = 'NaN'

/* default reducer state & array */
const defaultState = {
    total:0,
    numberArray:['0'],
}

/* Check Len of Digits/math ops - not to exceed set length */
const DIGITLENGTH = 'DIGIT LIMITS EXCEEDED!'

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

const reducer = (state = defaultState,action) => {

    const copyArray = [...state.numberArray]
    let subContainer = []
    /* Reset to default if we exceed more then 25 characters or
       if we received character n1 - + n2 in str reset */
    if(state.numberArray === DIGITLENGTH || state.numberArray === NAN){
        return{
            ...state,
            total:state.total = 0,
            numberArray:['0']
        }
    }
    /* If characters < 24, continue*/
    if(state.numberArray.length < 24){

        switch(action.type){

            case EQUAL:{
                
                const len = copyArray.length
                let emptyStr = ''
                let accumulator = 0
    
                /* If Enter is hit first as input then display not a number */
                if(action.type === EQUAL && state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        total:NAN
                    }
                }
                /* isolate characters */
                for(let i = 0; i < len; i++){
                    /* Check Mult, and push reset str */
                    if(copyArray[i] === opMult[0]){
                        subContainer.push('*')
                        emptyStr = ''
                    }
                    if(copyArray[i] === '-' && copyArray[i+1] === '+'){
                        return{
                            ...state,
                             numberArray:NAN
                        }
                    }
                    if(copyArray[i] !== '•'){
                        emptyStr = copyArray[i]
                        subContainer[i] = emptyStr
                        emptyStr = ''   
                    }          
                }
                subContainer.push(emptyStr)
                subContainer.pop()
                /* Convert to str */
                for(let i = 0; i < subContainer.length;i++){
                    emptyStr += subContainer[i]
                }
                accumulator = eval(emptyStr)
                return{
                    ...state,
                    total:accumulator
                }
            }
            case SUBTRACT:{
                const len = state.numberArray.length;
                /* If first entry is - then change to sub */
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = opSub[0]
                    }
                } 
                /* if n and n+1 is equal to - then just return unchanged*/
                else if(state.numberArray[len-1] === opSub[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray
                    }
                }
                /* Else n and n+1 in array are different and concat */
                else{
                    /* Check to see if we get n - + (n+1) not valid */ 
                    for(let i = 0; i < state.numberArray.length; i++){
                        if(state.numberArray[i] === '-' && state.numberArray[i+1] === '+'){
                            return{
                                ...state,
                                numberArray:NAN
                            }
                        }
                    }
                    return{
                        ...state,
                        numberArray:state.numberArray.concat(opSub[0])
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
                else if(state.numberArray[len-1] === opAdd){
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
            case DECIMAL:
                const len = state.numberArray.length;
                /* If first entry is - then change to sub */
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = opDec[0]
                    }
                } 
                /* if n and n+1 is equal to - then just return unchanged*/
                else if(state.numberArray[len-1] === opDec[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray
                    }
                }
                /* Else n and n+1 in array are different and concat */
                else{
                    return{
                        ...state,
                        numberArray:state.numberArray.concat(opDec[0])
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
                return{
                    ...state,
                    total:state.total = 0,
                    numberArray:['0'],
                    countDecimal:0
                }
            case ZERO:
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...defaultState,
                        total:state.total = valZero[0],
                        numberArray:[...valZero]
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valZero[0])
                }
            case ADDONE:
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valOne[0]
                    }
                }
                else{
                    return{
                        ...state,
                        numberArray:state.numberArray.concat(valOne[0])
                    }
                }
            case ADDTWO:
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valTwo[0]
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valTwo[0])
                }
            case ADDTHREE:
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valThree[0]
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valThree[0])
                }
            case ADDFOUR:
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valFour[0]
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valFour[0])
                }
            case ADDFIVE:
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valFive[0]
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valFive[0])
                }
            case ADDSIX:
                if(state.numberArray[0] === valZero[0]){
                    return{
                        ...state,
                        numberArray:state.numberArray[0] = valSix[0]
                    }
                }
                return{
                    ...state,
                    numberArray:state.numberArray.concat(valSix[0])
                }
                case ADDSEVEN:
                    if(state.numberArray[0] === valZero[0]){
                        return{
                            ...state,
                            numberArray:state.numberArray[0] = valSeven[0]
                        }
                    }
                    return{
                        ...state,
                        numberArray:state.numberArray.concat(valSeven[0])
                    }
                case ADDEIGHT:
                    if(state.numberArray[0] === valZero[0]){
                        return{
                            ...state,
                            numberArray:state.numberArray[0] = valEight[0]
                        }
                    }
                    return{
                        ...state,
                        numberArray:state.numberArray.concat(valEight[0])
                    }
                case ADDNINE:
                    if(state.numberArray[0] === valZero[0]){
                        return{
                            ...state,
                            numberArray:state.numberArray[0] = valNine[0]
                        }
                    }
                    return{
                        ...state,
                        numberArray:state.numberArray.concat(valNine[0])
                    }
                default:
                    return state
        }
    }
    else{
        return{
            ...state,
            numberArray:DIGITLENGTH,
        }
    }
}

export default reducer;