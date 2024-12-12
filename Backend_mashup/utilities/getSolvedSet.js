const getSubmissions = require("./getSubmissions");

async function getSolvedSet(userId) {
    const solvedSet = new Set([]);
    console.log('GOT THE USERS');
    console.log(userId.stringify);
    for (let i = 0; i < userId.length; i++) {
        let submissions = await getSubmissions(userId[i]);
        console.log('RECIEVED ALL SUBMISSIONS, NOW GOING AHEAD');
        console.log(submissions.length);
        let acceptedSubmissions = [];
        for (let j = 0; j < submissions.length; j++) {
            if(submissions[j].verdict == "OK") {
                acceptedSubmissions.push(submissions[j]);
            }
        }
        console.log(acceptedSubmissions.length);
        for (let j = 0; j < acceptedSubmissions.length; j++) {
            var current = acceptedSubmissions[j].problem;
            if('rating' in current) {
                let prob = [current.contestId.toString(), current.index.toString()];
                solvedSet.add(JSON.stringify(prob));
            }
        }
    }
    return solvedSet;
} 

module.exports = getSolvedSet;