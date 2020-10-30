
import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import Finalpage from './FinalPage';

class MainPage extends Component {
    state = { 
        step: 1,
        firstpage: { address_Line_1: "", address_Line_2: "", postcode: "", city: "", state: "", country: "" },
        secondpage: {        Package_details: "",
        Package_weight: "",
        Package_width: "",
        Package_height: "",
        Package_length: "",},
        thirdpage:{ address_Line_1: "", address_Line_2: "", postcode: "", city: "", state: "", country: "" }
    }
    nextStep = (data) => {
        const { step } = this.state
       switch (step) {
           case 1:
            this.setState({
            firstpage:data
            })   
               break;
               case 2:
                this.setState({
                secondpage:data
                })   
               break;
               case 3:
                this.setState({
                thirdpage:data
                })   
                   break;
           default:
               break;
       }
        this.setState({
            step: step + 1,

        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }
        reset = () => {
            this.setState({
                step :1
            })
    } 
    
    render() { 
        switch(this.state.step) {
            case 1:
                return <FirstPage nextStep={this.nextStep} data={this.state.firstpage}/>
            case 2:
                return <SecondPage nextStep={this.nextStep}
                prevStep={this.prevStep} data={this.state.secondpage}/>
            case 3:
                return <ThirdPage nextStep={this.nextStep}
                    prevStep={this.prevStep} data={this.state.thirdpage} />
            case 4:
                return <FourthPage nextStep={this.nextStep}
                    prevStep={this.prevStep} data={this.state} />
            case 5:
                return <Finalpage reset={this.reset}  data={this.state.step}/>
            default:
                return <Finalpage reset={this.reset} data={this.state.step}/>
            }

    }
}
 
export default MainPage;