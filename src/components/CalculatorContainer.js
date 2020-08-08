import React, { Component } from 'react'
import {connect} from 'react-redux'
import ContainerStyle from './ContainerStyle.css'

class CalculatorContainer extends Component {

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

        /* Button styling */
        const styleButton = {
            border:'.1px solid black',
            background:'var(--darkGray)'
        }
        /* Layout Logo styling */
        const coolLayout = {
            position:'relative',
            top:'-40px'
        }
        /* JSX Calculator Container*/
        return(
            <div>
                <div style = {coolLayout}>
                    <h1 className = 'coolStyle'>Cool Calculator</h1>
                </div>
                <div className="container">
                    <div className="row col-result-layout">
                <div className="col-12 col-subresult">{(displayArray[0] === '0' ? displayResult: displayResult ? `${displayArray}=${displayResult}` : displayArray)}</div>
                    <div className="col-12 ">{displayResult}</div>
                </div>
                <div className="row r1">
                    <div className="col-6 ac-div" ><button className ='ac-style' onClick = {setReset}>AC</button></div>
                    <div className="col-3" style= {styleButton}><button className = 'division-style' onClick ={setDiv}>/</button></div>
                    <div className="col-3 multi" style= {styleButton}><button className ='mult-style' onClick ={setMultiply}>x</button></div>
                </div>
                <div className="row r2">
                    <div className="col-3" style= {styleButton}><button className='dig-seven' onClick ={addSeven}>7</button></div>
                    <div className="col-3" style= {styleButton}><button className='dig-eight' onClick ={addEight}>8</button></div>
                    <div className="col-3" style= {styleButton}><button className='dig-nine' onClick ={addNine}>9</button></div>
                    <div className="col-3" style= {styleButton}><button className='op-sub' onClick ={setSubtract}>-</button></div>
                </div>
                <div className="row r3">
                    <div style= {styleButton} className="col-3"><button className='dig-four' onClick ={addFour}>4</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-five' onClick ={addFive}>5</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-six' onClick ={addSix}>6</button></div>
                    <div style= {styleButton} className="col-3"><button className='op-add' onClick ={setAdd}>+</button></div>
                </div>
                <div className="row r4">
                    <div style= {styleButton} className="col-3"><button className='dig-one' onClick = {addOne}>1</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-two' onClick ={addTwo}>2</button></div>
                    <div style= {styleButton} className="col-3"><button className='dig-three' onClick ={addThree}>3</button></div>
                    <div className="col-3 op-equalDiv"><button className='op-equal' onClick ={setEqual}>=</button></div>
                </div>
                <div style = {{paddingBottom:'3.2px'}} className="row r5">
                    <div className="col-6 dig-zeroDiv"><button className='dig-zero' onClick ={addZero}>0</button></div>
                    <div style= {styleButton} className="col-3"><button className='op-dec' onClick ={setDecimal}>.</button></div>
                    <div className='deadCell'><button className = 'op-enter' onClick ={setEqual}>Enter</button></div>
                </div>
                <div className ='authorDiv'>
                    <br></br>
                    <h5 className ='authorStyle'>Designed and Coded By</h5>
                    <h5 className ='authorStyle'>Cristian C. Castillo</h5>
                </div>
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
