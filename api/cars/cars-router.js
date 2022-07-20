const Car = require('./cars-model');

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid
} = require('./cars-middleware');

const router = require('express').Router();

router.get('/', (req, res, next) => {
    Car.getAll()
    .then(car => {
        res.json(car);
    })
    .catch(next)
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car)
})

router.post('/', checkCarPayload, (req, res, next) => {
    Car.create(req.body)
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something happend inside the router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router