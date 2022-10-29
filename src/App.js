import React,{Component} from "react";
import General from "./components/General.js";
import Education from "./components/Education.js";
import Career from "./components/Career.js";
import Display from "./components/Display.js";
import './style.css';
class App extends Component { //forget using templates, just use name to slot in array and feed it to three keys
    constructor(){
        super();
        this.state = {
            general:{
                name:"",
                email:"",
                phone:"",
                address:"",
                img:""
            },
            education:{
                name:"",
                title:"",
                date:""
            },
            career:{
                name : "",
                title : "",
                description : "",
                start : "",
                end : ""
            },
            display:false,
            
        }; 
    }
    // clearState = () => {
    //     let arr = Object.keys(this.state).slice(0,Object.values(this.state).length-1);
    //     arr.forEach(el => Object.keys(this.state[el]).forEach(e=>{
    //         let obj = this.state[el];
    //         this.setState({[e]:""});
    //         console.log(obj,e)
    //     })) 
    // }
    changeState = (key,val) => {
        this.setState({[key] : val});
        // console.log(Object.values(this.state),Object.values(this.state).slice(0,Object.values(this.state).length-1).every(el=>Object.values(el).length>0))
    }
    onSub = (e) =>{
        if(Object.values(this.state).slice(0,Object.values(this.state).length-1).every(el=>Object.values(el).length>0)){
            this.setState({display:true})
            e.preventDefault();
        }
    }
    render(){
        const {general,education,career} = this.state
        console.log(this.state)
        if(!this.state.display){
            return(
                <form id="parent">
                    <General general={general} changeState={this.changeState}/>
                    <Education education={education} changeState={this.changeState}/>
                    <Career career={career} changeState={this.changeState}/>
                    <button className="formChildren" type="submit" id="sub" onClick={this.onSub}>Submit</button>
                </form>
            )
        } else{
            return( //clear={this.clearState}
                <Display changeState={this.changeState} info={this.state}/>
            );
        }
    }
}
export default App;