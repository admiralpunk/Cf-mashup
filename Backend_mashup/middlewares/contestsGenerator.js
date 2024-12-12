const http = require('http');
const getContests = require('../utilities/getContests');
const getContestProblems = require('../utilities/getContestProblems');
const getSolvedSet = require('../utilities/getSolvedSet');

// PROCESS 

/*

1. USE THE CONTEST LIST API OF CODEFORCES TO GENERATE A LIST CONTAINING ALL THE CONTESTS
2. USE A RANDOM NUMBER GENERATOR TO PICK RANDOM CONTESTS
3. USE THE API TO GET THE DATA OF THE CONTESTS (THAT CONTAINS THE PROBLEMS)
4. GET THE DATA OF THE SUBMISSIONS OF THE USERS



*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


exports.generateContest = async (req, res, next) => {
    try {
        var data = req.body;
        console.log(data);
        var type = data.type;
        console.log(type);
        var contests = await getContests(type);
        let go = 1;
        var userId = data.users;
        console.log('These are the users');
        console.log(userId);
        const solvedSet = await getSolvedSet(userId);
        let finalContestId = -1;
        const searchLimit = 30000;
        let counter = 0;
        console.log('THE TOTAL NUMBER OF CONTESTS ARE : ');
        console.log(contests.length);
        while(go) {
            if(counter > searchLimit) {
                break;
            }
            let len = contests.length;
            
            if(len === 0) {
                break;
            }
            let index = getRandomInteger(0,len-1);
            var contest = contests[index];
            let contestId = contest.id;
            console.log(contestId);
            const contestProblems = await getContestProblems(contestId);
            console.log(contestProblems);
            var problems = [];
            for(let i=0; i<contestProblems.length; i++) {
                var cur = contestProblems[i];
                let prob = [cur.contestId.toString(), cur.index.toString()];
                problems.push(JSON.stringify(prob));
            }
            let solved = 0;
            for(let i=0; i<problems.length; i++) {
                if(solvedSet.has(problems[i])){
                    solved = 1; 
                    break;
                }
            }
            if(!solved){
                finalContestId = contestId;
                go = 0;
            }
            counter++;
        }
        console.log(finalContestId);
        console.log('CAME OUTSIDE THE LOOP');
        if(finalContestId === -1) {
            res.status(200).json({
                status: 'Failed',
                contest: 'https://codeforces.com/contest/2047',
            });
        }
        else{
            
            res.status(200).json({
                status: 'Success',
                contest: `https://codeforces.com/contest/${finalContestId}`,
            });
        }
    }
    catch(err) {
        res.status(400).json({
            status: "Error occured ! Failed to generate contest!",
            error: `${err}`,
        });
    }
    next();
}