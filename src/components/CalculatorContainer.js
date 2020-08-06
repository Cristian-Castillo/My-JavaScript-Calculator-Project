import React, { Component } from 'react'
import {connect} from 'react-redux'
import ContainerStyle from './ContainerStyle.css'

class CalculatorContainer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        /* Returns math operation result from redux store*/
        /* Declared const to hold props from store */
        const displayResult = this.props.storeTotal
        const displayArray = this.props.storeArray
        const setDiv = this.props.division
        const setAdd = this.props.add
        const setReset = this.props.reset
        const setMultiply = this.props.multiply
        const setSubtract = this.props.subtract
        const setDecimal = this.props.decimal
        const setEqual = this.props.equal
        const addZero = this.props.addZero
        const addOne = this.props.addOne
        const addTwo = this.props.addTwo
        const addThree = this.props.addThree
        const addFour = this.props.addFour
        const addFive = this.props.addFive
        const addSix = this.props.addSix
        const addSeven = this.props.addSeven
        const addEight = this.props.addEight
        const addNine = this.props.addNine

        /* Calculator Container*/
        return(
            <div className="container">
                <div className="row col-result-layout">
                <div className="col-12 col-subresult">{displayArray}</div>
                    <div className="col-12 ">{displayArray}</div>
                </div>
                <div className="row">
                    <div className="col"><button onClick = {setReset}>AC</button></div>
                    <div className="col"><button onClick ={setDiv}>/</button></div>
                    <div className="col"><button onClick ={setMultiply}>x</button></div>
                </div>
                <div className="row">
                    <div className="col"><button onClick ={addSeven}>7</button></div>
                    <div className="col"><button onClick ={addEight}>8</button></div>
                    <div className="col"><button onClick ={addNine}>9</button></div>
                    <div className="col"><button onClick ={setSubtract}>-</button></div>
                </div>
                <div className="row">
                    <div className="col"><button onClick ={addFour}>4</button></div>
                    <div className="col"><button onClick ={addFive}>5</button></div>
                    <div className="col"><button onClick ={addSix}>6</button></div>
                    <div className="col"><button onClick ={setAdd}>+</button></div>
                </div>
                <div className="row">
                    <div className="col"><button onClick = {addOne}>1</button></div>
                    <div className="col"><button onClick ={addTwo}>2</button></div>
                    <div className="col"><button onClick ={addThree}>3</button></div>
                    <div className="col"><button onClick ={setEqual}>=</button></div>
                </div>
                <div className="row">
                    <div className="col-6"><button onClick ={addZero}>0</button></div>
                    <div className="col-3"><button onClick ={setDecimal}>.</button></div>
                    <div className='col-3'></div>  
                </div>
            </div>
        )
    }
}
/* Mapping state to redux store */
const mapStateToProps = (state) => {
    return{
        storeTotal:state.total,
        storeArray:state.numberArray,
    }
}
/* anonymous ascynch function dispatching the action creator
 to the redux store reducer */
const mapDispatchToProps = (dispatch) => {
    return{
        reset:() => {dispatch({type:'RESET'})},
        division:() => {dispatch({type:'DIVISION'})},
        multiply:() => {dispatch({type:'MULTIPLY'})},
        equal:() => {dispatch({type:'EQUAL'})},
        add:() => {dispatch({type:'ADD'})},
        decimal:() => {dispatch({type:'DECIMAL'})},
        subtract:() => {dispatch({type:'SUBTRACT'})},
        addZero:() => {dispatch({type:'ZERO'})},
        addOne:() => {dispatch({type:'ADDONE'})},
        addTwo:() => {dispatch({type:'ADDTWO'})},
        addThree:() => {dispatch({type:'ADDTHREE'})},
        addFour:() => {dispatch({type:'ADDFOUR'})},
        addFive:() => {dispatch({type:'ADDFIVE'})},
        addSix:() => {dispatch({type:'ADDSIX'})},
        addSeven:() => {dispatch({type:'ADDSEVEN'})},
        addEight:() => {dispatch({type:'ADDEIGHT'})},
        addNine:() => {dispatch({type:'ADDNINE'})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CalculatorContainer)
