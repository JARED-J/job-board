export async function linkedinFetch(role, loc){
    // Function maps out query for linkedin api call

    fetch()
        .then((jobs) => {
            const newState = { ...this.state.jobArray, "jobArray": jobs};
            this.setState({ "jobArray": newState});
        })        
}


export async function indeedFetch(role, loc){
    // Function maps out query for indeed api call

    fetch()
        .then((jobs) => {
            const newState = { ...this.state.jobArray, "jobArray": jobs};
            this.setState({ "jobArray": newState});
        })  
}