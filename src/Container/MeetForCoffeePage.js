import React, { Component } from 'react'
import './Styles/LetsTalk.scss';
import ToastMessage from '../Components/ToastMessage'
 class MeetForCoffeePage extends Component {
     constructor(props) {
         super(props);
         this.state = {
            name:"",
            email:"",
            textArea:"",
            openToast: false,
            toastMsg: ''
         }
     }
     checkForValidation = () =>{
        //  let { name, email, textArea} = this.state
          if(this.state.name.length < 1)
          {
              console.log("name")
              this.setState({
                  toastMsg:"name field is required",
                  openToast: true
              })
          }
         if (this.state.email.length < 1)
         {
             this.setState({
                 toastMsg: "Email field is required",
                 openToast: true
             })
         }
         if (this.state.textArea.length < 1) {
             this.setState({
                 toastMsg: "please write your enquiry",
                 openToast: true
             })
         }
         else{
             this.setState({
                 toastMsg: "your details posted successfully",
                 openToast: true
             })
         }
     }
     handleNameChange = (event) =>{
         this.setState({
             name:event.target.value
         })
     }

     handleCloseToast = () => {
         this.setState({ openToast: false, toastMsg: '' })
     }
    render() {
        const {isButtonClicked} = this.props;
        let { name, email, textArea, toastMsg, openToast} = this.state
        return (
            <div className="meetForCoffePattern">
                <h2 className="weLikeCofee">We like coffee too! ☕️</h2>
                <div className="parentCoffee">
                    <div className="personalDetails">
                        <h4 className="margin-xxs-bottom">Personal details</h4>
                        <input 
                           type="text" 
                           className="inputStyle" 
                           onChange={e => this.setState({ name: e.target.value})}
                           placeholder="Name" id="name"/>
                        <input 
                           type="text"
                           className="inputStyle"  
                           placeholder="Email" 
                           onChange={e => this.setState({ email: e.target.value })}
                           id="Email" />
                    </div>
                    <div className="sendEnquiryPattern">
                        <textarea 
                           className="textArea" 
                           value={textArea}
                           onChange={e => this.setState({ textArea: e.target.value })}
                           placeholder="What do you want to talk about?"/>
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
export default MeetForCoffeePage
