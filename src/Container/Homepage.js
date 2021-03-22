import React from 'react';
import LetsTalkPage from './LetsTalkfirstPage'
import MeetForCoffeePage from './MeetForCoffeePage'
import BirdsAndBees from './BirdsAndBees'
import PlanaVideoCall from './PlanaVideoCall'
import YourGreatProject from './YourGreatProject'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "main",
            selectedSubjectPie: ""
        };
    }
    handlePageChange = (page) => {
        this.setState({
            page
        })
    }
    componentDidMount() {
        if (typeof (window) != "undefined") {
            window.scrollTo(0, 0);
        }
    }
    render() {
        const { page } = this.state
        return (
            <div>
                {page === "main" && <LetsTalkPage handlePageChange={this.handlePageChange} />}
                {page === "meet_for_coffee" && <MeetForCoffeePage handlePageChange={this.handlePageChange} />}
                {page === "great_project" && <YourGreatProject handlePageChange={this.handlePageChange} />}
                {page === "birds_and_bees" && <BirdsAndBees handlePageChange={this.handlePageChange} />}
                {page === "plan_a_video_call" && <PlanaVideoCall handlePageChange={this.handlePageChange} />}
            </div>
        );
    }
}
export default HomePage;