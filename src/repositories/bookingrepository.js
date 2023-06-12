const { CrudRepository } = require(".");
const {Booking} = require("../models")

class BookingRepository extends CrudRepository {
    constructor(){
        super(Booking)
    }
}

module.exports = BookingRepository