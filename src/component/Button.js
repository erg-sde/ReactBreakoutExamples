import React from "react";


class Button extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handleClick.bind(this)} >
                    Click Me! 
                </button>
            </div>
        )
    }
}

export default Button