import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const EpmloyeeSchema = new Schema({

    firstName: {
        type: String,
        required: "Please enter first name"
    },
    lastName: {
        type: String,
        required: "Please enter last name",
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});
