import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String,
})

//This is a model of the collection "book" in the database (books)
const Book = mongoose.model("Book", bookSchema);

export default Book;