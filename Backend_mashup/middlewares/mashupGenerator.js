const http = require('http');
const getSolvedSet = require('../utilities/getSolvedSet');
const getUnsolvedProblems = require('../utilities/getUnsolvedProblems');
const getFinalProblemset = require('../utilities/getFinalProblemset');
const getProblemset = require(`${__dirname}/../utilities/getProblemset`);
const getSubmissions = require(`${__dirname}/../utilities/getSubmissions`);

exports.generateProblemset = async (req, res, next) => {
    try {
        var data = req.body;
        var userId = data.users;
        var ratingRequirements = data.requirements;
        var wantedTags = data.wantedTags;
        var unwantedTags = data.unwantedTags;
        // console.log(UserId);
        let unsolvedProblems = await getUnsolvedProblems(userId, wantedTags, unwantedTags);
        console.log('unsolved problems done');
        let problemResponse = await getFinalProblemset(unsolvedProblems, ratingRequirements);

        res.status(200).json({
            status: 'Success',
            problemset: problemResponse,
        });

    } catch(error) {
        res.status(400).json({
            status: 'Error occured, Failed to load problemset',
            error: `${error}`,
        });
    }

    
    
    next();
}