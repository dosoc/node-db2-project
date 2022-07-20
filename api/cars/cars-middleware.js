const Car = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try{
    const car = await Car.getById(req.params.id)
    if (!car) {
      res.status(404).json({
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  } catch (err) {
    req.status(500).json({
      message: 'problem finding car'
    })
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage} = req.body
  if (!vin ) {
    res.status(400).json({
      message: "vin is missing"
    })
  } else if (!make) {
    res.status(400).json({
      message: "make is missing"
    })
  } else if (!model) {
    res.status(400).json({
      message: "model is missing"
    })
  } else if (!mileage) {
    res.status(400).json({
      message: "mileage is missing"
    })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin);
  if (!isValidVin) {
    res.status(400).json({
      message: `vin ${req.body.vin} is invalid`
    })
  } else {
    next()
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
