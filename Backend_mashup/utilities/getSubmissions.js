const https = require('https');

async function getSubmissions(userId) {
    const url = `https://codeforces.com/api/user.status?handle=${userId}&from=1&count=10000`;
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
    return output.result;
}

module.exports = getSubmissions;