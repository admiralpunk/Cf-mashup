const https = require('https');
const getProblemset = require('./getProblemset');
const getSolvedSet = require('./getSolvedSet');

async function getUnsolvedProblems(userId, wantedTags, unwantedTags) {
    console.log('inside unsolved problems');
    var problemData = await getProblemset();
    const solvedSet = await getSolvedSet(userId);
    var unsolvedProblems = {};
    for(let i=0; i<=5000; i+=100){
        unsolvedProblems[i] = [];
    }
    for(let i=0; i<=5000; i+=100) {
        var ratingProblems = problemData[i.toString()];
        for(let j=0; j<ratingProblems.length; j++) {
            let contestId = ratingProblems[j].contestId.toString();
            let index = ratingProblems[j].index.toString();
            var problem = [contestId, index];
            var tags = ratingProblems[j].tags;
            const tagSet = new Set([]);
            for(let k=0; k<tags.length; k++){
                tagSet.add(tags[k]);
            }
            let wanted = 1, unwanted = 1;
            for(let k=0; k<wantedTags.length; k++){
                if(!tagSet.has(wantedTags[k])){
                    wanted = 0;
                    break;
                }
            }
            for(let k=0; k<unwantedTags.length; k++){
                if(tagSet.has(unwantedTags[k])){
                    unwanted = 0;
                    break;
                }
            }
            if((!solvedSet.has(JSON.stringify(problem))) && (wanted) && (unwanted)){
                unsolvedProblems[i].push(problem);
            }
        }
    }
    console.log("unsolved problems made");
    return unsolvedProblems;
}

module.exports = getUnsolvedProblems;