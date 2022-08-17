import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            thestatus: "on",
            counter: 0
        };
        this.switchlight = this.switchlight.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    switchlight (){
        if (this.state.thestatus === "on"){
            this.setState({thestatus: "off"});
        }
        else{
            this.setState({thestatus: "on"});
        }
    }

    increaseCounter(){
        const afterincrease = this.state.counter +1;
        const newstateobj = {
            counter: afterincrease
        }
        this.setState(newstateobj);
    }

    buttonClicked() {
        console.log("button got clicked in personCard")
        this.props.whenclick(this.props.person.id);
    }


    render(){
        return(
            <div>
                <h2>{this.props.person.firstName} {this.props.person.lastName}</h2>
                <h5>Age: {this.props.person.age}</h5>
                <h5>Hair Color: {this.props.person.hairColor}</h5>
                {/* <p>The light is currently {this.state.thestatus}</p>
                <button onClick={this.switchlight}>switch</button>
                <p>The counter is: {this.state.counter}</p>
                <button onClick= {this.increaseCounter}>increase counter</button> */}

                <button onClick={this.buttonClicked}>Birthday button</button>
            </div>
        );
    }
}

export default PersonCard;