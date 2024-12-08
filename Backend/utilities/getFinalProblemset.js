async function getFinalProblemset(unsolvedProblems, ratingRequirements) {

    console.log('inside final problems');

    var generatedProblemset = {};
    for(let i=0; i<=5000; i+=100){
        generatedProblemset[i] = [];
    }

    for(const key in ratingRequirements) {
        let frequency = ratingRequirements[key];
        let count = (frequency <= unsolvedProblems[key].length) ? frequency : unsolvedProblems[key].length;
        for(let j = 0; j < count; j++) {
            generatedProblemset[key].push(unsolvedProblems[key][j]);
        }
    }

    var problemResponse = [];

    for(const key in generatedProblemset) {
        var currentList = generatedProblemset[key];
        for(let j = 0; j < currentList.length; j++) {
            var currentProblem = currentList[j];
            problemResponse.push(`https://codeforces.com/problemset/problem/${currentProblem[0]}/${currentProblem[1]}`);
        }
    }

    return problemResponse;
}

module.exports = getFinalProblemset;