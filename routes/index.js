const express = require('express');
const router = express.Router();

// SERVICES
router.get('/services', (req, res) => {
    // get all the services
    db.Service.find({}).lean().then(services => {
        res.json({
            services
        })
    }).catch(err => {
        res.json({
            error: err
        })
    })
});

// ADD SERVICE
router.post('/services/add', (req, res) => {
    db.Service.create(req.body).then(created => {
        // success service created
        res.json({
            created: true,
            service: created
        })
    }).catch(err => {
        // failure 
        res.json({
            created: false
        });
    })
});

// FETCH EVENTS
router.get('/events', (req, res) => {
    let query = {};
    // here will be a query object
    db.events.find(query).then(events => {
        res.json(events);
    })
});

// ACCEPT OR REJECT REQUEST
router.get('/update/request', (req, res) => {
    let query = {};
    // build the query
    db.events.findOneAndUpdate(query, {}).then(done => {

    })
});
// SEND EMAILS 
router.get('', (req, res) => {

})

// AUTH ROUTES 
// LOGIN
router.post('/login', (req, res) => {

})

// LOGOUT
router.get('/logout', (req, res) => {

})
module.exports = router;