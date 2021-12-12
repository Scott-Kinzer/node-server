const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    // console.log(req);

    res.end('GeeksforGeeks');

});

app.post('/data', (req, res) => {
    console.log(req.body);

    res.end('GeeksforGeeks');

});


app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    }

    console.log("Server is working on 5000");

});

