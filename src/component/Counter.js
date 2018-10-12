import React from "react";
import Button from "./Button.js"
import Form from './Form.js'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0,
                       message: "Hello Wyncode" };
    }
	
    incrementCount = () => {
		this.setState(
            { count: this.state.count + 1 }
        );
    };
    
    changeMessage = (message) => {
        this.setState(
            {message: message}
        )
    }
	
    render() {
        return (
            <div>
                <Form foo={this.changeMessage}/>
                <h1>{this.state.message}</h1>
                <h2>
                    You clicked {this.state.count} Times
                </h2>
                <Button 
                    handleClick={this.incrementCount}>               
                </Button>  

                
            </div>
        );
    }
}

export default Counter