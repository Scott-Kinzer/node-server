const express = require('express');
const {userRouter} = require('./routes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use('/', userRouter);

app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    }

    console.log("Server is working on 5000");

});

