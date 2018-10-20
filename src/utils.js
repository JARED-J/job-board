async function linkedin(role, loc){
    // Function maps out query for linkedin api call

    fetch()
        .then((jobs) => {
            const newState = { ...this.state.jobArray, "jobArray": jobs};
            this.setState({ "jobArray": newState});
        })        
}


async function indeed(role, loc){
    // Function maps out query for indeed api call

    fetch()
        .then((jobs) => {
            const newState = { ...this.state.jobArray, "jobArray": jobs};
            this.setState({ "jobArray": newState});
        })  
}

export default {
    linkedin,
    indeed
}