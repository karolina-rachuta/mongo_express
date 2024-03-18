import mongoose from 'mongoose';

import {connectToMongoose} from './internals/connect.js';
import {runAssertions} from './internals/assertions.js';

(async function () {
    try {
        await connectToMongoose();

        let data;

        // Add all of your code below
        const TicketSchema = new mongoose.Schema({
            eventName: String,
            price: Number,
            amount: Number,
            date: Date
        })


        const Ticket = mongoose.model("Ticket", TicketSchema);

        data = await Ticket.find({})
            .where("date")
            .gte(new Date("2021-04-15"))
            .lte(new Date("2021-08-20"))
            .where("price").gt(140)
            .exec()

        console.log(data)
        await runAssertions(data);
    } catch (err) {
        console.log('Error when running the task: ', err);
    }
})();
