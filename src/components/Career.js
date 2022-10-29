import React,{Component} from "react";
class Career extends Component{
    constructor(props){
        super(props);
        this.count = 1;
        this.state = this.props.career;
    }
    type = e => {
        let data = e.target.getAttribute("data-type");
        this.setState({[data]:e.target.value});
        this.props.changeState("career",this.state);
      }; 
    render(){ 
        const template = (<div data-num={this.count} className="formChildren" style={{backgroundColor:"orange"}}>
        <div>
            <label>Company Name: </label>
            <input onChange={this.type} data-type="name"  value={this.state.name}/>
        </div>
        <div>
            <label>Position Title: </label>
            <input onChange={this.type} data-type="title" value={this.state.title}/>
        </div>
        <div>
            <label>Description: </label>
            <input onChange={this.type} data-type="description" value={this.state.description}/>
        </div>
        <div>
            <label>Start: </label>
            <input onChange={this.type} type="date" data-type="start" value={this.state.start}/>
            <label>End: </label>
            <input onChange={this.type} type="date" data-type="end" value={this.state.end}/>
        </div>
     </div>);
        return(
            <div className="formChildren" style={{backgroundColor:"orange"}}>
                <h2>Career:</h2>
                {template}
             </div>
        );
    }
} 
export default Career;