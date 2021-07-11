const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const EventStoreSchema = new Schema({
    contractId: String,
    contractEvents: Array,
    currentStatus: String,
}, {collection: 'eventstore'});
module.exports = mongoose.model("EventStore", EventStoreSchema);