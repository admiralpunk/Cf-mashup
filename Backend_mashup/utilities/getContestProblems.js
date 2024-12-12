const https = require('https');
async function getContestProblems(contestId) {
    const url = `https://codeforces.com/api/contest.standings?contestId=${contestId}&asManager=false&from=1&count=1&showUnofficial=true`;
    
    var output = await new Promise((resolve, reject) => {
        try{
            https.get(url, (res) => {
                let data = '';
        
                // Collect data chunks
                res.on('data', (chunk) => {
                    data += chunk;
                });
        
                // Parse and log the JSON data
                res.on('end', () => {
                    try {
                        const jsonData = JSON.parse(data);
                        //console.log(jsonData);
                        resolve(jsonData);
                    } catch (error) {
                        console.error('Error parsing JSON:', error.message);
                        reject(error);
                    }
                });
            });
        } catch(error) {
            console.log('Error occured while contacting codeforces ...');
            console.log(error);
            reject(error);
        }
    });
    
    const problems = output.result.problems;

    return problems;
}

module.exports = getContestProblems;

// Codeforces Round 991 (Div. 3)