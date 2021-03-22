import React, { Component } from 'react'
import './Styles/LetsTalk.scss';

 class MeetForCoffeePage extends Component {
    render() {
        const {isButtonClicked} = this.props;
        return (
            <div className="meetForCoffePattern">
                <h2 className="weLikeCofee">We like coffee too! ☕️</h2>
                <div className="parentCoffee">
                    <div className="personalDetails">
                        <h4 className="margin-xxs-bottom">Personal details</h4>
                        <input type="text" className="inputStyle"  placeholder="Name" id="name"/>
                        <input type="text" className="inputStyle"  placeholder="Email" id="Email" />
                    </div>
                    <div className="sendEnquiryPattern">
                        <textarea className="textArea" required="required" name="purpose" placeholder="What do you want to talk about?"></textarea> 
                        <button type="button" id="go" onClick={this.gotoSelectedPage} className="SendEnquiry">Send Enquiry</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default MeetForCoffeePage
