const https = require('https');

async function getProblems() {

    const url = 'https://codeforces.com/api/problemset.problems';
    
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
        
    //console.log('Reached in get problemset');
    //console.log(output);
    //console.log(output.result.problems);
    var problems = output.result.problems;
    var problemData = {};
    for(let i=0; i<=5000; i+=100){
        problemData[i] = [];
    }
    for(let i=0; i<problems.length; i++){
        var current = problems[i];
        if('rating' in current) {
            problemData[current.rating.toString()].push(problems[i]);
        }
    }
    return problemData;
}

module.exports = getProblems;
