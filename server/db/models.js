import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const locationSchema = new Schema({
  locpath: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  }
}, 
{
    collection: 'sample1000'
});

const locationModel = model("Location", locationSchema);

export default locationModel