const mongoose = require("mongoose")
const { Schema } = mongoose

const ChannelSchema = new Schema({
  name: { type: String, required: true, trim: true },
  uid: { type: String, sparse: true },
  email: { type: String, trim: true },
  handle: { type: String, required: true, trim: true, sparse: true },
  description: { type: String, trim: true },  
  logoURL: { type: String, trim: true },
  bannerImageURL: { type: String, trim: true },
  createdDate: { type: Date, default: Date.now },
  subscribers: [{ type: Schema.Types.ObjectId, ref: "Channel" }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  subscriptions: [{ type: Schema.Types.ObjectId, ref: "Subscription" }],
  collectionId: { type: String, sparse: true },
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }]
},{timestamps: true})

// Adding partial indexes
