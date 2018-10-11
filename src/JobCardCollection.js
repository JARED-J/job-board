import React, {Component} from 'react';
import JobCard from './JobCard';

export default class JobCardCollections extends Component {
    constructor(props){
        super(props)
        // TODO: add functionality
    }

    render() {
        let jobs = this.props.jobArray;
        return (
            <div>
                <ul>
                    <li>Website</li>
                    <li>Role</li>
                    <li>Location</li>
                </ul>
                {Array.isArray(jobs) && jobs.map(job => (
                    <JobCard job={job} key={job}/>
                ))} 
            </div>
        )
    }
}