import React, {Component} from 'react';

export default class JobCard extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        // TODO::<< add modal functionality w/job summary
    }

    render() {
        const job = this.props.job;
        return (
            <React.Fragment onClick={(e) => this.handleClick(e)}>
                <ul>
                    <li>{job.website}</li>
                    <li>{job.role}</li>
                    <li>{job.location}</li>
                </ul>
            </React.Fragment>
        )
    }
}