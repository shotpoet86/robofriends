import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Program encountered an error!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;