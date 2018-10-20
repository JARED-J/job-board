import React, {Component} from 'react';
import JobCardCollections from './JobCardCollection';

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "linkedin":false,
            "indeed":false,
            "role": null,
            "location": null,
            "jobArray": []
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleButtonClick(e){
        const name = e.target.name;
        this.setState((prevState, props) => {
            return {[name]: !prevState[name]}
        });
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState((prevState, props) => {
            return {[name]: value}
        })
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <p>Choose which sites you would like to search</p>
                    <button name="indeed" onClick={(e) => this.handleButtonClick(e)}>Indeed.com</button>
                    <button name="linkedin" onClick={(e) => this.handleButtonClick(e)}>Linkedin</button>
                    <form>
                        <label>
                            Desired Role:
                            <input
                            name="role"
                            onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Location:
                            <input
                            name="location"
                            onChange={this.handleInputChange} />
                        </label>
                    </form>
                </React.Fragment>
                <JobCardCollections props={this.state}/>
            </div>
        )
    }
}