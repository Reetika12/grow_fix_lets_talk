import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

 class MeetForCoffeePage extends Component {
    render() {
        const {isButtonClicked} = this.props;
        return (
                <div  >
                    {/* <Grid style={{ background: "#58c7ff", color: "#fff", height: "100vh", overflow: "hidden" }} > */}
                        <h2>We like coffee too! ☕️</h2>
                    {/* </Grid> */}
                </div>
        )
    }
}
//meetForCoffee
export default MeetForCoffeePage
