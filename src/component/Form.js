import React from "react";

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.foo(this.state.value)        
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              New Message:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }


    
}

export default Form