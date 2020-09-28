import React, { Component } from 'react';
import { Form} from 'reactstrap'; 
import Step1 from './FirstPageComponent';
import Step2 from './SecondPageComponent';
import Step3 from './ThirdPageComponent';
import Header from './HeaderComponent';

class MasterForm extends Component {
    constructor(props) {
      super(props)

      this.state = {
        currentStep: 1, 
        first:0,
        second:0,
        third:0,
        fourth:0,
        fifth:0,
        sixth:0,
        seventh:0,
        eighth:0,
        nineth:0,
        tenth:0,
        elewenth:0,
        twelth:0,
       totalScore:0   
      }
   
      this.handleChange = this.handleChange.bind(this)
      this._next = this._next.bind(this)
      this._prev = this._prev.bind(this)
    }
  
    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
   
    handleChange(event) {
      let {name,value} = event.target  
      this.setState({
       [name]: parseInt(value)
      })    
      this.calculateScore()
    }

    calculateScore=()=>{
      let {first,second,third,fourth,fifth,sixth,seventh,eighth,nineth,tenth,elewenth,twelth} = this.state
       this.setState({totalScore : first+second+third+fourth+fifth+sixth+seventh+eighth+nineth+tenth+elewenth+twelth})
      
     }
    

    handleSubmit = (event) => {
      event.preventDefault()
      const score=this.state.totalScore
     
        if(score <= 33){
            alert("Your Assessment Score  is Bad")
        }else if( score <= 66){
          alert("Your Assessment Score is good")
        }else if(score>66){
          alert("Your Assessment Score  is Excellent")
        }
  
     
    }
    // shouldComponentUpdate(nextProps, nextState) { 
    //   if (!this.handleSubmit) { 
    //     return false;
    //   }
    //   return true;
    // }
    get previousButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if(currentStep !==1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        // ...else return nothing
        return null;
      }
      
      get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep <3){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        // ...else render nothing
        return null;
      }
  
    render() {    
            return (
                <React.Fragment>
                  <Header score={this.state.totalScore} />
                    <div className="container">
                        <Form onSubmit={this.handleSubmit}>
                    
                                
                                <Step1 
                                    currentStep={this.state.currentStep} 
                                    handleChange={this.handleChange}
                                    score={this.state}
                                />
                                <Step2 
                                    currentStep={this.state.currentStep} 
                                    handleChange={this.handleChange}
                                    username={this.state}
                                />
                                <Step3 
                                    currentStep={this.state.currentStep} 
                                    handleChange={this.handleChange}
                                    password={this.state}
                                />  
                                <div className="mt-3">
                                    {this.previousButton}
                                    {this.nextButton}
                                </div>     
                               
                        </Form>
                    </div>
                  
                </React.Fragment>
            )
        }
  }

  export default MasterForm;