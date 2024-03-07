const express = require('express');

const app = express();

const user = {
    name: 'Jan Kowalski',
    date: new Date(),
};

app.set('etag', 'strong');

app.get('/user', (req, res) => {
    res.append('Last-Modified', user.date.toUTCString());

    while (new Date() - user.date < 5000) {
        // do nothing
    }
    res.json(user);
});

app.put('/user/:name', (req, res) => {
    user.name = req.params.name;
    user.date = new Date();
    res.json(user);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});