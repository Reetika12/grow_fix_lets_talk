import React, { Component } from 'react'
import './Styles/LetsTalk.scss';
import ToastMessage from '../Components/ToastMessage'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const CustomRadio = withStyles({
    root: {
        color: '#fff',
        '&$checked': {
            color: '#fff',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);



class YourGreatProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            company:"",
            email: "",
            Budget:"",
            textArea: "",
            openToast: false,
            toastMsg: '',
        }
    }
    checkForValidation = () => {
        let { name, email, company,Budget,textArea } = this.state
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
        if (!company) {
            this.setState({
                toastMsg: "Email field is required",
                openToast: true
            })
            return;
        }
        if (!Budget) {
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
        let { name, email, textArea, company, Budget, toastMsg, openToast } = this.state
        return (
            <div style={{ display: "flex", flexDirection: "column", background: "#58c7ff",color:"#fff"}}>
                <h2 className="leftBarstyle">Let's craft your product.</h2>
                <Grid style={{ alignItems: 'baseline', padding:"0px 80px"}}container spacing={3}>
                    <Grid style={{ alignItems: "center",height: "120vh", overflow: "hidden",display:"flex",flexDirection:"column"}} item xs={12} sm={3}>
                        <h4 className="margin-xxs-bottom">Timeframe</h4>
                        <RadioGroup aria-label="radiotype" name="radiotype" onChange={this.handleRadioTagOption}>
                            <FormControlLabel id="great_project" value="great_project" control={<CustomRadio />} label="1 month" />
                            <FormControlLabel id="meet_for_coffee" value="meet_for_coffee" control={<CustomRadio />} label="2-3 months" />
                            <FormControlLabel id="birds_and_bees" value="birds_and_bees" control={<CustomRadio />} label="4+ months" />
                        </RadioGroup>
                        <div>
                            <h4 className="margin-xxs-bottom">Project type</h4>
                            <label className="container">Desktop
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Web
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Mobile
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Other
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </Grid>
                    <Grid style={{ overflow: "hidden", height: "120vh" }} item xs={12} sm={5}>
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
                                value={company}
                                onChange={e => this.setState({ company: e.target.value })}
                                placeholder="Company" id="company" />
                            <input
                                type="text"
                                className="inputStyle"
                                placeholder="Email"
                                value={email}
                                onChange={e => this.setState({ email: e.target.value })}
                                id="Email" />
                            <input
                                type="text"
                                className="inputStyle"
                                placeholder="Budget"
                                value={Budget}
                                onChange={e => this.setState({ Budget: e.target.value })}
                                id="Budget" />
                        </div>
                        
                    </Grid>
                    <Grid style={{ overflow: "hidden", height: "120vh" }} item xs={12} sm={4}>
                        <div className="sendEnquiryPattern">
                            <textarea
                                className="textArea"
                                value={textArea}
                                onChange={e => this.setState({ textArea: e.target.value })}
                                placeholder="Tell us more about project..." />
                            <button type="button" id="go" onClick={this.checkForValidation} className="SendEnquiry">Send Enquiry</button>
                        </div>
                    </Grid>
                </Grid>
                <ToastMessage
                    open={openToast}
                    handleClose={this.handleCloseToast}
                    message={toastMsg}
                />
            </div>
        )
    }
}
export default YourGreatProject
