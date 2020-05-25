import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {hasError: false}
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if (this.props.hasError){
            return <h1>Opps there is a error</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;