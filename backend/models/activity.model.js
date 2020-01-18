import { Schema, Mongoose } from "mongoose";

const activitySchema = new Schema({
    username: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true }
},
    {
        timestamps: true,
    });

const Activity = Mongoose.model('Activity', activitySchema);

module.exports = Activity;