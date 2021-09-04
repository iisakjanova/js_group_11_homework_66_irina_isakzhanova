import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import withLoader from "../../hoc/withLoader";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: '',
        };
    }

    sendErrorInfo(info) {
        const date = new Date();
        axiosApi.post('/errors.json', {
            date,
            info
        });
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, errorMessage: error});
        this.sendErrorInfo(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Something wrong happened</div>
        } else {
            return  this.props.children
        }
    }
}

export default withLoader(ErrorBoundary, axiosApi);