import React, { Component } from 'react'
import './Styles/LetsTalk.scss';
import ToastMessage from '../Components/ToastMessage'

class BirdsAndBees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            textArea: "",
            openToast: false,
            toastMsg: '',
        }
    }
    checkForValidation = () => {
        let { name, email, textArea } = this.state
        if (!name) {
            this.setState({
                toastMsg: "name field is required",
                openToast: true
            })
            return;
        }
        if (!email) {
            this.setState({
                toastMsg: "Email field is required",
                openToast: true
            })
            return;
        }
        if (!textArea) {
            this.setState({
                toastMsg: "please write your enquiry",
                openToast: true
            })
            return;
        }
        this.setState({
            toastMsg: "your details posted successfully",
            openToast: true
        })
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCloseToast = () => {
        this.setState({ openToast: false, toastMsg: '' })
    }

    render() {
        let { name, email, textArea, toastMsg, openToast } = this.state
        return (
            <div className="meetForCoffePattern">
                <h2 className="weLikeCofee">Whats on your mind!</h2>
                <div className="parentCoffee">
                    <div className="personalDetails">
                        <h4 className="margin-xxs-bottom">Personal details</h4>
                        <input
                            type="text"
                            className="inputStyle"
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}
                            placeholder="Name" id="name" />
                        <input
                            type="text"
                            className="inputStyle"
                            placeholder="Email"
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            id="Email" />
                    </div>
                    <div className="sendEnquiryPattern">
                        <textarea
                            className="textArea"
                            value={textArea}
                            onChange={e => this.setState({ textArea: e.target.value })}
                            placeholder="Tell us about you..." />
                        <button type="button" id="go" onClick={this.checkForValidation} className="SendEnquiry">Send Enquiry</button>
                    </div>
                </div>
                <ToastMessage
                    open={openToast}
                    handleClose={this.handleCloseToast}
                    message={toastMsg}
                />
            </div>
        )
    }
}
export default BirdsAndBees
