import mongoose from "mongoose";


const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, },
    name: { type: String, required: [true, "Provide a valid Name"] },
    nacionality: { type: String, required: [true, "Provide a valid nacionality"] },
})

const authorModel = mongoose.model('authors', authorSchema);

export default authorModel;