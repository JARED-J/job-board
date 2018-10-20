import React from 'react';
import JobCard from './JobCard';

export default function JobCardCollections(props) {
    let jobs = props.jobArray;
    return (
        <div>
            <ul>
                <li>Website</li>
                <li>Role</li>
                <li>Location</li>
            </ul>
            {
                Array.isArray(jobs) && jobs.length && jobs.map(job => (
                <JobCard job={job} key={job}/>
            ))} 
        </div>
    )
}