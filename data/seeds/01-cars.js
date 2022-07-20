// STRETCH

const cars = [
    {
        vin: '11111111111111111',
        make: 'ford',
        model: 'focus',
        mileage: 123456,
        title: 'clean'
    },
    {
        vin: '11111111111111112',
        make: 'chevy',
        model: 'cavilier',
        mileage: 123456,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '11111111111111113',
        make: 'toyota',
        model: 'corola',
        mileage: 12346,
        title: 'clean'
    },
    {
        vin: '11111111111111114',
        make: 'ford',
        model: 'f-250',
        mileage: 1256,
        title: 'salvage',
        transmission: 'auto'
    },
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}