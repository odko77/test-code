const mongoose = require('mongoose')
const User = require("../models/user")
const Car = require("../models/car")

exports.test = async (req, res, netx) =>
{

    const db = mongoose.connection

    // const user = await User.create({
    //     name: "kherlen",
    //     age: 21
    // }).catch((err) => {
    //     console.log(err);
    // })

    // await Car.create({
    //     name: "Pruis 20",
    //     brand: "Toyota"
    // })

    const caras = await Car.findById("61dd75d43689bf8e549010af")
    // console.log(caras);
    // const user = caras.parent()
    // console.log(user);

    const user = await User.findById("61dd7af2e781e3fee0b09a5a").populate('cars')
    // user.cars.push(caras)
    // user.cars.remove(caras)
    // const cars = user.populated('cars')
    // user.save()
    // const car = user.cars.parent()

    // const subdoc = user.cars[0];
    // console.log(subdoc);

    // const doc = await user.cars.id(subdoc._id);
    // await user.update({
    //     $pull: {
    //         cars: caras._id
    //     }
    // })


    // await user.update({
    //     _cars: caras._id
    // })

    // const user = await User.find({
    //     name: "odko"
    // })

    // // const car = await Car.findOne({
    // //     _id: user[0]._cars._id
    // // })
    // // Car.

    // console.log(user[0])

    const session = await db.startSession()
    session.startTransaction()
    try {
        user.name = "kherlen"
        await user.save({ session })
        // throw new Error("ddsads")
        await session.commitTransaction();

    } catch (error) {
        console.log(error);
        await session.abortTransaction();
    }

    await session.endSession()

    res.status(200).json({
        succes: true,
        data: user
    })
}
