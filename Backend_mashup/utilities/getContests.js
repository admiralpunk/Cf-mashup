const https = require('https');

async function getContests(type) {
    const url = 'https://codeforces.com/api/contest.list?gym=false';
    var output = await new Promise((resolve, reject) => {
        try {
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
                        //console.log('Parsed Data:', jsonData);
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
    //console.log(output);
    //console.log('Reached in get submissions');
    var contestList = output.result;
    var outputList = [];
    for (let i = 0; i < contestList.length; i++) {
        const cur = contestList[i];
        let name = cur["name"];
        if(name.includes(type)){
            outputList.push(cur);
        }
    }
    return outputList;
}

module.exports = getContests;