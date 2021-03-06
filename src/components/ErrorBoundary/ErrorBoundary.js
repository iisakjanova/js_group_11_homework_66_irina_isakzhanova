import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import withLoader from "../../hoc/withLoader";

import './ErrorBoundary.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: '',
            errorInfo: '',
        };
    }

    sendErrorInfo(info) {
        const date = new Date();
        axiosApi.post('/errors.json', {
            date,
            info,
        });
    }

    returnToHome = () => {
        this.sendErrorInfo(this.state.errorInfo);
        this.props.history.replace('/');
        this.setState({
            hasError: false,
            errorMessage: '',
            errorInfo: '',
        });
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            errorMessage: error,
            errorInfo: errorInfo.componentStack,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="ErrorText">
                    <h1>Something wrong is happened</h1>
                    <button onClick={this.returnToHome}>Return to home page</button>
                    <p>*Error data will be sent on server for analise.</p>
                </div>
            )
        } else {
            return this.props.children;
        }
    }
}

export default withLoader(ErrorBoundary, axiosApi);