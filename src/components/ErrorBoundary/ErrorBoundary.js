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

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            errorMessage: error,
            errorInfo: errorInfo.componentStack,
        });
        this.sendErrorInfo(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div className="ErrorText">
                <p>Something wrong is happened</p>
                <p>{this.state.errorInfo}</p>
                <p>Error data is sent on server for analise.</p>
            </div>
        } else {
            return  this.props.children
        }
    }
}

export default withLoader(ErrorBoundary, axiosApi);