import React, {Component} from 'react';

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "linkedin":false,
            "indeed":false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        const target = e.target;
        const name = target.name;
        this.setState({
            [name]: !this.state[name]
        });
    }

    render() {
        return (
            <div>
                <p>Choose which sites you would like to search</p>
                <button name="indeed" onClick={(e) => this.handleClick(e)}>Indeed.com</button>
                <button name="linkedin" onClick={(e) => this.handleClick(e)}>Linkedin</button>
            </div>
        )
    }
}

