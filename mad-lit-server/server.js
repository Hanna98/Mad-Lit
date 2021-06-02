const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'withoutmyfloss',
        database: 'madlit'
    }
});

db.select('*').from('users').then(data => {
    // console.log(data);
});




app.post('/test', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
});




app.post('/login', (req, res) => {
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            console.log(data)
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);

            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', req.body.email)
                    .then(user => {

                        res.json(user[0])
                    })
                    .catch(err => res.status(400).json('unable to get user'))
            } else {
                res.status(400).json('wrong credentials uwu')
            }
        })
        .catch(err => res.status(400).json('wrong credentials'))
})

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        username: username,
                        email: loginEmail[0],
                    })
                    .then(user => {
                        console.log(user)
                        res.json(user[0]);
                    })
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .catch(err => res.status(400).json('unable to signup!'))
})

app.post('/writing', (req, res) => {
    const { id, story_name, story, partofspeech } = req.body;
    db.select('id').from('users_stories')
        .where('id', '=', req.body.id)
       db('users_stories').insert({
            id: id,
            story: story,
            partofspeech: partofspeech

        })
        .then(data=>{
            console.log(data)
            res.json(data)
        })
    .catch(err => res.status(400).json('wrong id bro'))

})



app.get('/profile/id/:id', (req, res) => {
    let test = req.params.id;
    console.log(test)
    db.select('*').from('users_stories').where({
        id: test
    })
        .then(user => {
            console.log(user)
            if (user.length) {
                res.json(user)


            } else {
                res.status(400).json('Profile Not Found')
            }
        })
        .catch(err => res.status(400).json('Error Retrieving Profile'))

})

app.get('/', (req, res) => {
    db.select('*').from('users_stories')
        .then(user => {
            console.log(user)
            if (user) {
                res.json(user)
            } else {
                res.status(400).json('Profile Not Found')
            }
        })
        .catch(err => res.status(400).json('Error Retrieving Profile'))

})

app.listen(3001, () => {
    console.log('app is running on port 3001');
});

/*
/signin POST = success/fail ........we use post to hide query and passwords, sent through https
/login POST = user
/profile/:userID GET = user


res.send is the same as res.json but .json has more added features
*/