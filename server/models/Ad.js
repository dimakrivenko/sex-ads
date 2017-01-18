import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdSchema = new Schema({
    visible      : { type: Boolean },
    category     : { type: String },
    title      	 : { type: String, required: true },
    text     	 : { type: String },
    locationName : { type: Number },
    email  		 : { type: String },
    age			 : { type: Number },
    gender		 : { type: Number },
    findGender	 : { type: Number },
    createdAt	 : { type: Number }
});

mongoose.model('ads', AdSchema);
