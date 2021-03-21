import React, { Component } from 'react'
import FormicForm from './FormicForm'
import Grid from '@material-ui/core/Grid';
import './Styles/LetsTalk.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';


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
    render() {
        return (
                <Grid container spacing={3}>
                    <Grid style={{ background: "black", height: "120vh" }}item xs={12} sm={6}>
                    </Grid>
                    <Grid style={{ background: "#58c7ff", color: "#fff", height: "120vh"}}item xs={12} sm={6}>
                    <div className="inner-first-screen">
                        <h2 className="overlay-name">Let’s talk.</h2>
                        <p className="ptag-style">
                            Share your excitement with us.
                            <br/>
                            <a className="link link-animation white" id="contact" href="mailto:info@yummygum.com">
                             info@yummygum.com
                            </a>
                        </p>
                        <div className="radioTagOptions">
                            <h4 className="margin-xxs-bottom">Let's talk about</h4>
                             <RadioGroup aria-label="coursetype"  name="coursetype" onChange={this.handleChangeCourseType}>
                                <FormControlLabel id="one_to_mega" value="one_to_mega" control={<CustomRadio />} label="Your great project" />
                                <FormControlLabel id="one_to_many" value="one_to_many" control={<CustomRadio />} label="Meeting for a coffee" />
                                <FormControlLabel id="one_to_mega" value="one_to_mega" control={<CustomRadio />} label="Birds and bees" />
                                <FormControlLabel id="one_to_mega" value="one_to_mega" control={<CustomRadio />} label="Plan a video call" />
                            </RadioGroup>
                            <button type="button" id="go" className="btn btn-primary btn-white">Next</button>
                        </div>
                    </div>
                    </Grid>
                </Grid>
        )
    }
}

export default LetsTalkfirstPage
