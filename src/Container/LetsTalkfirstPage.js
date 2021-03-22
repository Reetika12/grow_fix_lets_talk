import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import './Styles/LetsTalk.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';
import MeetForCoffeePage from './MeetForCoffeePage';


const CustomRadio = withStyles({
    root: {
        color: '#fff',
        '&$checked': {
            color: '#fff',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);



class LetsTalkfirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: "",
            isButtonClick: false,
            nextDisable: false
        }
    }
    handleRadioTagOption = (event) => {
        this.setState({
            selectedItem: event.target.value,
            nextDisable:true
        })
    }
    gotoSelectedPage = () => {
        let { selectedItem } = this.state
        this.setState({
            isButtonClick: true
        })
        this.props.handlePageChange(selectedItem)
    }

    render() {
        let { isButtonClick, nextDisable} = this.state
        return (
            <div className="mainPage">
                <Grid className={isButtonClick ? "letsTalkTransition" : "letsTalk"} container spacing={3}>
                    <Grid className="letsTalkGridStyle" item xs={12} sm={6}>
                    
                    </Grid>
                    <Grid className="letsTalkSecond" item xs={12} sm={6}>
                        <div className="inner-first-screen">
                            <h2 className="overlay-name">Let’s talk.</h2>
                            <p className="ptag-style">
                                Share your excitement with us.
                            <br />
                                <a className="link link-animation white" id="contact" href="mailto:info@yummygum.com">
                                    info@yummygum.com
                            </a>
                            </p>
                            <div className="radioTagOptions">
                                <h4 className="margin-xxs-bottom">Let's talk about</h4>
                                <RadioGroup aria-label="radiotype" name="radiotype" onChange={this.handleRadioTagOption}>
                                    <FormControlLabel id="great_project" value="great_project" control={<CustomRadio />} label="Your great project" />
                                    <FormControlLabel id="meet_for_coffee" value="meet_for_coffee" control={<CustomRadio />} label="Meeting for a coffee" />
                                    <FormControlLabel id="birds_and_bees" value="birds_and_bees" control={<CustomRadio />} label="Birds and bees" />
                                    <FormControlLabel id="plan_a_video_call" value="plan_a_video_call" control={<CustomRadio />} label="Plan a video call" />
                                </RadioGroup>
                                <div style={{marginTop:"15px"}}>
                                    <button type="button" id="go" disabled={!nextDisable} onClick={this.gotoSelectedPage} className="btn">Next</button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LetsTalkfirstPage
