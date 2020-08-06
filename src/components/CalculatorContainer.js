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

        /*Button styling */
        const styleButton = {
            backgroundColor:'rgb(193, 196, 211)',
            border:'.1px solid black'
        }
        const styleButtonEq = {
            backgroundColor:'rgb(193, 196, 211)',
            border:'.1px solid black',
            borderTop:'none'
        }

        const styleButtonEqTwo = {
            backgroundColor:'rgb(193, 196, 211)',
            border:'.1px solid black',
            borderBottom:'none',
        }

        /* Calculator Container*/
        return(
            <div className="container">
                <div className="row col-result-layout">
                <div className="col-12 col-subresult">{displayArray}</div>
                    <div className="col-12 ">{displayArray}</div>
                </div>
                <div style= {{backgroundColor:'yellow',}}className="row">
                    <div className="col-6" style= {{border:'.5px solid black',backgroundColor:'rgb(221, 62, 97)',}}><button className ='ac-style' onClick = {setReset}>AC</button></div>
                    <div className="col-3" style= {styleButton}><button className = 'division-style' onClick ={setDiv}>/</button></div>
                    <div className="col-3" style= {styleButton}><button className ='mult-style' onClick ={setMultiply}>x</button></div>
                </div>
                <div className="row">
                    <div className="col-3" style= {styleButton}><button className='dig-seven' onClick ={addSeven}>7</button></div>
                    <div className="col-3" style= {styleButton}><button className='dig-eight' onClick ={addEight}>8</button></div>
                    <div className="col-3" style= {styleButton}><button className='dig-nine' onClick ={addNine}>9</button></div>
                    <div className="col-3" style= {styleButton}><button className='op-sub' onClick ={setSubtract}>-</button></div>
                </div>
                <div className="row">
                    <div style= {styleButton} className="col-3"><button className='dig-four' onClick ={addFour}>4</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-five' onClick ={addFive}>5</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-six' onClick ={addSix}>6</button></div>
                    <div style= {styleButton} className="col-3"><button className='op-add' onClick ={setAdd}>+</button></div>
                </div>
                <div className="row">
                    <div style= {styleButton} className="col-3"><button className='dig-one' onClick = {addOne}>1</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-two' onClick ={addTwo}>2</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-three' onClick ={addThree}>3</button></div>
                    <div style= {styleButtonEqTwo} className="col-3"><button className='op-equal' onClick ={setEqual}>=</button></div>
                </div>
                <div className="row">
                    <div style= {styleButton} className="col-6"><button className='dig-zero' onClick ={addZero}>0</button></div>
                    <div style= {styleButton} className="col-3"><button className='op-dec' onClick ={setDecimal}>.</button></div>
                    <div style= {styleButtonEq} className='col-3'></div>  
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
