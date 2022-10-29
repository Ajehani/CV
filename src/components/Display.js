import React,{Component} from "react";
class Display extends Component{
    constructor(props){
      super(props); 
      this.state = {}; 
    }
    click = () => {
        // this.props.clear();
        this.props.changeState("display",false);
    }
    render(){
        const {general,education,career} = this.props.info
        return(
            <div id="disp">
                <div id="wrapper">
                    <div id="banner">
                        <h3>{general.name}</h3>
                        <img src={general.img} alt="Good MAN" height="160" width="160"></img>
                        <div className="displayChild">
                            <div><u>Contact:</u></div>
                            <hr></hr>
                            <div className="contactChild"><span>Address: </span>{general.address}</div>
                            <div className="contactChild"><span>Phone: </span>{general.phone}</div>
                            <div className="contactChild"><span>Email: </span>{general.email}</div>
                        </div>
                    </div>
                </div>
                <div id="DisplayParent">
                    {/* {[...Array(this.count).keys()].map((el,ind) => */}
                    <div className="displayChild" id="education">
                        <h2><u>Education:</u></h2>
                        <div><span>School Name: </span>{education.name}</div>
                        <div><span>School Accolades: </span>{education.title}</div>
                        <div><span>Graduation Date: </span>{education.date}</div>
                    </div>
                    {/* )} */}
                    <div className="displayChild" id="career">
                    <h2><u>Career:</u></h2>
                    <div><span>Company Name: </span>{career.name}</div>
                        <div><span>Company Title: </span>{career.title}</div>
                        <div><span>Description: </span>{career.description}</div>
                        <div><span>Began: </span>{career.start}</div>
                        <div><span> End: </span>{career.end}</div>
                    </div>
                    <button id="edit" onClick={this.click}>Edit</button>
                </div>
            </div>
        )
    }
}
export default Display