import React,{Component} from "react";
class Education extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     name : "",
        //     title : "",
        //     date : ""
        // };
        this.state = this.props.education;
        console.log(this.state);
        this.count = 1;
    } 
    // add = () => {
    //     this.count += 1;
    //     let obj = this.state[this.count];
    //     this.setState({obj:{ // not sure if nescessary
    //         name : "",
    //         title : "",
    //         date : ""
    //     }});
    // };
    type = e => {
        let data = e.target.getAttribute("data-type");
        let pos = e.target.parentElement.parentElement.getAttribute("data-num");
        let obj = this.state[pos-1][data];
        console.log(obj);
        this.setState({obj : e.target.value});
        this.props.changeState("education",this.state);
    };
    render(){
        const template = (
            <div data-num={this.count} className="formChildren" style={{backgroundColor:"lightGreen"}}>
                <div>
                    <label>School Name: </label>
                    <input onChange={this.type} data-type="name" value={this.state.name}/>
                </div>
                <div>
                    <label>Title of Study: </label>
                    <input onChange={this.type} data-type="title" value={this.state.title}/>
                </div>
                <div>
                    <label>Graduation Date: </label>
                    <input onChange={this.type} type="date" data-type="date" value={this.state.date}/>
                </div>
            </div>
        );
        return(
            <div className="formChildren" style={{backgroundColor:"lightGreen"}}>
                <h2>Education: </h2>
                {template}
                {/* {[...Array(this.count).keys()].map(el => template)} */}
                {/* <button onClick={this.add}>Add</button> */}
            </div>
        );
    }
} 
export default Education;