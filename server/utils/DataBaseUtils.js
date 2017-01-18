import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Ad';

const Ad = mongoose.model('ads');
const unixTime = parseInt(new Date().getTime()/1000)


export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listAds(id) {
    return Ad.find().sort({createdAt: -1}).limit(100);
}

export function createAd(data) {
    const ad = new Ad({
        visible : data.visible,
        category : data.category,
        title : data.title,
        text : data.text,
        locationName : data.locationName,
        email : data.email,
        age : data.age,
        gender : data.gender,
        findGender : data.findGender,
        createdAt : unixTime
    });

    return ad.save();
}

export function deleteAd(id) {
    return Ad.findById(id).remove();
}

