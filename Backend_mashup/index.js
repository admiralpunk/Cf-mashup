const app = require('./app');


const port = 6500;
app.listen(port, () => {
    console.log(`Listening on port number : ${port}`);
});