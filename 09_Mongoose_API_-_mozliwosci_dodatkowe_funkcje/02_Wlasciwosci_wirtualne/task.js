import mongoose from 'mongoose';

import {connectToMongoose} from './internals/connect.js';
import {runAssertions} from './internals/assertions.js';

(async function () {
    try {
        await connectToMongoose();

        let books; // find() result should be assigned to this property
        let Book; // Book model should be assigned to this property

        // Add all of your code below
        const bookSchema = new mongoose.Schema({
            author: String,
            country: String,
            language: String,
            pages: Number,
            title: String,
            year: Number,
            price: Number,
            amount: Number
        }, {toObject: {virtuals: true}, toJSON: {virtuals: true}})

        bookSchema.virtual('totalStoreValue').get(function () {
            return this.price * this.amount
        });

        bookSchema.virtual('bookDetails').get(function () {
            return `${this.author} - ${this.title}`
        }).set(function (data) {
            this.author = data.split('-')[0].trim();
            this.title = data.split('-')[1].trim();
        })


        Book = new mongoose.model("Books", bookSchema)

        const book1 = new Book({
            author: "",
            country: "Poland",
            language: 'polish',
            pages: 300,
            title: "",
            year: 1968,
            price: 35,
            amount: 2
        })
        book1.bookDetails = "Stanisław Lem - Solaris"
        await book1.save()

        books = await Book.find()
            .where("amount")
            .gte(40)
        // console.log(books[0].totalStoreValue)
        // console.log(books[1].bookDetails)

        console.log(books)

        await runAssertions(Book, books);
    } catch (err) {
        console.log('Error when running the task: ', err);
    }
})();
