const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.argv.slice(2)[0];
const app = express();
const heroes = require("./_heroes");
const powers = require("./_powers");

app.use(bodyParser.json());

/** Retrieves all heroes. */
app.get('/heroes', (req, res) => {
    console.log('Heroes list.')
    res.send(heroes)
});

/** Retrieves all powers. */
app.get('/powers', (req, res) => {
    console.log('Powers list.')
    res.send(powers)
});

/** Retrieves a given hero by `heroId` */
app.post('/hero/**', (req, res) => {
    const heroId = parseInt(req.params[0]);
    const foundHero = heroes.find(subject => subject.id === heroId);
    if (foundHero) {
        for (let attribute in foundHero) {
            if (req.body[attribute]) {
                foundHero[attribute] = req.body[attribute];
                console.log(`Set ${attribute} to ${req.body[attribute]} in hero: ${heroId}`);
            }
        }
        res.status(202).header({ Location: `http://localhost:${port}/hero/${foundHero.id}` }).send(foundHero);
    } else {
        console.log(`Hero not found.`);
        res.status(404).send();
    }
});

app.use('/img', express.static(path.join(__dirname, 'img')));
console.log(`Service running at ${port}`);
app.listen(port);